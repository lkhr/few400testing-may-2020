import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BasicComponent } from './components/basic/basic.component';
import { GreeterService } from './components/basic/greeter.service';
import { HttpClientModule } from '@angular/common/http';
import { BooklistComponent } from './components/booklist/booklist.component';
import { BooksDataService } from './services/books.data.service';

@NgModule({
  declarations: [
    AppComponent,
    BasicComponent,
    BooklistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [GreeterService, BooksDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
