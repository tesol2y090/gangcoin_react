import React from 'react';

const Footer = (props) => {
    return (
        <div className = "contain-fluid">
        <hr />
            <div className = "text-center text-uppercase">
                <small>
                    <span className = "text-danger">Powered By {props.company} </span>| <span className = "text-muted">Contract Me {props.email}</span>
                </small>
            </div>
        </div>
    )
};

export default Footer;