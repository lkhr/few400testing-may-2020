import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToysComponent } from './toys.component';
import { Routes, RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { reducers, featureName } from './reducers';


const routes: Routes = [
  {
    path: 'toys',
    component: ToysComponent
  }
];

@NgModule({
  declarations: [ToysComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature(featureName, reducers)
  ],
  exports: []
})
export class ToysModule { }
