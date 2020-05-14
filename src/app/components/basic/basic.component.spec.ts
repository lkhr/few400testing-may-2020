import { BasicComponent } from './basic.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { GreeterService } from './greeter.service';

describe('testing a component', () => {

  let component: BasicComponent;
  let fixture: ComponentFixture<BasicComponent>;
  let inputEl: HTMLInputElement;
  let buttonEl: HTMLButtonElement;
  let spanElement: HTMLHeadElement;
  let spanGreetingPrefix: HTMLSpanElement;
  beforeEach(() => {

    const fakeGreeter: GreeterService = {
      getGreeting: () => 'Hi, Cutie!'
    };
    TestBed.configureTestingModule({
      declarations: [BasicComponent],
      providers: [{ provide: GreeterService, useValue: fakeGreeter }]
    });

    fixture = TestBed.createComponent(BasicComponent); // <app-basic>... routing, etc.
    component = fixture.componentInstance;

    inputEl = fixture.debugElement.query(By.css('[data-basic-input]')).nativeElement;
    buttonEl = fixture.debugElement.query(By.css('[data-basic-button]')).nativeElement;
    spanElement = fixture.debugElement.query(By.css('[data-basic-greeting]')).nativeElement;
    spanGreetingPrefix = fixture.debugElement.query(By.css('[data-greeting-prefix]')).nativeElement;
    // fixture.autoDetectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeDefined();
  });

  it('has the right greeting prefix', () => {
    fixture.detectChanges();
    expect(spanGreetingPrefix.innerText).toBe('Hi, Cutie!');
  });

  it('has the right default greeting', () => {
    fixture.detectChanges();
    expect(spanElement.innerText).toBe('');
  });

  it('changes the greeting after hitting the button', () => {
    inputEl.value = 'Tacos';
    buttonEl.click(); // ??
    fixture.detectChanges();
    expect(spanElement.innerText).toBe('Tacos');
  });
});

function getElement<T>(fixture: any, selector: string): T {
  return fixture.debugElement.query(By.css(selector)).nativeElement as T;
}
