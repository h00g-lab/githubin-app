import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardModule } from './dashboard/dashboard.module';
import { HomeModule } from './home/home.module';

const routes: Routes = [
    { path: ':user/:repository', loadChildren: () => import('./dashboard/dashboard.module').then(m => DashboardModule)},
    { path: '', loadChildren: () => import('./home/home.module').then(m => HomeModule)},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
