import React from "react";
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
          <div className="content"></div>
          <img src={share} alt="" width={28} />
        </div>

        <p id="twitter">Adeyemi Ab</p>
        <p id="slack" hidden>
          Abimbola Adeyemi
        </p>
      </div>

      <div className="link-container">
        <a
          href="https://twitter.com/_dami_sarah_"
          target="_blank"
          rel="noopener noreferrer"
          id="twitter"
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

      <div className="footer">
        <img src={zuri} alt="zuri logo" width={135} />
        <p> HNG Internship 9 Frontend Task</p>
        <img src={I4G} alt="I4G logo" width={130} />
      </div>
    </Div>
  );
};

export default Home;
