import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReleasesSectionComponent } from './releases-section.component';

describe('ReleasesSectionComponent', () => {
  let component: ReleasesSectionComponent;
  let fixture: ComponentFixture<ReleasesSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReleasesSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReleasesSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
