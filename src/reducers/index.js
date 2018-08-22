import { combineReducers } from "redux";
import { reducer as reduxForm } from "redux-form";
import ProductReducers from "./ProductReducers";
import OrderReducers from "./OrderReducers";

const rootReducers = combineReducers({
    orders: OrderReducers,
    products: ProductReducers,
    form: reduxForm
});

export default rootReducers;