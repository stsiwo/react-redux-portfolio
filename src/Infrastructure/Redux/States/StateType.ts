export declare type StateType = DomainStateObjectType & AppStateObjectType;

export declare type DomainStateValueType =  
  IsTestDomainStateType
  & IsTestDomain1StateType
  ;

export declare type AppStateValueType =
  IsMenuSidebarOpenStateType
  & IsSignupFormModalOpenStateType
  ;

export declare type AppStateObjectType = {
  app: AppStateValueType;
}

export declare type DomainStateObjectType = {
  domain: DomainStateValueType; 
}

export declare type IsMenuSidebarOpenStateType = {
  isMenuSidebarOpen: boolean;
}

export declare type IsSignupFormModalOpenStateType = {
  isSignupFormModalOpen: boolean;
}

export declare type IsTestDomainStateType = {
  isTestDomainOpen: boolean;
}

export declare type IsTestDomain1StateType = {
  isTestDomain1Open: boolean;
}
