import { Container } from "inversify";
import { TYPES } from "../DepTypes";
import { IRootReducerBuilder } from "../../Infrastructure/Redux/Reducers/Builder/IRootReducerBuilder";
import { RootReducerBuilder } from "../../Infrastructure/Redux/Reducers/Builder/RootReducerBuilder";
import { IRootReducer } from "../../Infrastructure/Redux/Reducers/Builder/RootReducer/IRootReducer";
import { RootReducer } from "../../Infrastructure/Redux/Reducers/Builder/RootReducer/RootReducer";
import { ISliceReducer } from "../../Infrastructure/Redux/Reducers/Builder/RootReducer/SliceReducers/ISliceReducer";
import { AppStateSliceReducer } from "../../Infrastructure/Redux/Reducers/Builder/RootReducer/SliceReducers/AppState/AppStateSliceReducer";
import { DomainSliceReducer } from "../../Infrastructure/Redux/Reducers/Builder/RootReducer/SliceReducers/Domain/DomainSliceReducer";
import { IAppStateCaseReducer } from "../../Infrastructure/Redux/Reducers/Builder/RootReducer/SliceReducers/AppState/CaseReducers/IAppStateCaseReducer";
import { ToggleMenuSidebarCaseReducer } from "../../Infrastructure/Redux/Reducers/Builder/RootReducer/SliceReducers/AppState/CaseReducers/ToggleMenuSidebarCaseReducer";
import { ToggleSignupFormModalCaseReducer } from "../../Infrastructure/Redux/Reducers/Builder/RootReducer/SliceReducers/AppState/CaseReducers/ToggleSignupFormModalCaseReducer";
import { IDomainCaseReducer } from "../../Infrastructure/Redux/Reducers/Builder/RootReducer/SliceReducers/Domain/CaseReducers/IDomainCaseReducer";
import { ToggleTestDomain1CaseReducer } from "../../Infrastructure/Redux/Reducers/Builder/RootReducer/SliceReducers/Domain/CaseReducers/ToggleTestDomain1CaseReducer";
import { ToggleTestDomainCaseReducer } from "../../Infrastructure/Redux/Reducers/Builder/RootReducer/SliceReducers/Domain/CaseReducers/ToggleTestDomainCaseReducer";

export const reducerConfigBindingModule = (myContainer: Container): Container => {

    myContainer.bind<IRootReducerBuilder>(TYPES.IRootReducerBuilder).to(RootReducerBuilder);
    myContainer.bind<IRootReducer>(TYPES.IRootReducer).to(RootReducer);

    myContainer.bind<ISliceReducer>(TYPES.ISliceReducers).to(AppStateSliceReducer);
    myContainer.bind<ISliceReducer>(TYPES.ISliceReducers).to(DomainSliceReducer);

    myContainer.bind<IAppStateCaseReducer>(TYPES.IAppStateCaseReducers).to(ToggleMenuSidebarCaseReducer);
    myContainer.bind<IAppStateCaseReducer>(TYPES.IAppStateCaseReducers).to(ToggleSignupFormModalCaseReducer);

    myContainer.bind<IDomainCaseReducer>(TYPES.IDomainCaseReducers).to(ToggleTestDomainCaseReducer);
    myContainer.bind<IDomainCaseReducer>(TYPES.IDomainCaseReducers).to(ToggleTestDomain1CaseReducer);

    return myContainer;
}
