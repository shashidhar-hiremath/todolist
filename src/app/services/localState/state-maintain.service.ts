import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { InitialState } from 'src/app/constants/initialstate.constans';
import { IUiState } from 'src/app/model/todo.model';

@Injectable({
  providedIn: 'root'
})
export class StateMaintainService {
  private stateObject = InitialState;
  updateState = new BehaviorSubject<IUiState>({});
  constructor() {
    this.updateState.subscribe((data) => {
      this.stateObject = Object.assign({}, this.stateObject, data);
    });
  }

  /**
   * Gets current state value copy
   * @returns current state json
   */
  get currentState() {
    return JSON.parse(JSON.stringify(this.stateObject)) as IUiState;
  }

}
