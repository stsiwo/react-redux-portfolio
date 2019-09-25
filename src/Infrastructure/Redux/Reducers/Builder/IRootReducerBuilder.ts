import { Reducer, AnyAction } from "redux";
import { StateType } from "../../States/StateType";

export interface IRootReducerBuilder {

  // need fix type parameter later; be more specific?
  build(): Reducer<StateType, AnyAction>;
}
