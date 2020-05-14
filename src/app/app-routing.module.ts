import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BasicComponent } from './components/basic/basic.component';
import { BooklistComponent } from './components/booklist/booklist.component';
import { CounterComponent } from './components/counter/counter.component';


const routes: Routes = [
  {
    path: 'basic',
    component: BasicComponent
  },
  {
    path: 'book-list',
    component: BooklistComponent
  },
  {
    path: 'counter',
    component: CounterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
