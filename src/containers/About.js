import React from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";

const About = () => {
    return (
        <div>
            <Header />
            <div className="container col-md-5">
                <h3>About Me :P</h3>
                <p className="title text-justify mt-4 md-4">
                    GangExchange offers the best cyptocurrency price for you and we will do the ico for gangcoin,
                    you can use gangcoin in gangexchange or real world
                </p>
                <h4 className="text-success">From CEO,CTO,CDO,COO gang</h4>
            </div>
            <Footer company = "gangico" email = "gang@gmail.com"/>
        </div>
    );
};

export default About;