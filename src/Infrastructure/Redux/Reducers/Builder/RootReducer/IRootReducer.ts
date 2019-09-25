import { Reducer, AnyAction } from "redux";
import { StateType } from "../../../States/StateType";

export interface IRootReducer {

  combine(): Reducer<StateType, AnyAction>;
 
}
