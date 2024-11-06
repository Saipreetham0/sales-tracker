import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicModule } from '@ionic/angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SalesmanTrackerPageModule } from './salesman-tracker/salesman-tracker.module';
import { Geolocation } from '@ionic-native/geolocation/ngx';
// import { LocalNotifications } from '@ionic-native/local-notifications/ngx';
// import { LocalNotifications } from '@capacitor/local-notifications';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    SalesmanTrackerPageModule
  ],
  providers: [
    Geolocation,
    // provideFirebaseApp(() => initializeApp({ ... })),
    // provideFirestore(() => getFirestore()),


  ],
  bootstrap: [AppComponent]
})
export class AppModule { }