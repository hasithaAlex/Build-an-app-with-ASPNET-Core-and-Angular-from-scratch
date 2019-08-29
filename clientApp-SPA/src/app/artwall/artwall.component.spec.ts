/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ArtwallComponent } from './artwall.component';

describe('ArtwallComponent', () => {
  let component: ArtwallComponent;
  let fixture: ComponentFixture<ArtwallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtwallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtwallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
