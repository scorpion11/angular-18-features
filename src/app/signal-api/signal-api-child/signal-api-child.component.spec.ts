import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalApiChildComponent } from './signal-api-child.component';

describe('SignalApiChildComponent', () => {
  let component: SignalApiChildComponent;
  let fixture: ComponentFixture<SignalApiChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignalApiChildComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SignalApiChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
