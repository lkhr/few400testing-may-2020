import { Injectable } from '@angular/core';

@Injectable()
export class GreeterService {
  getGreeting() {
    return 'Yo, ';
  }
}
