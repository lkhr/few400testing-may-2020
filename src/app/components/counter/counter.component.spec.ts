import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';

import { CounterComponent } from './counter.component';
import { AppState, selectCurrentCount } from 'src/app/reducers';
import { By } from '@angular/platform-browser';

describe('CounterComponent', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;
  let store: MockStore;
  const initialState: AppState = {
    counter: {
      current: 1,
      by: 1
    }
  };
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CounterComponent],
      providers: [provideMockStore({ initialState })]
    });

    fixture = TestBed.createComponent(CounterComponent);
    store = TestBed.inject(MockStore);
    store.overrideSelector(selectCurrentCount, 15);
    component = fixture.componentInstance;

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('shows the right current count', () => {
    const countEl = getElement<HTMLSpanElement>(fixture, '[data-counter-count]');
    fixture.detectChanges();
    expect(countEl.textContent).toBe('15');
  });
});

function getElement<T>(fixture: any, selector: string): T {
  return fixture.debugElement.query(By.css(selector)).nativeElement as T;
}

