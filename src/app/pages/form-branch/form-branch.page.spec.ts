import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormBranchPage } from './form-branch.page';

describe('FormBranchPage', () => {
  let component: FormBranchPage;
  let fixture: ComponentFixture<FormBranchPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormBranchPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormBranchPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
