import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbacksSectionComponent } from './feedbacks-section.component';

describe('FeedbacksSectionComponent', () => {
  let component: FeedbacksSectionComponent;
  let fixture: ComponentFixture<FeedbacksSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeedbacksSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeedbacksSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
