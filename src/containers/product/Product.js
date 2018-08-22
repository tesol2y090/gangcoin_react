import React, { Component } from "react";
import Header from "../../component/Header";
import Footer from "../../component/Footer";
import ProductList from "../../component/product/ProductList";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { productsFetch, productDelete } from "../../actions";

class Product extends Component {

    constructor(props){
        super(props);
        this.delProduct = this.delProduct.bind(this);
        this.editProduct = this.editProduct.bind(this);
    }

    componentDidMount(){
        this.props.productsFetch;
    }

    delProduct(product){
        this.props.productDelete(product.id);
    }

    editProduct(product){
        this.props.history.push('products/edit/' + product.id);
    }

    render(){
        return(
            <div>
            <Header /> 
               <div className="container-fluid">
                    <div className="row">
                        <div className="col-6">
                            <h1>Product</h1>
                        </div>
                        <div className="col-6">
                            <button className="btn btn-success title float-right" onClick={() => this.props.history.push('products/add')}>Add</button>
                        </div>
                    </div>

                    {this.props.products && Array.isArray(this.props.products) &&
                    (<ProductList products={this.props.products} onDelProduct={this.delProduct} onEditProduct={this.editProduct}/>)
                    }
                </div>
            <Footer company = "gangico" email = "gang@gmail.com"/>
            </div>
        )
    }
}

function mapStateToProps({ products }) {
    return { products };
}

export default withRouter(connect(mapStateToProps, { productsFetch, productDelete })(Product));
