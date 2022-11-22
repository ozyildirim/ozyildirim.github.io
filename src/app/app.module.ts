import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { getAnalytics, provideAnalytics, ScreenTrackingService, UserTrackingService } from '@angular/fire/analytics';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectLayoutComponent } from './core/layouts/project-layout/project-layout.component';
import { HomeComponent } from './layouts/home/home.component';
import { HomeModule } from './layouts/home/home.module';
import { SharedModule } from './shared/shared.module';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProjectLayoutComponent,
  ],
  imports: [
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    // provideAnalytics(() => getAnalytics()),
    provideFirestore(() => getFirestore()),
    // providePerformance(() => getPerformance()),
    // provideRemoteConfig(() => getRemoteConfig()),
    // provideStorage(() => getStorage()),
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HomeModule,

  ],
  providers: [
    ScreenTrackingService, UserTrackingService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
