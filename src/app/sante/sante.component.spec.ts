import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SanteComponent } from './sante.component';

describe('SanteComponent', () => {
  let component: SanteComponent;
  let fixture: ComponentFixture<SanteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SanteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
