import { createAction, props } from '@ngrx/store';

export const countIncremented = createAction(
  '[app counter] count incremented'
);

export const countDecremented = createAction(
  '[app counter] count decremented'
);

// these are not used in the app, just added for testing examples

export const countBySet = createAction(
  '[app counter] count by set',
  props<{ by: number }>()
);

let id = 0;

export const addNewThingy = createAction(
  '[app counter] added a new thingy',
  ({ description }: { description: string }) => ({
    payload: {
      id: 'T' + id++
    }
  })
);
