import styled from "styled-components";
import { device } from "../../MediaQuery";
import profile from "../../assets/images/profile.jpg";

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 80%;
  margin: 0 auto 0;

  @media ${device.mobile} {
    width: 95%;
    margin: 0 auto 0;
  }

  .share-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    width: 40px;
    height: 40px;
    right: 20%;
    top: 40px;
    background-color: white;
    border: 1px dashed #d0d5dd;
    border-radius: 50%;
    cursor: pointer;
    transition: 0.1s;

    &:hover {
      background-color: #f2f4f7;
    }
    &:focus {
      box-shadow: 0px 0px 0px 4px #f2f4f7;
    }

    .svg1 {
      font-size: 24px;
      color: #98a2b3;

      @media ${device.mobile} {
        display: none;
      }
    }
    .svg2 {
      display: none;

      @media ${device.mobile} {
        display: block;
      }
    }

    @media ${device.mobile} {
      right: 0;
      top: 50px;
    }
  }

  .tooltiptext {
    display: none;
    position: absolute;
    top: 5px;
    right: 47px;
  }

  .cursor {
    display: none;
    text-align: center;
    padding: 8px, 12px;
    position: absolute;
    top: 25px;
    left: 30px;
  }

  .share-container:hover .tooltiptext {
    display: block;

    @media ${device.mobile} {
      display: none;
    }
  }

  .share-container:hover .cursor {
    display: block;

    @media ${device.mobile} {
      display: none;
    }
  }

  .profile-container {
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .img-containter {
    background-image: url(${profile});
    background-position: center;
    background-size: cover;
    width: 88px;
    height: 88px;
    border-radius: 50%;
    margin-top: 64px;
    cursor: pointer;
    position: relative;

    img {
      position: absolute;
      top: 39px;
      left: 43px;
      transform: translate(-50%, 50%);
      z-index: 30;
      display: none;
    }
  }
  .content {
    position: absolute;
    background: linear-gradient(
        0deg,
        rgba(52, 64, 84, 0.75),
        rgba(52, 64, 84, 0.75)
      ),
      url(.jpg);
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: none;
    border-radius: 50%;
    z-index: 1;
  }

  .img-containter:hover .content {
    display: block;
  }
  .img-containter:hover img {
    display: block;
  }

  p {
    margin-top: 24px;
    font-weight: 700;
    font-size: 20px;
    line-height: 30px;
    text-align: center;
    color: #101828;

    @media ${device.mobile} {
      font-size: 18px;
    }
  }

  .link-container {
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;

    a {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      margin-top: 24px;
      padding: 24px 32px;
      height: 64px;
      box-sizing: border-box;
      background-color: #eaecf0;
      border: 1px solid #eaecf0;
      border-radius: 8px;
      font-weight: 500;
      font-size: 18px;
      line-height: 28px;
      text-decoration: none;
      color: #101828;
      transition: 0.1s;

      &:hover {
        background: #d0d5dd;
        border: 1px solid #d0d5dd;
        box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
        border-radius: 8px;
      }
      &:focus {
        background: #eaecf0;
        border: 1px solid #98a2b3;
        box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05), 0px 0px 0px 2px #ebe9fe;
      }
      &:disabled {
        background: #fcfcfd;
        border: 1px solid #f2f4f7;
        box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
      }

      @media ${device.mobile} {
        font-weight: 500;
        font-size: 14px;
      }
    }
  }
  .social-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 24px;
    width: 100%;
    height: 72px;
    margin-bottom: 64px;

    img {
      width: 24px;
      height: 24px;
      padding: 16px;
    }
  }

  .footer {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 160px;

    .footer-content-container {
      display: flex;
      align-items: center;
      border-top: 1px solid #eaecf0;
      justify-content: space-between;
      height: 64px;
      width: 100%;

      @media ${device.mobile} {
        display: flex;
        align-items: start;
        flex-direction: column;
        height: 90px;
        justify-content: space-between;
        padding: 32px 0;
      }
    }
    img {
      @media ${device.mobile} {
        width: 120px;
      }
    }
    p {
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      color: #667085;

      @media ${device.mobile} {
        font-size: 14px;
      }
    }
  }
`;
