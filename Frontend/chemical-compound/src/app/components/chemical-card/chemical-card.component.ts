import { Component, Input } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
@Component({
  selector: 'app-chemical-card',
  templateUrl: './chemical-card.component.html',
  styleUrls: ['./chemical-card.component.scss'],
})
export class ChemicalCardComponent {
  @Input('id') id: string = '';
  @Input('chemicalName') chemicalName: string = '';
  @Input('chemDesc') chemDesc: string = '';
  @Input('imgAtrb') imgAtrb: string = '';
  @Input('imgSource') imgSource: string = '';
  @Input('dateModified') dateModified: string = '';
  constructor(private router: Router) {}
  public onNavigateToDetailsPage(id: string) {
    this.router.navigate(['chemical-card-details', id]);
  }
}
