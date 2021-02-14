import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadSapComponent } from './upload-sap.component';

describe('UploadSapComponent', () => {
  let component: UploadSapComponent;
  let fixture: ComponentFixture<UploadSapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadSapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadSapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
