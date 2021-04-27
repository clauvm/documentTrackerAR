import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ULibraryComponent } from './u-library.component';

describe('ULibraryComponent', () => {
  let component: ULibraryComponent;
  let fixture: ComponentFixture<ULibraryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ULibraryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ULibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
