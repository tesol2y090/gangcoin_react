import React, {Component} from 'react';
import {Link} from "react-router-dom";

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date()
        };
        setInterval(() => this.tick(), 1000);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        return (
            <div className = "container-fluid">
                <div className = "row">
                    <div className = "col-md-8 text-left">
                        <h1 className = "text-success mt-4">GANGEXCHANGE (GAG) </h1>
                    </div>
                    <div className = "col-md-4 text-right">
                        <h5 className = "text-muted mt-4">{this.state.date.toLocaleTimeString()}</h5>
                        <ul className="list-inline">
                            <li className="list-inline-item title text-success"><Link to="/">Home</Link></li>
                            <li className="list-inline-item title">|</li>
                            <li className="list-inline-item title text-success"><Link to="/orders">Orders</Link></li>
                            <li className="list-inline-item title">|</li>
                            <li className="list-inline-item title text-success"><Link to="/products">Product</Link></li>
                            <li className="list-inline-item title">|</li>
                            <li className="list-inline-item title text-success"><Link to="/about">About Us</Link></li>
                        </ul>
                    </div>
                </div>
                <hr />
            </div>
        )
    }

}

export default Header;

