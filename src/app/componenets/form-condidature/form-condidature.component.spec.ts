import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCondidatureComponent } from './form-condidature.component';

describe('FormCondidatureComponent', () => {
  let component: FormCondidatureComponent;
  let fixture: ComponentFixture<FormCondidatureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormCondidatureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormCondidatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
