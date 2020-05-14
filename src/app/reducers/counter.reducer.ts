import { createReducer, on, Action } from '@ngrx/store';
import * as actions from '../actions/counter.actions';
import { selectCurrentCount } from '.';

export interface CounterState {
  current: number;
  by: number;
}

export const initialState: CounterState = {
  current: 0,
  by: 1
};

const myReducer = createReducer(
  initialState,
  on(actions.countIncremented, (state) => ({ ...state, current: state.current + state.by })),
  on(actions.countDecremented, (state) => ({ ...state, current: state.current - state.by })),
);

export function reducer(state: CounterState, action: Action): CounterState {
  return myReducer(state, action);
}
