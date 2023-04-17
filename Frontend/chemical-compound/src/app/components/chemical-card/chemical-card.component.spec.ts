import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChemicalCardComponent } from './chemical-card.component';

describe('ChemicalCardComponent', () => {
  let component: ChemicalCardComponent;
  let fixture: ComponentFixture<ChemicalCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChemicalCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChemicalCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
