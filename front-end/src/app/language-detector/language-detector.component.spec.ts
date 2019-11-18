import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguageDetectorComponent } from './language-detector.component';

describe('LanguageDetectorComponent', () => {
  let component: LanguageDetectorComponent;
  let fixture: ComponentFixture<LanguageDetectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LanguageDetectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LanguageDetectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
