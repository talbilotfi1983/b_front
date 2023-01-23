/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PopupInscriptionGaragesComponent } from './popup-inscription-garages.component';

describe('PopupInscriptionGaragesComponent', () => {
  let component: PopupInscriptionGaragesComponent;
  let fixture: ComponentFixture<PopupInscriptionGaragesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopupInscriptionGaragesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupInscriptionGaragesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
