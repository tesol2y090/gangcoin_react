import React from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";

const NotFound = () => {
    return (
        <div>
            <Header />
                <div className="container col-md-8 text-center">
                    <h1>404</h1>
                    <h2>NotFound</h2>
                    <p>Page dose not exit</p>
                </div>
            <Footer company = "gangico" email = "gang@gmail.com"/>
        </div>
    )
}

export default NotFound;