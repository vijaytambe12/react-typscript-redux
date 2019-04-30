import {combineReducers} from "redux";
import { IStoreState } from "../store/StoreState";
import { search } from "./searchReducer";


export const rootReducer: any = combineReducers<IStoreState>({
    search
});
