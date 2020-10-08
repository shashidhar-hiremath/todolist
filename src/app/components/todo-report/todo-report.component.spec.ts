import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoReportComponent } from './todo-report.component';

describe('TodoReportComponent', () => {
  let component: TodoReportComponent;
  let fixture: ComponentFixture<TodoReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
