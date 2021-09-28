import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackupApproverComponent } from './backup-approver.component';

describe('BackupApproverComponent', () => {
  let component: BackupApproverComponent;
  let fixture: ComponentFixture<BackupApproverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BackupApproverComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BackupApproverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
