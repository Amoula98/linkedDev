import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockOfProgramComponent } from './block-of-program.component';

describe('BlockOfProgramComponent', () => {
  let component: BlockOfProgramComponent;
  let fixture: ComponentFixture<BlockOfProgramComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlockOfProgramComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockOfProgramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
