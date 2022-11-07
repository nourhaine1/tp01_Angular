import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PremierComponent } from './premier/premier.component';

import { TroisiemeComponent } from './troisieme/troisieme.component';

import { DeuxiemeComponent } from './deuxieme/deuxieme.component';
import { QuatriemeComponent } from './MesComposants/quatrieme/quatrieme.component';

@NgModule({
  declarations: [
    AppComponent,
    PremierComponent,
    DeuxiemeComponent,
    TroisiemeComponent,
    QuatriemeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
