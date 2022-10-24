import styled from "styled-components";

export const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 90%;
  margin: 0 auto 0;

  .share-icon {
    position: absolute;
    width: 40px;
    height: 40px;
    right: 280px;
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
`;
