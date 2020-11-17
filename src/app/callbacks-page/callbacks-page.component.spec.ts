import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CallbacksPageComponent } from './callbacks-page.component';

describe('CallbacksPageComponent', () => {
  let component: CallbacksPageComponent;
  let fixture: ComponentFixture<CallbacksPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CallbacksPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CallbacksPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
