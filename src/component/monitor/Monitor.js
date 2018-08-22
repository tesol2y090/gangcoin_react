import React, { Component } from "react";
import Calculator from "./Calculator";
import ProductList from "../product/ProductList";
import Axios from "axios";

 class Monitor extends Component {

    constructor(props){
        super(props);
        this.state = {
            totalPrice: 0,
            orders: [],
            confirm: false,
            msg: ''
        };
        this.addOrder = this.addOrder.bind(this);
        this.delOrder = this.delOrder.bind(this);
        this.cancelOrder = this.cancelOrder.bind(this);
        this.confirmOrder = this.confirmOrder.bind(this);
    }

    addOrder(product) {
        let findOrder = this.state.orders.find(order => order.product.productId === product.productId);
        if(findOrder) {
            findOrder.quantity++;
        } else {
            this.state.orders.push({product: product, quantity: 1});
        }
        const totalPrice = this.state.totalPrice + parseFloat(product.price);
        this.setState({
            totalPrice: totalPrice,
            orders: this.state.orders,
            confirm: false
        });
    }

    delOrder(product){
        let findOrder = this.state.orders.find(order => order.product.productId === product.productId);
        let resultOrder = this.state.orders.filter(order => order.product.productId !== product.productId);
        const totalPrice = this.state.totalPrice - (findOrder.quantity * parseFloat(findOrder.product.price));
        this.setState({
            totalPrice: totalPrice,
            orders: resultOrder,
            confirm: false
        });
    }


    cancelOrder(){
        this.setState({
            totalPrice: 0,
            orders: [],
            confirm: false
        });
    }

    confirmOrder(){
        const { totalPrice, orders } = this.state;
        if(orders && orders.length > 0){
            Axios.post("http://localhost:3001/orders", {orderDate: new Date(), totalPrice, orders})
            .then(res => {
                this.setState({totalPrice: 0, orders: [], confirm: true, msg: 'Transaction has been confirmed'})
            });
        } else {
            this.setState({totalPrice: 0, orders: [], confirm: true, msg: 'Please select the coin'})
        }
       
    }

    render(){
        return(
            <div className="container-fluid">
                {this.state.confirm &&
                <div className="alert alert-secondary title text-right" roel="alert">  
                    {this.state.msg}
                </div>
                }
                <div className="row">
                    <div className="col-md-9">
                        <ProductList products={this.props.products} onAddOrder={this.addOrder}/>
                    </div>
                    <div className="col-md-3">
                        <Calculator totalPrice={this.state.totalPrice} orders={this.state.orders} onDelOrder={this.delOrder} onCancelOrder={this.cancelOrder} onConfirmOrder={this.confirmOrder}/>
                    </div>
                </div>
            </div>
        )
    }
 }

 export default Monitor;