import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsTextComponent } from './skills-text.component';

describe('SkillsTextComponent', () => {
  let component: SkillsTextComponent;
  let fixture: ComponentFixture<SkillsTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkillsTextComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkillsTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
