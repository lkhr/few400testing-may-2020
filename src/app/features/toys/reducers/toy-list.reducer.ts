import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { createReducer, Action } from '@ngrx/store';

export interface ToyEntity {
  id: string;
  description: string;
}

export interface ToyListState extends EntityState<ToyEntity> {

}

export const adapter = createEntityAdapter<ToyEntity>();

const initialState = adapter.getInitialState();

const reducerFunction = createReducer(
  initialState
);

export function reducer(state: ToyListState = initialState, action: Action) {
  return reducerFunction(state, action);
}



