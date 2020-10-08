import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewTodoComponent } from './components/new-todo/new-todo.component';
import { TodoReportComponent } from './components/todo-report/todo-report.component';
import { TodolistComponent } from './components/todolist/todolist.component';

const routes: Routes = [
  {
    component: TodolistComponent,
    path: '',
  },
  {
    component: NewTodoComponent,
    path: 'newtodo',
  },
  {
    component: TodoReportComponent,
    path: 'report',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
