import styled from "styled-components";

import profile from "../../assets/images/profile.jpg";
export const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 80%;
  margin: 0 auto 0;

  .svg-cont {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    width: 40px;
    height: 40px;
    right: 230px;
    top: 50px;
    background-color: white;
    border: 1px dashed #d0d5dd;
    border-radius: 50%;

    svg {
      font-size: 24px;
      color: #98a2b3;
    }
  }
  .tooltiptext {
    visibility: hidden;
    position: absolute;
    top: 5px;
    right: 47px;
    z-index: 1;
  }
  .cursor {
    visibility: hidden;
    text-align: center;
    padding: 8px, 12px;
    position: absolute;
    top: 25px;
    left: 30px;
    z-index: 1;
  }

  .svg-cont:hover {
    background-color: #f2f4f7;
  }
  .svg-cont:hover .tooltiptext {
    visibility: visible;
  }

  .svg-cont:hover .cursor {
    visibility: visible;
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
      height: 56px;
      box-sizing: border-box;
      background-color: #eaecf0;
      border: 1px solid #eaecf0;
      border-radius: 8px;
      font-weight: 600;
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
    }
  }
  .social-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 24px;
    width: 100%;
    height: 56px;

    margin-bottom: 120px;

    img {
      width: 24px;
      height: 24px;
      margin-left: 24px;
    }
  }

  .footer {
    display: flex;
    align-items: center;
    border-top: 1px solid #eaecf0;
    justify-content: space-between;
    width: 100%;
    height: 86px;
    background-color: white;

    p {
      width: 832.28px;
      height: 24px;
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;

      text-align: center;

      color: #667085;
    }
  }
`;
