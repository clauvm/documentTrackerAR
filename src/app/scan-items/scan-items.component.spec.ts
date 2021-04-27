import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScanItemsComponent } from './scan-items.component';

describe('ScanItemsComponent', () => {
  let component: ScanItemsComponent;
  let fixture: ComponentFixture<ScanItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScanItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScanItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
