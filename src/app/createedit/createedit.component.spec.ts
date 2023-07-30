import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateeditComponent } from './createedit.component';

describe('CreateeditComponent', () => {
  let component: CreateeditComponent;
  let fixture: ComponentFixture<CreateeditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateeditComponent]
    });
    fixture = TestBed.createComponent(CreateeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
