import styled from "styled-components";

export const Div = styled.div`
  width: 40%;
  margin: 4rem auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  .form {
    width: 100%;
    margin-top: 48px;
  }
  input {
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 10px 14px;
    gap: 8px;
    width: 100%;
    height: 44px;
    background: #ffffff;
    border: 1px solid #d0d5dd;
    box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
    border-radius: 8px;
    margin-bottom: 24px;
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
      box-sizing: border-box;
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      padding: 12px 14px;
      gap: 8px;
      width: 100%;
      height: 132px;
      background: #ffffff;
      border: 1px solid #d0d5dd;

      box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
      border-radius: 8px;
    }
  }
  .check {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-top: 24px;

    margin-bottom: 32px;
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
  }
`;
