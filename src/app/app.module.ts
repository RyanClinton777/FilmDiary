import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

//Import http client module to make the http client available in the entire app
import { HttpClientModule } from '@angular/common/http';
//ionic storage
import { IonicStorageModule } from '@ionic/storage';
import { EnterDetailsPage } from './modals/enter-details/enter-details.page';// for modal

import { FormsModule } from '@angular/forms';//for 2 way data-binding

//added enterdetailspage to declarations and entrycomponents to make it work
@NgModule({
  declarations: [AppComponent, EnterDetailsPage],
  entryComponents: [EnterDetailsPage],
  //add httpclientmodule, ionicstoragemodule to imports
  imports: [BrowserModule, IonicStorageModule.forRoot(), IonicModule.forRoot(), AppRoutingModule, HttpClientModule, FormsModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
