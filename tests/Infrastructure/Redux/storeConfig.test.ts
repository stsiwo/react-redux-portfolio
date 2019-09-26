import { store } from "../../../src/Infrastructure/Redux/storeConfig";
import { defaultState } from "../../../src/Infrastructure/Redux/States/defaultState";
import { ToggleMenuSidebarActionTypeName } from "../../../src/Infrastructure/Redux/Actions/AppStateActions/ToggleMenuSidebarActionType";

test("sc.1.1: store return default state", () => {
  expect(store.getState()).toBe(defaultState); 
});

test("sc.1.2: update app.isMenuSidebarOpen to true", () => {
  
  const resultState = store.dispatch({
    type: ToggleMenuSidebarActionTypeName,
    isMenuSidebarOpen: true
  });

  console.log(resultState);

  expect(resultState).toBe(defaultState); 
});

const testFunc = (a: string) => {
  const b = a;
  return b;
}

test("t.1.1", () => {
 console.log(testFunc.toString()); 
});
