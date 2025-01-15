import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorldImageComponent } from './world-image.component';

describe('WorldImageComponent', () => {
  let component: WorldImageComponent;
  let fixture: ComponentFixture<WorldImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorldImageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorldImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
