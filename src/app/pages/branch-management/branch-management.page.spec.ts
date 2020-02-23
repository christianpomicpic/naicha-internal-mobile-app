import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BranchManagementPage } from './branch-management.page';

describe('BranchManagementPage', () => {
  let component: BranchManagementPage;
  let fixture: ComponentFixture<BranchManagementPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BranchManagementPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BranchManagementPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
