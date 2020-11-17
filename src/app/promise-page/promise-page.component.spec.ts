import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromisePageComponent } from './promise-page.component';

describe('PromisePageComponent', () => {
  let component: PromisePageComponent;
  let fixture: ComponentFixture<PromisePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PromisePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PromisePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
