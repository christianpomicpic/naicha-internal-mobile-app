import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BranchRecordAdminPage } from './branch-record-admin.page';

describe('BranchRecordAdminPage', () => {
  let component: BranchRecordAdminPage;
  let fixture: ComponentFixture<BranchRecordAdminPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BranchRecordAdminPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BranchRecordAdminPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
