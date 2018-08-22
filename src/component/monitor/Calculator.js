import React, { Component } from "react";

class Calculator extends Component {

    showOrders(orders){
        if(!orders || orders.length === 0){
            return <li className="text-right text-muted title"> NO Orders</li>
        } else {
            return orders.map(order => {
                return (<li className="text-right text-success title">
                        {order.product.productName} x {order.quantity} = {order.product.price * order.quantity}
                    <button className="btn btn-light btn-sm" onClick={() => this.props.onDelOrder(order.product)}>X</button>
                </li>
                )
            });
        }
    }

     render(){

        const { totalPrice, orders } = this.props;

         return (
             <div>
                 <h1 className="text-right">{totalPrice} GAG</h1>
                 <hr/>
                 <ul className="list-unstyled">
                    {this.showOrders(orders)}
                 </ul>
                 <hr/>
                 <button className="btn btn-block btn-danger title" onClick={() => this.props.onConfirmOrder()}>Summit</button>
                 <button className="btn btn-block btn-secondary title" onClick={this.props.onCancelOrder}>Cancel</button>
             </div>
         )
     }
}

export default Calculator;