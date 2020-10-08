import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ITodo } from 'src/app/model/todo.model';
import { StateMaintainService } from 'src/app/services/localState/state-maintain.service';

@Component({
  selector: 'app-new-todo',
  templateUrl: './new-todo.component.html',
  styleUrls: ['./new-todo.component.scss'],
})
export class NewTodoComponent implements OnInit, OnDestroy {
  oldFrmData: ITodo;
  todoFrm: FormGroup;
  constructor(
    public readonly fb: FormBuilder,
    private readonly state: StateMaintainService
  ) {}

  ngOnInit(): void {
    this.oldFrmData = this.state.currentState.addNew.formData;
    this.todoFrm = this.fb.group({
      dealerName: this.oldFrmData.dealerName,
      workTopic: this.oldFrmData.workTopic,
      description: this.oldFrmData.description,
      startDate: this.oldFrmData.startDate,
      endDate: this.oldFrmData.endDate,
      amount: this.oldFrmData.amount,
      isdone: this.oldFrmData.isDone,
    });
  }

  onSubmit() {
    const newData = this.todoFrm.value;
    this.state.updateState.next({
      addedList: [...this.state.currentState.addedList, {...newData, id: this.state.currentState.addedList.length + 1}]
    });
    this.todoFrm.reset();
  }

  ngOnDestroy() {
    this.state.updateState.next({
      addNew: {
        formData: this.todoFrm.value
      }
    });
  }
}
