import { createReducer, on } from "@ngrx/store";
import { decrement, increment, reset } from "./actions";

export const initialState = 100

export const counterReducer = createReducer(
    initialState,
    on(increment, (theOldState) => { return theOldState + 1 }),
    on(decrement, (theOldState) => { return theOldState - 1 }),
    on(reset, () => { return 0 })
)