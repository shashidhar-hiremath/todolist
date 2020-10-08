import { Component, OnInit } from '@angular/core';
import { ITodo } from 'src/app/model/todo.model';
import { StateMaintainService } from 'src/app/services/localState/state-maintain.service';

@Component({
  selector: 'app-todo-report',
  templateUrl: './todo-report.component.html',
  styleUrls: ['./todo-report.component.scss']
})
export class TodoReportComponent implements OnInit {
  rows: ITodo[];
  columns = [
    { prop: 'id', name: 'Remove' },
    { prop: 'dealerName', name: 'Dealer Name' },
    { prop: 'workTopic', name: 'Work Topic' },
    { prop: 'description', name: 'description' },
    { prop: 'startDate', name: 'StartDate' },
    { prop: 'endDate', name: 'EndDate' },
    { prop: 'amount', name: 'Amount' },
    { prop: 'isDone', name: 'Is Done' },
  ];
  constructor(private readonly state: StateMaintainService) { }

  ngOnInit(): void {
    this.rows = [...this.state.currentState.addedList];
  }

  remove(id) {
    this.rows = [...this.rows.filter( x=> x.id !== id)];
    this.state.updateState.next({
      addedList: this.rows,
      listUI: {
        list: [...this.state.currentState.listUI.list.filter(x=>x.id !== id)]
      }
    });
  }

}
