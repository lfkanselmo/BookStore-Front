import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewEditorialComponent } from './new-editorial.component';

describe('NewEditorialComponent', () => {
  let component: NewEditorialComponent;
  let fixture: ComponentFixture<NewEditorialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewEditorialComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewEditorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
