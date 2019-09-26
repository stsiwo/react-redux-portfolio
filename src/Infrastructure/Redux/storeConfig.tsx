import { createStore, combineReducers, AnyAction } from "redux";
import { TYPES } from '../../DI/DepTypes';
import { myContainer } from "../../DI/IocContainerConfig";
import { IRootReducerBuilder } from "./Reducers/Builder/IRootReducerBuilder";
import { defaultState } from "./States/defaultState";

const rootReducerBuilder = myContainer.get<IRootReducerBuilder>(TYPES.IRootReducerBuilder);

export const store = createStore(
  rootReducerBuilder.build()
  , defaultState

);

