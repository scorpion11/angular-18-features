import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZoneLessComponent } from './zone-less.component';

describe('ZoneLessComponent', () => {
  let component: ZoneLessComponent;
  let fixture: ComponentFixture<ZoneLessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ZoneLessComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ZoneLessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
