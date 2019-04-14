import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './dashboard/sidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddmemberComponent } from './dashboard/addmember.component';
import { FormsModule } from '@angular/forms'
import { HomeComponent } from './home/home.component';
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { CollabserviceService } from './collabservice.service';
import { ViewmemberComponent } from './dashboard/viewmember.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    DashboardComponent,
    AddmemberComponent,
    HomeComponent,
    ViewmemberComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    FormsModule,
  ],
  providers: [CollabserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
