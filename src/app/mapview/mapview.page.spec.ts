import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapviewPage } from './mapview.page';

describe('MapviewPage', () => {
  let component: MapviewPage;
  let fixture: ComponentFixture<MapviewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapviewPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapviewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
