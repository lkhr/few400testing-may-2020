import { add, getFavoriteMovie, returnsAnObservable } from './asyncme';

describe('synchronous', () => {

  it('super easy', () => {
    const sum = add(2, 2);
    expect(sum).toBe(4);
  });
});

describe('async', () => {

  describe('using a promise', () => {
    it('first way', (done) => {
      const promise = getFavoriteMovie();
      promise.then(movie => {
        expect(movie).toBe('The Empire Strikes Back');
        done();
      });
    });

    it('using async and await', async () => {
      const movie = await getFavoriteMovie();
      expect(movie).toBe('The Empire Strikes Back');
    });


  });
  describe('using an observable', () => {

    it('the first way', (done) => {
      const promise = returnsAnObservable().toPromise();
      promise.then(movie => {
        expect(movie).toBe('Return of the Jedi');
        done();
      });
    });

    it('using async await', async () => {
      const movie = await returnsAnObservable().toPromise();
      expect(movie).toBe('Return of the Jedi');
    });
  });
});
