import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicPageComponent } from './pages/basic-page/basic-page.component';
import { DymaicPageComponent } from './pages/dymaic-page/dymaic-page.component';
import { SwitchesPagesComponent } from './pages/switches-pages/switches-pages.component';

const routes: Routes = [{
  path: '',
  children: [
    { path: 'basic', component: BasicPageComponent },
    { path: 'dynamic', component: DymaicPageComponent },
    { path: 'switches', component: SwitchesPagesComponent },
    { path: '**', redirectTo: 'basic' },
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReactiveRoutingModule { }
