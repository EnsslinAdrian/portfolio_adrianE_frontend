import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsIconsComponent } from './skills-icons.component';

describe('SkillsIconsComponent', () => {
  let component: SkillsIconsComponent;
  let fixture: ComponentFixture<SkillsIconsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkillsIconsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkillsIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
