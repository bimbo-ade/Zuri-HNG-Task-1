import styled from "styled-components";

import { device } from "../../MediaQuery";
export const Div = styled.div`
  width: 54%;
  margin: 4rem auto;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media ${device.mobile} {
    width: 90%;
    margin: 0 auto 0;
  }
  .contact-header {
    h2 {
      font-weight: 600;
      font-size: 36px;
      line-height: 44px;
      letter-spacing: -0.02em;
      color: #101828;

      @media ${device.mobile} {
        margin-top: 64px;
      }
    }
    p {
      font-weight: 400;
      font-size: 20px;
      line-height: 30px;
      color: #475467;
      @media ${device.mobile} {
        font-size: 18px;
        line-height: 28px;
      }
    }
  }

  .form {
    width: 100%;
    margin-top: 48px;
  }

  input {
    box-sizing: border-box;
    outline: none;
    font-weight: 400;
    font-size: 16px;
    color: #101828;
    font-style: normal;

    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 10px 14px;
    gap: 8px;
    width: 100%;
    height: 44px;
    cursor: pointer;
    background: #ffffff;
    border: 1px solid #d0d5dd;
    box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
    border-radius: 8px;
    margin-bottom: 24px;

    &:focus {
      border: 1px solid #84caff;
      box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
    }

    &::placeholder {
      color: #667085;
    }
  }

  label {
    margin-bottom: 6px;
  }

  .username {
    display: flex;
    @media ${device.mobile} {
      flex-direction: column;
    }
  }

  .first-name,
  .last-name {
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  .first-name {
    margin-right: 24px;
  }

  .email {
    display: flex;
    flex-direction: column;
  }

  .message {
    display: flex;
    flex-direction: column;

    textarea {
      outline: none;
      font-weight: 400;
      font-size: 16px;
      color: #101828;
      line-height: 24px;
      box-sizing: border-box;
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      padding: 12px 14px;
      gap: 8px;
      cursor: pointer;
      width: 100%;
      height: 132px;
      background: #ffffff;
      border: 1px solid #d0d5dd;
      box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
      border-radius: 8px;

      &:focus {
        border: 1px solid #84caff;
        box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05), 0px 0px 0px 4px #d1e9ff;
      }
      &::placeholder {
        color: #667085;
      }
    }
    .error {
      font-weight: 400;
      font-size: 14px;
      line-height: 20px;
      color: red;
    }
    &:hover .error {
      display: none;
    }
  }

  .check {
    display: flex;
    align-items: center;
    width: 100%;
    margin-bottom: 32px;

    .check-icon {
      width: 20px;
      height: 20px;
      background: #ffffff;
      cursor: pointer;
      border: 1px solid #d0d5dd;
      border-radius: 6px;
      &:focus {
        border: 1px solid #84caff;
        box-shadow: 0px 0px 0px 4px #d1e9ff;
        border-radius: 6px;
      }
    }

    p {
      font-weight: 400;
      font-size: 14px;
      line-height: 24px;

      margin-left: 12px;
      color: #475467;
    }
  }
  button {
    box-sizing: border-box;
    padding: 12px 20px;
    width: 100%;
    height: 48px;
    background: #1570ef;
    border: 1px solid #1570ef;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    color: #ffffff;
    box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
    border-radius: 8px;
    cursor: pointer;
    margin-bottom: 64px;

    &:focus {
      background: #1570ef;
      border: 1px solid #1570ef;
      box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05), 0px 0px 0px 4px #d1e9ff;
    }
    &:hover {
      background: #175cd3;

      border: 1px solid #175cd3;
      box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
    }
    &:disabled {
      background: #b2ddff;

      border: 1px solid #b2ddff;

      box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
    }
  }
`;
