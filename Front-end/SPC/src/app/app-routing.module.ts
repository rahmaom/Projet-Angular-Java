import { TokenGuardGuard } from './token-guard.guard';
import { ListSportsComponent } from './components/sports/list-sports/list-sports.component';
import { ListAtheletesComponent } from './components/athletes/list-atheletes/list-atheletes.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ChartsComponent } from './components/charts/charts.component';
import { ShowAthelethesComponent } from './components/athletes/show-athelethes/show-athelethes.component';
import { LoginComponent } from './auth/login/login.component';
import { AddAthelethesComponent } from './components/athletes/add-athelethes/add-athelethes.component';
import { SportsComponent } from './components/sports/sports.component';
import { AddSportComponent } from './components/sports/add-sport/add-sport.component';


const routes: Routes = [{
  path: '',
  component: DefaultComponent, canActivate:[TokenGuardGuard],
  children: [{
    path: '',
    component: DashboardComponent, canActivate:[TokenGuardGuard]
  },
      { path: "athletes/:id", component: ListAtheletesComponent, canActivate:[TokenGuardGuard] },
      { path: "add-athlete/:id", component: AddAthelethesComponent, canActivate:[TokenGuardGuard] },
      { path: "athlete/:id", component: ShowAthelethesComponent, canActivate:[TokenGuardGuard] },
      {path:'charts', component:ChartsComponent, canActivate:[TokenGuardGuard]},
      {path:'clube-sports', component : SportsComponent, canActivate:[TokenGuardGuard]},
      {path:'add-sport', component : AddSportComponent, canActivate:[TokenGuardGuard]},
      {path:'sportList', component : ListSportsComponent, canActivate:[TokenGuardGuard]},
      
    
  ],
},
{path:'login', component:LoginComponent}

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
