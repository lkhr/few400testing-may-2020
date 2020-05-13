import { GreeterService } from './greeter.service';

describe('greeter service', () => {

  describe('it has a getGreeting method', () => {

    it('should return the greeting prefix', () => {
      const service = new GreeterService();

      expect(service.getGreeting()).toBe('Yo, ');
    });
  });
});
