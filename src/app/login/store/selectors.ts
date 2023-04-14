import { createFeatureSelector } from "@ngrx/store";
import { AppState } from "src/app/app.state";
import { LoginState } from "./state";

export const LoginStateSelector = createFeatureSelector<LoginState>('login')
export const counterSelector = (state: AppState) => { return state.login.counter }