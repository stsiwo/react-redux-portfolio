import { Reducer, Action, AnyAction, ReducersMapObject } from "redux";

export interface IDomainCaseReducer<S = any, A extends Action<any> = AnyAction> {

  getReducer(): ReducersMapObject<S, A>;
}

