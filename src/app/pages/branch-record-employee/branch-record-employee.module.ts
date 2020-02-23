import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { BranchRecordEmployeePage } from './branch-record-employee.page';

const routes: Routes = [
  {
    path: '',
    component: BranchRecordEmployeePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [BranchRecordEmployeePage]
})
export class BranchRecordEmployeePageModule {}
