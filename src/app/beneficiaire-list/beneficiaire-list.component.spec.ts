import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeneficiaireListComponent } from './Beneficiaire-list.component';

describe('BeneficiaireListComponent', () => {
  let component: BeneficiaireListComponent;
  let fixture: ComponentFixture<BeneficiaireListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeneficiaireListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeneficiaireListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
