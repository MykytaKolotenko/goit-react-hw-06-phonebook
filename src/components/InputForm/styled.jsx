import styled from '@emotion/styled';

export const MyForm = styled.form`
  width: 100%;
  margin-bottom: 30px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & h2 {
    font-size: 20px;
    margin-top: 0px;
    letter-spacing: 2px;
    font-weight: 300;
    color: #5f5f5f;

    text-shadow: 1px 1px 0 #7a7a7a;
  }

  & button {
    padding: 5px 20px;
    border-radius: 5px;

    background-color: #acacac;
    color: white;
    font-size: 16px;
    line-height: 1.3;
    letter-spacing: 1px;

    border: none;
    cursor: pointer;
    box-shadow: -10px 0px 13px -7px #000000, 10px 0px 13px -7px #000000,
      5px 5px 15px 5px rgba(0, 0, 0, 0);
    text-shadow: 0 0 10px #ffffff;
  }
`;

export const MyInput = styled.input`
  width: 100%;
  margin-bottom: 20px;
  padding: 5px 10px;
  border: none;
  border-radius: 5px;

  letter-spacing: 1px;
  color: #5f5f5f;

  box-shadow: -10px 0px 13px -7px #000000, 10px 0px 13px -7px #000000,
    5px 5px 15px 5px rgba(0, 0, 0, 0);
`;
