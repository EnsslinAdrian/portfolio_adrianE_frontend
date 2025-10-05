import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypografieComponent } from './typografie.component';

describe('TypografieComponent', () => {
  let component: TypografieComponent;
  let fixture: ComponentFixture<TypografieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TypografieComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TypografieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
