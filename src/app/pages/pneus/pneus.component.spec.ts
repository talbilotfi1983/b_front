/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PneusComponent } from './pneus.component';

describe('PneusComponent', () => {
  let component: PneusComponent;
  let fixture: ComponentFixture<PneusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PneusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PneusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
