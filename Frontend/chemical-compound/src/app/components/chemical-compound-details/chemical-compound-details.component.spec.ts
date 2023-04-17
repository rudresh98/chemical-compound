import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChemicalCompoundDetailsComponent } from './chemical-compound-details.component';

describe('ChemicalCompoundDetailsComponent', () => {
  let component: ChemicalCompoundDetailsComponent;
  let fixture: ComponentFixture<ChemicalCompoundDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChemicalCompoundDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChemicalCompoundDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
