import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifycodePage } from './verifycode.page';

describe('VerifycodePage', () => {
  let component: VerifycodePage;
  let fixture: ComponentFixture<VerifycodePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerifycodePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerifycodePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
