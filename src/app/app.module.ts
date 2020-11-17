import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { PromisePageComponent } from './promise-page/promise-page.component';
import { CallbacksPageComponent } from './callbacks-page/callbacks-page.component';
import { FunctionPageComponent } from './function-page/function-page.component';
import { CreatorPageComponent } from './creator-page/creator-page.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    PromisePageComponent,
    CallbacksPageComponent,
    FunctionPageComponent,
    CreatorPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
