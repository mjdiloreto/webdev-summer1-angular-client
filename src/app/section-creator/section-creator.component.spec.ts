import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionCreatorComponent } from './section-creator.component';

describe('SectionCreatorComponent', () => {
  let component: SectionCreatorComponent;
  let fixture: ComponentFixture<SectionCreatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionCreatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionCreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
