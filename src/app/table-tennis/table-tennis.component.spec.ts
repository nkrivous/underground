/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TableTennisComponent } from './table-tennis.component';

describe('TableTennisComponent', () => {
  let component: TableTennisComponent;
  let fixture: ComponentFixture<TableTennisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableTennisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableTennisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
