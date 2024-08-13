import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeSiteComponent } from './welcome-site.component';

describe('WelcomeSiteComponent', () => {
  let component: WelcomeSiteComponent;
  let fixture: ComponentFixture<WelcomeSiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WelcomeSiteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WelcomeSiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
