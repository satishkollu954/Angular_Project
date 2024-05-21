import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskFilterComponent } from './task-filter/task-filter.component';
import { LoginComponent } from './login/login.component';
import { ProfileIconComponent } from './profile-icon/profile-icon.component';



@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent,
    TaskFilterComponent,
    LoginComponent,
    ProfileIconComponent,
    

   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
