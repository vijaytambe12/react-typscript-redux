import {Reducer} from "redux";

import * as Constants from "../actions/Constants"
import {SearchAction} from "../actions/SearchAction";
import {ISearchState} from "../store/StoreState";

const initState = {
    products: []
};

export const search: Reducer<ISearchState, SearchAction> = (state, action): ISearchState => {

    switch (action.type) {
        case Constants.SEARCH_PRODUCT: {
            return {
                ...state,products:action.products
            }
        }

        default : {
            return initState;
        }
    }
};


