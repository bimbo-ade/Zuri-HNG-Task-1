import styled from "styled-components";

import { device } from "../../MediaQuery";
export const Div = styled.div`

width: 90%;
margin: 0 auto 0;
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
    }`;
