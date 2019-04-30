import {API} from "./Api";
import * as URLConstants from "./URLConstants"



interface ISearchCriteria {
    searchText:string
}

export class SearchProductAPI {

    public static getProducts(searchCriteria:ISearchCriteria): Promise<any> {
        return API.GET({url:URLConstants.SEARCH_PRODUCTS + searchCriteria.searchText });
    }


}
