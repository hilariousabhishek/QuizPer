import React from "react";
import { Link } from "react-router-dom";

const Error = () => {

    return(
    <>
    <h1>Error 404</h1>
    <p>Sorry, Page not found</p>
    <Link to="/">Homepage</Link> 
    </>
    );
};

export default Error;