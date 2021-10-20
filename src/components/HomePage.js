import React from "react";
import header from "../Images/header7.png";
import "../css/style.css";

const HomePage = () => {
  return (
    <>
      <div className="header">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6 ">
              <div className="text d-flex flex-column justify-content-center align-items-start "><h1 style={{fontFamily: 'Kaushan Script, cursive', marginLeft: '75px'}}>BazarOffline</h1></div>
            </div>
            <div className="col-md-6">
              <img src={header} alt="" className="img-fluid img" style={{width: '95%'}} />
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <div className="card" style={{borderRadius: '10px'}}>
              <h1>asdlfkj</h1>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card" style={{borderRadius: '10px'}}>
              <h1>asdlfkj</h1>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card" style={{borderRadius: '10px'}}>
              <h1>asdlfkj</h1>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card" style={{borderRadius: '10px'}}>
              <h1>asdlfkj</h1>
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default HomePage;
