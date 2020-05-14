import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BasicComponent } from './components/basic/basic.component';
import { GreeterService } from './components/basic/greeter.service';
import { HttpClientModule } from '@angular/common/http';
import { BooklistComponent } from './components/booklist/booklist.component';
import { BooksDataService } from './services/books.data.service';
import { CounterComponent } from './components/counter/counter.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { reducers } from './reducers';
import { ToysModule } from './features/toys/toys.module';
@NgModule({
  declarations: [
    AppComponent,
    BasicComponent,
    BooklistComponent,
    CounterComponent
  ],
  imports: [
    BrowserModule,
    ToysModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument()
  ],
  providers: [GreeterService, BooksDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
