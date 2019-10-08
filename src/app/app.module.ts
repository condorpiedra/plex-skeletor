import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Plex, PlexModule } from '@andes/plex';
import { routing, appRoutingProviders } from './app-routing.module';

// Components
import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';

@NgModule({
 declarations: [
   AppComponent,
   HomeComponent
 ],
 imports: [
   BrowserModule,
   FormsModule,
   HttpModule,
   PlexModule,
   routing
 ],
 providers: [
   Plex,  
   appRoutingProviders  
 ],
 bootstrap: [AppComponent]
})
export class AppModule { }