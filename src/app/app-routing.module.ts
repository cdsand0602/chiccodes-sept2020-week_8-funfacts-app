import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CallbacksPageComponent } from './callbacks-page/callbacks-page.component';
import { CreatorPageComponent } from './creator-page/creator-page.component';
import { FunctionPageComponent } from './function-page/function-page.component';
import { MainPageComponent } from './main-page/main-page.component';
import { PromisePageComponent } from './promise-page/promise-page.component';

const routes: Routes = [
  {
    path: 'main',
    component: MainPageComponent
  },
  {
    path: 'promise',
    component: PromisePageComponent
  },
  {
    path: 'callbacks',
    component: CallbacksPageComponent
  },
  {
    path: 'function',
    component: FunctionPageComponent
  },
  {
    path: 'creator',
    component: CreatorPageComponent
  }
];




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
