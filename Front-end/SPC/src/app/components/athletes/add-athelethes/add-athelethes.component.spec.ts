import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAthelethesComponent } from './add-athelethes.component';

describe('AddAthelethesComponent', () => {
  let component: AddAthelethesComponent;
  let fixture: ComponentFixture<AddAthelethesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddAthelethesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAthelethesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
