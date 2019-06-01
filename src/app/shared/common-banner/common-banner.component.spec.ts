import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonBannerComponent } from './common-banner.component';

describe('CommonBannerComponent', () => {
  let component: CommonBannerComponent;
  let fixture: ComponentFixture<CommonBannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommonBannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
