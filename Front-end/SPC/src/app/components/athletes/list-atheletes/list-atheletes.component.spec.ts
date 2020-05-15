import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAtheletesComponent } from './list-atheletes.component';

describe('ListAtheletesComponent', () => {
  let component: ListAtheletesComponent;
  let fixture: ComponentFixture<ListAtheletesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListAtheletesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAtheletesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
