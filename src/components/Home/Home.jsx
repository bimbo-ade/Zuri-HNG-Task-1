import React from "react";
import profile from "../../assets/images/profile.jpg";

import share from "../../assets/images/share.png";
import { Div } from "./Home.style";
const Home = () => {
  return (
    <Div>
      <div className="container">
        <img src={share} alt="" className="share-icon" />
        <div className="profile-container">
          <div className="img-containter">
            <img src={profile} alt="" width={50} />
          </div>
          <h4>Adeyemi Ab</h4>
        </div>
        <div className="links"></div>
        <div className="social-icon"></div>
        <div className="footer"></div>
      </div>
    </Div>
  );
};

export default Home;
