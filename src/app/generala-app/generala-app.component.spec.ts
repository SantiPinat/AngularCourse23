import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralaAppComponent } from './generala-app.component';

describe('GeneralaAppComponent', () => {
  let component: GeneralaAppComponent;
  let fixture: ComponentFixture<GeneralaAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneralaAppComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralaAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
