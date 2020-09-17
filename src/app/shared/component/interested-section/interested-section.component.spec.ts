import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterestedSectionComponent } from './interested-section.component';

describe('InterestedSectionComponent', () => {
  let component: InterestedSectionComponent;
  let fixture: ComponentFixture<InterestedSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterestedSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterestedSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
