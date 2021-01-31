import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopbarCommonComponent } from './topbar-common.component';

describe('TopbarCommonComponent', () => {
  let component: TopbarCommonComponent;
  let fixture: ComponentFixture<TopbarCommonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopbarCommonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopbarCommonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
