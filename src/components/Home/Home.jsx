import React from "react";
import profile from "../../assets/images/profile.jpg";

import slack from "../../assets/images/slack.png";
import share from "../../assets/images/share.png";
import github from "../../assets/images/github.png";

import zuri from "../../assets/images/zuri.png";

import I4G from "../../assets/images/I4G.png";
import { Div } from "./Home.style";
const Home = () => {
  return (
    <Div>
      <img src={share} alt="" className="share-icon" />
      <div className="profile-container">
        <div className="img-containter">
          <img src={profile} alt="profile" width={50} />
        </div>
        <h4>Adeyemi Ab</h4>
      </div>
      <div className="link-container">
        <a
          href="https://twitter.com/_dami_sarah_"
          target="_blank"
          rel="noopener noreferrer"
        >
          Twitter Link
        </a>

        <a
          href="https://training.zuri.team/"
          target="_blank"
          rel="noopener noreferrer"
          id="btn__zuri"
        >
          Zuri Team
        </a>

        <a
          href="http://books.zuri.team"
          target="_blank"
          rel="noopener noreferrer"
          id="books"
        >
          Zuri Books
        </a>

        <a
          href="https://books.zuri.team/python-for-beginners?ref_id=<yourslackname>"
          target="_blank"
          rel="noopener noreferrer"
          id="book__python"
        >
          Python Books
        </a>

        <a
          href="https://background.zuri.team"
          target="_blank"
          rel="noopener noreferrer"
          id="pitch"
        >
          Background Check for Coders
        </a>

        <a
          href="https://books.zuri.team/design-rules"
          target="_blank"
          rel="noopener noreferrer"
          id="book__design"
        >
          Design Books
        </a>
      </div>
      <div className="social-icon">
        <img src={slack} alt="slack" />

        <a
          href="https://github.com/bimbo-ade"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img src={github} alt="github" />
        </a>
      </div>
      <hr />
      <div className="footer">
        <img src={zuri} alt="" width={140} />
        <p> HNG Internship 9</p>
        <img src={I4G} alt="" width={140} />
      </div>
    </Div>
  );
};

export default Home;
