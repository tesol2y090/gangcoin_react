import React,{ Component } from "react";
import Header from "../../component/Header";
import Footer from "../../component/Footer";
import { connect } from "react-redux";
import { ordersFetch, orderDelete } from "../../actions";

class Order extends Component {

    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.ordersFetch();
    }

    delOrder(order){
        this.props.orderDelete(order.id);
    }

    showOrders(){
        return this.props.orders && this.props.orders.map(order => {
            const date = new Date(order.orderDate);
            return (
                <div key={order.id} className="col-md-3">
                    <hr />
                    <p className="text-right">
                        <button className="btn btn-danger btn-sm title" onClick={() => this.delOrder(order)}>X</button>
                    </p>
                    <h5>Date: {date.toLocaleDateString()} {date.toLocaleTimeString()}</h5>
                    <ul>
                        {order.orders && order.orders.map(record => {
                            return <li key={order.orders.id}>
                                    {record.product.productName} x {record.quantity} = {record.product.price * record.quantity}
                                   </li>
                        })}
                    </ul>
                    <p className="title"> Totalprice {order.totalPrice}</p>
                </div>
            )
        })
    }

    render(){
        return(
            <div>
                <Header />
                    <div className="container-fluid">
                        <h1>Transaction</h1>
                        <div className="row">
                            {this.showOrders()}
                        </div>
                    </div>
                <Footer company = "gangico" email = "gang@gmail.com"/>
            </div>
        )
    }

}

function mapStateToProps({ orders }){
    return { orders };
}

export default connect(mapStateToProps, {ordersFetch, orderDelete})(Order);