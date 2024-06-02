import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeferrableViewChildComponent } from './deferrable-view-child.component';

describe('DeferrableViewChildComponent', () => {
  let component: DeferrableViewChildComponent;
  let fixture: ComponentFixture<DeferrableViewChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeferrableViewChildComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeferrableViewChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
