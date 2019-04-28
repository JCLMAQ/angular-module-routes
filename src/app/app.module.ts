import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// App routing
import { AppRoutingModule } from './app-routing.module';

// App Component
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

// App Modules
// import { Module1Module } from './module1/module1.module';
// import { Module2Module } from './module2/module2.module';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // Module1Module,
    // Module2Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
