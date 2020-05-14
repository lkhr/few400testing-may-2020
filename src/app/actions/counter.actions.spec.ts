import { countIncremented, countBySet, addNewThingy } from './counter.actions';

describe('counter actions', () => {

  it('can create increment count', () => {
    const action = countIncremented();
    expect(action.type).toBe('[app counter] count incremented');
  });

  it('can set count by', () => {
    const action = countBySet({ by: 3 });
    expect(action.type).toBe('[app counter] count by set');
    expect(action.by).toBe(3);
  });

  describe('adding a thingy', () => {

    let action;
    beforeEach(() => {
      action = addNewThingy({ description: 'Tacos' });
    });

    it('has the right type', () => {
      expect(action.type).toBe('[app counter] added a new thingy');
    });
    it('has the right payload', () => {
      expect(action.payload.id.startsWith('T')).toBeTrue();
    });
  });

});
