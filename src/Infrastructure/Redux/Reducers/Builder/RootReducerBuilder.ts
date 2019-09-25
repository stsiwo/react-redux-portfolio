import { inject, injectable } from "inversify";
import { AnyAction, Reducer } from "redux";
import "reflect-metadata";
import { TYPES } from "../../../../DI/DepTypes";
import { StateType } from "../../States/StateType";
import { IRootReducerBuilder } from "./IRootReducerBuilder";
import { IRootReducer } from "./RootReducer/IRootReducer";

@injectable()
export class RootReducerBuilder implements IRootReducerBuilder {

  private _rootReducer: IRootReducer;

  public constructor(
    @inject(TYPES.IRootReducer) rootReducer: IRootReducer
  ) {
    this._rootReducer = rootReducer;
  }

  build(): Reducer<StateType, AnyAction> {
    return this._rootReducer.combine(); 
  }

}
