import React from "react";
import header from "../Images/header1.jpg";
import "../css/style.css";

const HomePage = () => {
  return (
    <>
      <div>
        <div className="header" style={{position:'relative', backgroundColor: '#879bed', height: '100vh'}}>
          <div className="row">
            <div className=" col-md-6 d-flex align-items-center justify-content-center" style={{zIndex: '10'}}>
              <h1>BazarOffline</h1>
            </div>
            <div className="col-md-6" style={{padding: '0'}}>
              <img
                className="img-fluid"
                src={header}
                alt=".."
                style={{position: 'relative', zIndex: '100'}}
              />
            </div>
          </div>
          <svg style={{position: 'absolute', bottom: '0', left: '0', display: 'flex'}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" fill-opacity="1" d="M0,224L26.7,224C53.3,224,107,224,160,192C213.3,160,267,96,320,90.7C373.3,85,427,139,480,160C533.3,181,587,171,640,160C693.3,149,747,139,800,160C853.3,181,907,235,960,229.3C1013.3,224,1067,160,1120,144C1173.3,128,1227,160,1280,192C1333.3,224,1387,256,1413,272L1440,288L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z"></path></svg>
        </div>
      </div>
    </>
  );
};

export default HomePage;
