import React from "react";
import header from "../Images/header1.jpg";
import "../css/style.css";

const HomePage = () => {
  return (
    <>
      <div className="header">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6 ">
              <div className="text d-flex flex-column justify-content-center align-items-start "><h1>BazarOffline</h1></div>
            </div>
            <div className="col-md-6">
              <img src="https://previews.123rf.com/images/kikiabdurahman/kikiabdurahman2004/kikiabdurahman200400013/143721388-vector-illustration-of-online-shopping-e-commerce-and-retail-concept-modern-flat-web-landing-page-te.jpg" alt="" className="img-fluid img" style={{width: '95%'}} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
