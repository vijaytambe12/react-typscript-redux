
import axios from 'axios';


interface IGetParams {
    url:string
}

interface IPostParams {
    url:string,
    data: any
}

export class API {

    public static GET(data:IGetParams):Promise<any> {
        return axios.get(data.url);
    }


    public static POST(data:IPostParams):Promise<any> {
        return axios.post(data.url,data.data);
    }

}
