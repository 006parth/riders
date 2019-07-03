import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'checkwork', loadChildren: './checkwork/checkwork.module#CheckworkPageModule' },
  { path: 'scheduleinfo', loadChildren: './scheduleinfo/scheduleinfo.module#ScheduleinfoPageModule' },
  { path: 'mapview', loadChildren: './mapview/mapview.module#MapviewPageModule' },
  { path: 'signup', loadChildren: './signup/signup.module#SignupPageModule' },
  { path: 'forgotpwd', loadChildren: './forgotpwd/forgotpwd.module#ForgotpwdPageModule' },
  { path: 'verifycode', loadChildren: './verifycode/verifycode.module#VerifycodePageModule' },
  { path: 'resetpwd', loadChildren: './resetpwd/resetpwd.module#ResetpwdPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
