import React, {Component} from "react";

class ProductItem extends Component {

    doSomething(productName){
        console.log(productName);
    }
    
    render() {
        const {productName, price, unit, thumbnail} = this.props.product;
        return (
            <div className = "col-md-2 col-sm-6">
                <img src={thumbnail} className="img-fluid img-thumbnail" style={{height: 70}}/>
                <h5 className="mt-2">{productName}</h5>
                <p className="title text-right">{price} {unit}</p>

                {this.props.onAddOrder &&
                <button className="btn btn-block btn-secondary title" onClick={() => this.props.onAddOrder(this.props.product)}>
                    Buy
                </button>
                }
                
                {this.props.onEditProduct &&
                <button className="btn  btn-info col-5 title" onClick={() => this.props.onEditProduct(this.props.product)}>
                    Edit
                </button>
                }
                {this.props.onDelProduct &&
                <button className="btn  btn-danger col-5 float-right title" onClick={() => this.props.onDelProduct(this.props.product)}>
                    Delete
                </button>
                }
                <hr/>
            </div>
        )
    }
}

export default ProductItem;