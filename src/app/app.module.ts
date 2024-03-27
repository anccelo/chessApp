import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BorderCaseDirective } from './border-case.directive';
import { BorderCaseChessboardLightWoodDirective } from './border-case-chessboard-light-wood.directive';

@NgModule({
  declarations: [
    AppComponent,
    BorderCaseDirective,
    BorderCaseChessboardLightWoodDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
