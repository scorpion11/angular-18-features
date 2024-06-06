import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteRedirectsComponent } from './route-redirects.component';

describe('RouteRedirectsComponent', () => {
  let component: RouteRedirectsComponent;
  let fixture: ComponentFixture<RouteRedirectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouteRedirectsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RouteRedirectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
