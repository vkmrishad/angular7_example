import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { UserListingComponent } from './components/UserListing/userlisting.component';
import { UserDetailsComponent } from './components/UserDetails/userdetails.component';

import { UserService } from './services/user.service';

import { FilterPipe } from './pipes/usersearch.pipe';

@NgModule({
  declarations: [
    AppComponent,
    UserListingComponent,
    UserDetailsComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
