import React from "react";
import slack from "../../assets/images/slack.png";
import github from "../../assets/images/github.png";
import tooltip from "../../assets/images/tooltip.png";
import { BsThreeDots } from "react-icons/bs";
import cursor from "../../assets/images/cursor.png";
import camera from "../../assets/images/camera.png";
import { RiShareForwardLine } from "react-icons/ri";
import { Div } from "./Home.style";

const Home = () => {
  return (
    <Div>
      <div className="share-container" tabindex="1">
        <RiShareForwardLine className="svg1" />
        <BsThreeDots className="svg2" />

        <span className="tooltiptext">
          {" "}
          <img src={tooltip} alt="tooltip" width={90} />
        </span>

        <span className="cursor">
          <img src={cursor} alt="cursor" width={20} />
        </span>
      </div>

      <div className="profile-container">
        <div className="img-containter">
          <div className="content"></div>
          <img src={camera} alt="profile" width={24} id="profile__img" />
        </div>

        <p id="twitter">damisayrah_</p>
        <p id="slack" hidden>
          dami_sayrah
        </p>
      </div>

      <div className="link-container">
        <a
          href="https://twitter.com/damisayrah_"
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
          href="https://books.zuri.team/python-for-beginners?ref_id=<dami_sayrah>"
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
    </Div>
  );
};

export default Home;
