import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)},
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
  // { path: 'create-user', loadChildren: './pages/create-user/create-user.module#CreateUserPageModule' },
  { path: 'forgot-password', loadChildren: './pages/forgot-password/forgot-password.module#ForgotPasswordPageModule' },
  { path: 'reset-password', loadChildren: './pages/reset-password/reset-password.module#ResetPasswordPageModule' },
  { path: 'user-management', loadChildren: './pages/user-management/user-management.module#UserManagementPageModule' },
  { path: 'inventory', loadChildren: './pages/inventory/inventory.module#InventoryPageModule' },
  { path: 'settings', loadChildren: './pages/settings/settings.module#SettingsPageModule' },
  // { path: 'create-item', loadChildren: './pages/create-item/create-item.module#CreateItemPageModule' },
  
  { path: 'form-user', loadChildren: './pages/form-user/form-user.module#FormUserPageModule' },
  { path: 'form-item', loadChildren: './pages/form-item/form-item.module#FormItemPageModule' },
  { path: 'form-branch', loadChildren: './pages/form-branch/form-branch.module#FormBranchPageModule' },
  { path: 'branch-management', loadChildren: './pages/branch-management/branch-management.module#BranchManagementPageModule' },
  { path: 'branch-record-admin', loadChildren: './pages/branch-record-admin/branch-record-admin.module#BranchRecordAdminPageModule' },
  { path: 'branch-record-employee', loadChildren: './pages/branch-record-employee/branch-record-employee.module#BranchRecordEmployeePageModule' },




];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
