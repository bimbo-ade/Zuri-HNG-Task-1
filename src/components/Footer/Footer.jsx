import React from "react";
import "./Footer.style";
import { Div } from "./Footer.style";
import zuri from "../../assets/images/zuri.png";
import I4G from "../../assets/images/I4G.png";
const Footer = () => {
  return (
    <>
      <Div>
        <div className="footer">
          <div className="footer-content-container">
            <img src={zuri} alt="zuri logo" width={135} />
            <p> HNG Internship 9 Frontend Task</p>
            <img src={I4G} alt="I4G logo" width={130} />
          </div>
        </div>
      </Div>
    </>
  );
};

export default Footer;
