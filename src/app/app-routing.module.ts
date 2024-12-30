import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './template/dashboard/dashboard.component';

const routes: Routes = [
  { 
    path: '', redirectTo: '/dashboard/home', 
    pathMatch: 'full' 
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      {
        path: 'home',
        loadChildren: () => import('./dashboard/modules/home/home.module').then((m) => m.HomeModule)
      },
      {
        path: 'campanhas',
        loadChildren: () => import('./dashboard/modules/campaigns/campaigns.module').then((m) => m.CampaignsModule)
      },
      {
        path: 'usuarios',
        loadChildren: () => import('./dashboard/modules/users/users.module').then((m) => m.UsersModule)
      }
    ]
  } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
