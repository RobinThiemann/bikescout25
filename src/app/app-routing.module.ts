import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { HomeComponent } from './components/home/home.component';
import { RentComponent } from './components/rent/rent.component';
import { LendComponent } from './components/lend/lend.component';
import { UserComponent } from './components/user/user.component';
import { LendBikeOverviewComponent } from './components/lend-bike-overview/lend-bike-overview.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'rent', component: RentComponent },
  { path: 'lend', component: LendComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'user', component: UserComponent },
  { path: 'lend-bike-overview', component: LendBikeOverviewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
