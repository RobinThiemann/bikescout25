import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { HomeComponent } from './components/home/home.component';
import { RentComponent } from './components/rent/rent.component';
import { LendComponent } from './components/lend/lend.component';
import { UserComponent } from './components/user/user.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'rent', component: RentComponent },
  { path: 'lend', component: LendComponent },
  { path: '', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'user', component: UserComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
