import { Component, OnInit } from '@angular/core';
import { GreeterService } from './greeter.service';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.css']
})
export class BasicComponent implements OnInit {

  greetingPrefix = '';
  greeting = '';
  constructor(private service: GreeterService) {
    //
  }

  ngOnInit(): void {
    this.greetingPrefix = this.service.getGreeting();
  }

  sayHi(name: string) {
    this.greeting = name;
  }

}
