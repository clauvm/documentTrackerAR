import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UBookComponent } from './u-book.component';

describe('UBookComponent', () => {
  let component: UBookComponent;
  let fixture: ComponentFixture<UBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UBookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
