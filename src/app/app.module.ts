import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MaterialModule } from './material/material.module';
import { WomenPageComponent } from './women-page/women-page.component';
import { InfoBlockComponent } from './info-block/info-block.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WomenPageComponent,
    InfoBlockComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
