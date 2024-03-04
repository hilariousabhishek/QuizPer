import React from "react";
import ssc from "../../home/assets/img/ssc.png";

//header and footer
import Navbar from '../../section/navbar';
import Footer from '../../section/footer'; 


import SSC_JE from "./SSC_JE";

const ShowData = () => {
  return (
    <>
    <Navbar/>
    <div className="container marginClass ">
      <div className="titlediv">
        
        <img src={ssc} alt="ssc" className="rounded-circle"/>
     
          <span className="hover-underline-animation sizechange">Staff Selection Commission</span>
          <br />
  

      </div>

      <div className="titlediv" style={{backgroundColor:"white",  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}>
        The Staff Selection Commission (SSC) is a prominent government organization in India responsible for recruiting staff for various government departments and ministries. Established in 1975, the SSC operates under the Department of Personnel and Training, Government of India. The primary objective of the SSC is to conduct examinations and interviews to select suitable candidates for Group B and Group C posts in government offices. The commission conducts a range of examinations, including the Combined Graduate Level (CGL), Combined Higher Secondary Level (CHSL), Junior Engineer (JE), Multi-Tasking Staff (MTS), and others. The selection process involves multiple stages, including a preliminary examination, main examination, and skill test or interview, depending on the nature of the post. SSC plays a crucial role in maintaining the efficiency and transparency of the recruitment process, ensuring that qualified and competent individuals join the public sector workforce. With its commitment to fair and impartial selection, the Staff Selection Commission contributes significantly to the development and functioning of the Indian government machinery.
        </div>
        

      <SSC_JE/>

      <div className="bodydiv">
        <ul>
          <li className="btn btn-success" data-toggle="modal" data-target=".ssc_je" aria-label="Open SSC JE Modal">
            SSC JE
          </li>

          <li>SSC CGL</li>

          <li className="btn btn-success" data-toggle="modal" data-target=".ssc_cgl" aria-label="Open SSC CGL Modal">
          SSC CHGL
          </li>

          <li>SSC phase</li>

        </ul>
      </div>
    </div>
    <Footer/>
      </>
  );
};

export default ShowData;
