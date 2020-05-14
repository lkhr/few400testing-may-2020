import { ActionReducerMap, createSelector } from '@ngrx/store';
import * as fromCounter from './counter.reducer';
export interface AppState {

  counter: fromCounter.CounterState;
}

export const reducers: ActionReducerMap<AppState> = {
  counter: fromCounter.reducer
};


// 1. Feature Selectors (we aren't in a feature)

// 2. Selector per branch
export const selectCounterBranch = (state: AppState) => state.counter;
// 3. Helpers (optional)

// 4. What the components need

// TODO: Our counter component needs to know the current count

export const selectCurrentCount = createSelector(
  selectCounterBranch,
  b => b.current
);
