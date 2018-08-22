import React, { Component } from 'react';
import { connect } from "react-redux";
import { productsFetch } from "../actions";
import Header from "../component/Header";
import Footer from "../component/Footer";
import Monitor from "../component/monitor/Monitor";

class Home extends Component {

constructor(props){
  super(props);
}

componentDidMount(){
  this.props.productsFetch();
}

  render() {
    return (
      <div>
      <Header />
      <Monitor products = {this.props.products}/>
      <Footer company = "gangico" email = "gang@gmail.com"/>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { products: state.products };
}

export default connect(mapStateToProps, { productsFetch })(Home);
