import {applyMiddleware, createStore} from "redux";
import thunk, {ThunkMiddleware} from "redux-thunk";
import {rootReducer} from "../reducers/rootReducer";
import Product from "../types/Product";


export interface ISearchState {
    products:Product[]
}

export interface IStoreState {
    search: ISearchState
}



export const store = createStore(
    rootReducer,
    applyMiddleware(thunk as ThunkMiddleware<IStoreState>)
);
