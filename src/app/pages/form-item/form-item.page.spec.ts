import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormItemPage } from './form-item.page';

describe('FormItemPage', () => {
  let component: FormItemPage;
  let fixture: ComponentFixture<FormItemPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormItemPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormItemPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
