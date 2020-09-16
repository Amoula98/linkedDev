import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsListingReleasesComponent } from './news-listing-releases.component';

describe('NewsListingReleasesComponent', () => {
  let component: NewsListingReleasesComponent;
  let fixture: ComponentFixture<NewsListingReleasesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsListingReleasesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsListingReleasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
