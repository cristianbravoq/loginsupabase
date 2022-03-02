import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NavbarModule } from '@shared/navbar/navbar.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavbarModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      preventDuplicates: true,
      positionClass: 'toast-top-center',
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
