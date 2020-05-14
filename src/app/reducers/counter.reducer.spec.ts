import { reducer } from './counter.reducer';
import * as actions from '../actions/counter.actions';
describe('counter reducers', () => {

  it('can increment', () => {
    const result = reducer({ current: 1, by: 5 }, actions.countIncremented());
    expect(result).toEqual({
      current: 6,
      by: 5
    });
  });

  it('can decrement', () => {
    const result = reducer({ current: 1, by: 1 }, actions.countDecremented());
    expect(result).toEqual({
      current: 0,
      by: 1
    });
  });
  it('can change what we are counting by', () => {
    const result = reducer({ current: 0, by: 1 }, actions.countBySet({ by: 15 }));
    expect(result).toEqual({
      current: 0,
      by: 15
    });
  });
});
