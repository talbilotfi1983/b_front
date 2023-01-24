/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PopupGaragesComponent } from './popup-garages.component';

describe('PopupGaragesComponent', () => {
  let component: PopupGaragesComponent;
  let fixture: ComponentFixture<PopupGaragesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopupGaragesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupGaragesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
