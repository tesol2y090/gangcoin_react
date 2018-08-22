import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { connect } from "react-redux";
import FormField from "../common/FormField";
import {productFormField} from "./formFields";

class ProductForm extends Component{

    renderField(formFields){
        return formFields.map(( {label, name, type, required} ) => {
            return(
                <Field key={name} label={label} name={name} type={type} required={required} component={FormField}/>
            )
        });
    }

    

    render(){

        const { onProductSubmit } = this.props;
        return(
            <div>
                <form onSubmit={this.props.handleSubmit(onProductSubmit)}>
                    {this.renderField(productFormField)}
                    <button className="btn btn-block title btn-info" type="submit">
                        Submit
                    </button>
                </form>
            </div>
        )
    }
}

function validate(values) {
    const error = {};
    productFormField.forEach(({name, required}) => {
        if(!values[name] && required){
            error[name] = "Please fill the form";
        }
    });
    return error;
}

ProductForm = reduxForm({validate ,form: "ProductForm"})(ProductForm);

function mapStateToProps({ products }) {
    if(products && products.id) {
        return { initialValues: products };
    } else {
        return {};
    }
}

export default connect(mapStateToProps)(ProductForm);