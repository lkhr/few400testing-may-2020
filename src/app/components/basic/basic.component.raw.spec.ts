import { BasicComponent } from './basic.component';
import { GreeterService } from './greeter.service';

describe('the basic component typescript class', () => {

  let component: BasicComponent;

  beforeEach(() => {
    const fakeGreeter: GreeterService = {
      getGreeting: () => ''
    };
    component = new BasicComponent(new GreeterService());
  });

  it('has the right default for greeting', () => {
    expect(component.greeting).toBe('');
  });

  it('changes the greeting when you call the method', () => {
    component.sayHi('Tacos');

    expect(component.greeting).toBe('Tacos');
  });
});
