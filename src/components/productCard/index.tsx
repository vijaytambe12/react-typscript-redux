import * as React from 'react';
import "./productCard.css"
import Rupee from "./../utility/Rupee";

interface IProps {
    product:any
}

class ProductCard extends React.Component<IProps> {

    constructor(props:any) {
        super(props);
    }

    public render() {
        const {product} = this.props;
        return <div className="product-card">
            <div className="image-div">
                <img src={'https://www.rentacross.com' + product.photos[0].path}
                     alt={product.title}/>
            </div>
            <div className="info-div">
                <div className="title">
                    {product.title}
                </div>
                <div className="rate">
                    <Rupee/>{product.rates.length > 0 ? product.rates[0].rate : ''} / Day
                </div>
                <div className="location">
                    <span className="place">
                        {product.location.address_line_2}
                    </span>
                    <span className="distance">
                        {product.distance}
                    </span>
                </div>
            </div>
        </div>
    }

}

export default ProductCard;
