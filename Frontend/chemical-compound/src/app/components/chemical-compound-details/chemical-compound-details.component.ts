import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ChemicalApiService } from 'src/app/services/chemical-api.service';
import { ChemicalDetails } from 'src/app/interface/chemical.interface';
import { FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-chemical-compound-details',
  templateUrl: './chemical-compound-details.component.html',
  styleUrls: ['./chemical-compound-details.component.scss'],
})
export class ChemicalCompoundDetailsComponent {
  private chemicalId: string = '';
  public chemicalObj: any = {
    id: '',
    CompoundName: '',
    CompounrDescription: '',
    strImageSource: '',
    strImageAttribution: '',
    dateModified: '',
    createdAt: null,
    updatedAt: null,
  };
  public onSetEdit = false;
  public onSetClass = true;
  constructor(
    private activatedRoute: ActivatedRoute,
    private commonApiService: ChemicalApiService,
    private router: Router
  ) {}
  profileForm = new FormGroup({
    CompoundName: new FormControl(''),
    CompounrDescription: new FormControl(''),
    dateModified: new FormControl(''),
  });

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((res: any) => {
      if (res.id) {
        this.chemicalId = res.id;
        this.getChemicalDetails();
      } else {
        this.chemicalId = '';
      }
    });
  }
  public getChemicalDetails(): void {
    this.commonApiService
      .getChemicalListDetails(this.chemicalId)
      .subscribe((res) => {
        this.chemicalObj = { ...res.data };
        this.profileForm.setValue({
          CompoundName: this.chemicalObj.CompoundName,
          CompounrDescription: this.chemicalObj.CompounrDescription,
          dateModified: new Date().toISOString(),
        });
      });
  }

  public OnEditHandler(): void {
    this.onSetEdit = !this.onSetEdit;
    this.onSetClass = !this.onSetClass;
  }
  public onEditSubmitHandler() {
    const payload = {
      CompoundName: this.profileForm.get('CompoundName')?.value,
      CompounrDescription: this.profileForm.get('CompounrDescription')?.value,
      id: this.chemicalId,
      dateModified: new Date(),
    };
    this.commonApiService.getChemicalEdit(payload).subscribe((res) => {
      if (res.msg === 'SUCCESS') {
        console.log('hi');
        this.reloadHandler();
        this.router.navigate(['/']);
      } else {
        console.error(res);
      }
    });
  }
  public reloadHandler() {
    // this.ngOnInit();
    // this.router.navigate(['/chemical-card-details', this.chemicalId]);

    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/chemical-card-details', this.chemicalId]);
    });
  }
}
