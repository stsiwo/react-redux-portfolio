import { Container } from "inversify";
import { reducerConfigBindingModule } from "../../../../../src/DI/Redux/ReducerConfigBinding";
import { IRootReducerBuilder } from "../../../../../src/Infrastructure/Redux/Reducers/Builder/IRootReducerBuilder";
import { TYPES } from "../../../../../src/DI/DepTypes";
import { ISliceReducer } from "../../../../../src/Infrastructure/Redux/Reducers/Builder/RootReducer/SliceReducers/ISliceReducer";
import { AppStateSliceReducer } from "../../../../../src/Infrastructure/Redux/Reducers/Builder/RootReducer/SliceReducers/AppState/AppStateSliceReducer";
import { IAppStateCaseReducer } from "../../../../../src/Infrastructure/Redux/Reducers/Builder/RootReducer/SliceReducers/AppState/CaseReducers/IAppStateCaseReducer";
import { ToggleMenuSidebarCaseReducer } from "../../../../../src/Infrastructure/Redux/Reducers/Builder/RootReducer/SliceReducers/AppState/CaseReducers/ToggleMenuSidebarCaseReducer";
import { ToggleSignupFormModalCaseReducer } from "../../../../../src/Infrastructure/Redux/Reducers/Builder/RootReducer/SliceReducers/AppState/CaseReducers/ToggleSignupFormModalCaseReducer";
import { DomainSliceReducer } from "../../../../../src/Infrastructure/Redux/Reducers/Builder/RootReducer/SliceReducers/Domain/DomainSliceReducer";
import { IDomainCaseReducer } from "../../../../../src/Infrastructure/Redux/Reducers/Builder/RootReducer/SliceReducers/Domain/CaseReducers/IDomainCaseReducer";
import { ToggleTestDomainCaseReducer } from "../../../../../src/Infrastructure/Redux/Reducers/Builder/RootReducer/SliceReducers/Domain/CaseReducers/ToggleTestDomainCaseReducer";
import { ToggleTestDomain1CaseReducer } from "../../../../../src/Infrastructure/Redux/Reducers/Builder/RootReducer/SliceReducers/Domain/CaseReducers/ToggleTestDomain1CaseReducer";
import { IRootReducer } from "../../../../../src/Infrastructure/Redux/Reducers/Builder/RootReducer/IRootReducer";
import { IsMenuSidebarOpenStateType } from "../../../../../src/Infrastructure/Redux/States/StateType";
import { ToggleMenuSidebarActionType, ToggleMenuSidebarActionTypeName } from "../../../../../src/Infrastructure/Redux/Actions/AppStateActions/ToggleMenuSidebarActionType";
import { ReducersMapObject } from "redux";

test("b.1.-1", () => {

  const myContainer: Container = new Container();

  myContainer.bind<IAppStateCaseReducer<IsMenuSidebarOpenStateType, ToggleMenuSidebarActionType>>("assr").to(ToggleMenuSidebarCaseReducer);

  const tcr = myContainer.get<IAppStateCaseReducer<IsMenuSidebarOpenStateType, ToggleMenuSidebarActionType>>("assr");

  const caseReducer: ReducersMapObject<IsMenuSidebarOpenStateType, ToggleMenuSidebarActionType> = tcr.getReducer();

  const dummyState = false; 

  const dummyAction = {
    type: ToggleMenuSidebarActionTypeName,
    isMenuSidebarOpen: true
  }

  const expectedResult = true; 

  expect(caseReducer.isMenuSidebarOpen(dummyState, dummyAction)).toBe(expectedResult);

});

test("b.1.1: AppStateSliceReducer should resolve dependency properly", () => {

  const myContainer: Container = new Container();

  myContainer.bind<ISliceReducer>("assr").to(AppStateSliceReducer);
  myContainer.bind<IAppStateCaseReducer>(TYPES.IAppStateCaseReducers).to(ToggleMenuSidebarCaseReducer);
  myContainer.bind<IAppStateCaseReducer>(TYPES.IAppStateCaseReducers).to(ToggleSignupFormModalCaseReducer);

  const appStateSliceReducer = myContainer.get<ISliceReducer>("assr");

  console.log(JSON.stringify(appStateSliceReducer.getSlicerReducerMapObject(), null, 4));

  expect(typeof appStateSliceReducer.getSlicerReducerMapObject()).toBe("object");

});

test("b.1.2: DomainSliceReducer should resolve dependency properly", () => {

  const myContainer: Container = new Container();

  myContainer.bind<ISliceReducer>("assr").to(DomainSliceReducer);
  myContainer.bind<IDomainCaseReducer>(TYPES.IDomainCaseReducers).to(ToggleTestDomainCaseReducer);
  myContainer.bind<IDomainCaseReducer>(TYPES.IDomainCaseReducers).to(ToggleTestDomain1CaseReducer);

  const domainSliceReducer = myContainer.get<ISliceReducer>("assr");

  console.log(JSON.stringify(domainSliceReducer.getSlicerReducerMapObject(), null, 4));

  expect(typeof domainSliceReducer.getSlicerReducerMapObject()).toBe("object");

});

test("b.1.3: RootReducer should resolve dependency properly", () => {

  const myContainer: Container = new Container();

  reducerConfigBindingModule(myContainer);

  const rootReducer = myContainer.get<IRootReducer>(TYPES.IRootReducer);

  console.log(JSON.stringify(rootReducer.combine(), null, 4));

  expect(typeof rootReducer.combine()).toBe("function");

});

test("b.1.4: RootReducerBuilder build root reducer", () => {

  const myContainer: Container = new Container();

  reducerConfigBindingModule(myContainer);

  const builder = myContainer.get<IRootReducerBuilder>(TYPES.IRootReducerBuilder);

  expect(typeof builder.build()).toBe("function");

});
