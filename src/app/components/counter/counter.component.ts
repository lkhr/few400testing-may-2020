import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { AppState, selectCurrentCount } from 'src/app/reducers';
import { countIncremented, countDecremented } from 'src/app/actions/counter.actions';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  count$: Observable<number>;
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.count$ = this.store.pipe(
      select(selectCurrentCount)
    );
  }

  increment() {
    this.store.dispatch(countIncremented());
  }

  decrement() {
    this.store.dispatch(countDecremented());
  }
}
