import React from "react";
import error from './home/assets/icon/error.png';
import { Link } from 'react-router-dom';

const Error = () => {
    const paragraphStyle = {
        fontSize: "5vh",
        textAlign: "center"
    };

    const img = {
        height: "auto",
        maxWidth: "80%",
        display: "block",
        marginLeft: "auto",
        marginRight: "auto",
        marginBottom: "10px"
    }

    return (
        <div style={{marginTop:"10vh"}}>
            <img src={error} alt="Error 404" style={img}/>
            <p style={paragraphStyle}>PAGE NOT FOUND</p>
          <Link to='/' style={paragraphStyle}> <p>Home Page</p> </Link>
        </div>
    );
};

export default Error;
