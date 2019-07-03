import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckworkPage } from './checkwork.page';

describe('CheckworkPage', () => {
  let component: CheckworkPage;
  let fixture: ComponentFixture<CheckworkPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckworkPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckworkPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
