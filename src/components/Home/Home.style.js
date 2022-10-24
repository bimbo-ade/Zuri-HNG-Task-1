import styled from "styled-components";

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 80%;
  margin: 0 auto 0;

  .share-icon {
    position: absolute;
    width: 40px;
    height: 40px;
    right: 230px;
    top: 50px;
  }

  .img-containter {
    img {
      width: 88px;
      height: 88px;
      border-radius: 50%;
      margin-top: 64px;
    }
  }

  h4 {
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
  }
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
  }
`;
