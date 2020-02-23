import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BranchRecordEmployeePage } from './branch-record-employee.page';

describe('BranchRecordEmployeePage', () => {
  let component: BranchRecordEmployeePage;
  let fixture: ComponentFixture<BranchRecordEmployeePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BranchRecordEmployeePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BranchRecordEmployeePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
