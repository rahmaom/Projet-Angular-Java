import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowAthelethesComponent } from './show-athelethes.component';

describe('ShowAthelethesComponent', () => {
  let component: ShowAthelethesComponent;
  let fixture: ComponentFixture<ShowAthelethesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowAthelethesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowAthelethesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
