import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSportsComponent } from './list-sports.component';

describe('ListSportsComponent', () => {
  let component: ListSportsComponent;
  let fixture: ComponentFixture<ListSportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListSportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListSportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
