export const featureName = 'toysFeature';
import * as fromToyList from './toy-list.reducer';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export interface ToysState {
  toyList: fromToyList.ToyListState;
}

export const reducers = {
  toyList: fromToyList.reducer
};

// 1. Feature Selector
const selectToysFeature = createFeatureSelector<ToysState>(featureName);

// 2. Selector Per Branch
const selectToyListBranch = createSelector(
  selectToysFeature,
  f => f.toyList
);

// 3. helpers

const { selectAll: selectToyListEntityArray } = fromToyList.adapter.getSelectors(selectToyListBranch);

// 4. what our components need
