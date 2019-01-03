import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListingComponent } from './components/UserListing/userlisting.component';
import { UserDetailsComponent } from './components/UserDetails/userdetails.component';

const routes: Routes = [
 { path: '', redirectTo: '/userlisting', pathMatch: 'full' },
 { path: 'userlisting', component: UserListingComponent },
 { path: 'userdetails/:userid', component: UserDetailsComponent }
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
