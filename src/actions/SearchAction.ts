
import {Dispatch} from "redux";
import {SearchProductAPI} from "../api/SearchProductAPI";
import Product from "../types/Product";
import * as Constants  from "./Constants"


export interface ISearchProduct {
    products:Product[],
    type:Constants.SEARCH_PRODUCT
}

export type SearchAction = ISearchProduct;

export function searchProduct(data:{searchString:string}) {
    return (dispatch: Dispatch): Promise<any> => {
        return new Promise((resolve, reject) => {
            SearchProductAPI.getProducts({searchText: data.searchString}).then(
                resp => {
                    resolve(resp);
                    dispatch({
                        products: resp.data.resultFormatted.results,
                        type: Constants.SEARCH_PRODUCT
                    })
                }, err=> {
                    reject(err);
                });
        });
    }

}


