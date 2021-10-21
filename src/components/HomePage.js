import React from "react";
import header from "../Images/header7.png";
import "../css/style.css";
import Slider from "react-slick";

const HomePage = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="header">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6 ">
              <div className="text d-flex flex-column justify-content-center align-items-start ">
                <h1
                  style={{
                    fontFamily: "Kaushan Script, cursive",
                    marginLeft: "75px",
                  }}
                >
                  BazarOffline
                </h1>
              </div>
            </div>
            <div className="col-md-6">
              <img
                src={header}
                alt=""
                className="img-fluid img"
                style={{ width: "95%" }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="container" style={{ height: "80vh" }}>
        <div className="row">
          <div className="col-md-4">
            <div className="row-md-1 m-3">
              <div className="card card-img1">
                <h1>Hello!</h1>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="row-md-4 m-3">
              <div className="card card-img2">
                <h1>Hello!</h1>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="row-md-4 m-3">
              <div className="card card-img3">
                <h1>Hello!</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
