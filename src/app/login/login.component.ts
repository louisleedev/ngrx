import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { decrement, increment, reset } from './store/actions';
import { AppState } from '../app.state';
import { counterSelector } from './store/selectors';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  counter$ = this.store.select(counterSelector)

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void { }

  increment() {
    this.store.dispatch(increment())
    // triiger the increment action
  }
  decrement() {
    this.store.dispatch(decrement())
    // triiger the decrement action
  }
  reset() {
    this.store.dispatch(reset())
    // triiger the reset action
  }
}
