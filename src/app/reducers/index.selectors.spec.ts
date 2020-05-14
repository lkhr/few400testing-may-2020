import { selectCounterBranch, selectCurrentCount, selectDecrementDisabled } from '.';

describe('selector functions', () => {


  it('has a selector for the counter branch', () => {

    const result = selectCounterBranch({ counter: { current: 1, by: 2 } });
    expect(result.current).toBe(1);
  });

  it('has a selector to give you the current count', () => {
    const result = selectCurrentCount({ counter: { current: 42, by: 2 } });
    expect(result).toBe(42);
  });

  describe('selectDecrementDisabled', () => {
    it('returns true for the right conditions', () => {
      const result = selectDecrementDisabled({
        counter: {
          current: 1,
          by: 2
        }
      });

      expect(result).toBe(true);
    });
    it('returns false for the right conditons', () => {
      const result = selectDecrementDisabled({
        counter: {
          current: 1,
          by: 1
        }
      });
      expect(result).toBe(false);

    });
  });
});
