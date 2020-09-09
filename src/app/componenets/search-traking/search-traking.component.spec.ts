import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchTrakingComponent } from './search-traking.component';

describe('SearchTrakingComponent', () => {
  let component: SearchTrakingComponent;
  let fixture: ComponentFixture<SearchTrakingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchTrakingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchTrakingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
