import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ITodo } from 'src/app/model/todo.model';
import { StateMaintainService } from 'src/app/services/localState/state-maintain.service';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss'],
})
export class TodolistComponent implements OnInit, OnDestroy {
  rows: ITodo[];
  todoSearchFrm: FormGroup;
  columns = [
    { prop: 'dealerName', name: 'Dealer Name' },
    { prop: 'workTopic', name: 'Work Topic' },
    { prop: 'description', name: 'description' },
    { prop: 'startDate', name: 'StartDate' },
    { prop: 'endDate', name: 'EndDate' },
    { prop: 'amount', name: 'Amount' },
    { prop: 'isDone', name: 'Is Done' },
  ];
  constructor(
    private readonly state: StateMaintainService,
    public readonly fb: FormBuilder
    ) {}

  ngOnInit(): void {
    this.todoSearchFrm = this.fb.group({
      dealerName: this.state.currentState.listUI.dealerName,
      workTopic: this.state.currentState.listUI.workTopic
    });
    this.rows = [...this.state.currentState.listUI.list];
  }

  onSubmit() {
    this.rows = [...this.state.currentState.addedList];
    const dealerSearch = new RegExp(this.todoSearchFrm.value.dealerName);
    const workTopic = new RegExp(this.todoSearchFrm.value.workTopic);
    const searchResult = (x:ITodo) => {
      if(this.todoSearchFrm.value.dealerName && this.todoSearchFrm.value.workTopic) {
        return dealerSearch.test(x.dealerName) && workTopic.test(x.workTopic);
      } else if(!this.todoSearchFrm.value.workTopic && this.todoSearchFrm.value.dealerName) {
        return dealerSearch.test(x.dealerName);
      } else if(!this.todoSearchFrm.value.dealerName && this.todoSearchFrm.value.workTopic) {
        return workTopic.test(x.workTopic);
      } else {
        return true;
      }
    }
    const searchData = this.rows.filter(searchResult);
    this.rows = searchData;
  }

  clear() {
    this.todoSearchFrm.reset();
    this.rows = [...this.state.currentState.addedList];
  }

  ngOnDestroy() {
    this.state.updateState.next({
      listUI: {
        dealerName: this.todoSearchFrm.value.dealerName,
        workTopic: this.todoSearchFrm.value.workTopic,
        list: this.rows
      }
    });
  }
}
