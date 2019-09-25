import { Container } from "inversify";
import { reducerConfigBindingModule } from "./Redux/ReducerConfigBinding";

const myContainer = new Container();

// redux
reducerConfigBindingModule(myContainer);


export { myContainer };

