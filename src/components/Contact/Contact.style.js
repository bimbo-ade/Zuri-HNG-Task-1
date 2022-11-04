import styled from "styled-components";

export const Div = styled.div`
  width: 54%;
  margin: 4rem auto;
  display: flex;
  flex-direction: column;
  justify-content: center;

  .contact-header {
    h2 {
      font-weight: 600;
      font-size: 36px;
      line-height: 44px;
      letter-spacing: -0.02em;
      color: #101828;
    }
    p {
      font-weight: 400;
      font-size: 20px;
      line-height: 30px;
      color: #475467;
    }
  }

  .form {
    width: 100%;
    margin-top: 48px;
  }

  input {
    box-sizing: border-box;
    outline: none;
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
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
      color: #667085;
    }
  }

  label {
    margin-bottom: 6px;
  }

  .username {
    display: flex;
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
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        color: #667085;
      }
    }
  }

  .check {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-top: 24px;
    margin-bottom: 32px;
    svg {
      box-sizing: border-box;
      cursor: pointer;
      color: #d0d5dd;
      width: 20px;
      height: 20px;
      background: #f2f4f7;
      outline: none;
      &:focus {
        background: #ffffff;
        border-radius: 6px;
        border: 1px solid #84caff;
        box-shadow: 0px 0px 0px 4px #d1e9ff;
      }
    }

    p {
      font-family: "Inter";
      font-style: normal;
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
    box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
    border-radius: 8px;
    cursor: pointer;
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
