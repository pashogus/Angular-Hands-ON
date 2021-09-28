import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApproverlistComponent } from './approverlist.component';

describe('ApproverlistComponent', () => {
  let component: ApproverlistComponent;
  let fixture: ComponentFixture<ApproverlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApproverlistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApproverlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
