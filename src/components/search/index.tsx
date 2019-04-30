import * as React from 'react';
import {connect} from "react-redux";
import {RouteComponentProps, withRouter} from "react-router";
import {ThunkDispatch} from "redux-thunk";
import {SearchAction, searchProduct} from "../../actions/SearchAction";
import {IStoreState} from "../../store/StoreState";
import Product from "../../types/Product";
import ProductCard from "../productCard";

import "./Search.css";


interface IState {
    products: any
}

interface IRouteParams {
    searchString: string
}

interface IProps {
    products: Product[]
}

interface IDispatchProps {
    searchProducts: (data: { searchString: string; }) => Promise<any>
}

type AllProps = IProps & IDispatchProps & RouteComponentProps<IRouteParams>;

class Search extends React.Component<AllProps, IState> {

    constructor(props: any) {
        super(props);
        this.state = {
            products: []
        };

    }

    public componentDidMount(): void {
        this.props.searchProducts({searchString: this.props.match.params.searchString});
    }

    public render() {
        const {products} = this.props;

        const productCards = products.map((p,index) => {
            return <ProductCard key={index} product={p}/>
        });

        if (products.length === 0) {
            return <div>Loading</div>
        } else {
            return (<div className="search-container">
                {productCards}
            </div>)
        }

    }
}


function mapStateToProps(state: IStoreState) {
    return {
        products: state.search.products
    }
}

function mapDispatchToProps(dispatch: ThunkDispatch<IStoreState, {}, SearchAction>): IDispatchProps {
    return {
        searchProducts: (data: { searchString: string }) => {
            return new Promise((resolve, reject) => {
                dispatch(searchProduct(data)).then(res => {
                    resolve(res);
                }, err => {
                    reject(err);
                })
            })
        }
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Search));
