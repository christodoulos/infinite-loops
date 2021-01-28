import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaListItemComponent } from './fa-list-item.component';

describe('FaListItemComponent', () => {
  let component: FaListItemComponent;
  let fixture: ComponentFixture<FaListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FaListItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FaListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
