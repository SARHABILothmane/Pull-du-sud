import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NosValeurComponent } from './nos-valeur.component';

describe('NosValeurComponent', () => {
  let component: NosValeurComponent;
  let fixture: ComponentFixture<NosValeurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NosValeurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NosValeurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
