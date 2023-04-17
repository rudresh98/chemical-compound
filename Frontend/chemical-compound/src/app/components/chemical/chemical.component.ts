import { HttpErrorResponse } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { ChemicalApiService } from 'src/app/services/chemical-api.service';
import {
  MatTableDataSource,
  MatTableDataSourcePageEvent,
} from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

export interface Card {
  id: any;
  CompoundName: string;
  CompounrDescription: string;
  strImageAttribution: string;
  strImageSource: string;
  dateModified: string;
}

@Component({
  selector: 'app-chemical',
  templateUrl: './chemical.component.html',
  styleUrls: ['./chemical.component.scss'],
})
export class ChemicalComponent {
  @ViewChild('paginator') paginator!: MatPaginator;
  public getChemicalData: Array<any> = [];
  public toggleLoader: boolean = true;
  public slicedData: Array<any> = [];

  public dataSource: MatTableDataSource<Card> = new MatTableDataSource<Card>();
  constructor(private chemicalService: ChemicalApiService) {}
  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    setTimeout(() => {
      this.onGetChemicalList();
    }, 2000);
  }
  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
  }
  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    // this.dataSource.paginator = this.paginator;
  }
  private onGetChemicalList(): void {
    this.toggleLoader = true;
    this.chemicalService.getChemicalList().subscribe(
      (res: any) => {
        console.log(res);
        if (res.data.length === 0) {
          this.toggleLoader = false;
        } else {
          this.toggleLoader = false;
          this.dataSource = new MatTableDataSource(res.data);
          this.dataSource.paginator = this.paginator;
          console.log(this.dataSource, 'data', this.dataSource.paginator);
          this.getChemicalData = [...res.data];
          this.slicedData = [...this.getChemicalData.slice(0, 5)];
          console.log('====================================');
          console.log(this.slicedData);
          console.log('====================================');
        }
      },
      (err: HttpErrorResponse) => {
        this.toggleLoader = false;
        console.error(err.message);
      }
    );
  }
  public onHandlePagination(e: any): void {
    console.log(e);
    console.log(this.dataSource);
    const startIndex = e.pageIndex * e.pageSize;
    let endIndex = startIndex + e.pageSize;
    if (endIndex > this.getChemicalData.length) {
      endIndex = this.getChemicalData.length;
    }
    this.slicedData = this.getChemicalData.slice(startIndex, endIndex);
  }
}
