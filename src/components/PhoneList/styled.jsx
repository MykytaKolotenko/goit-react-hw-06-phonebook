import styled from '@emotion/styled';

export const Container = styled.div`
  width: inherit;

  & p {
    margin-top: 0px;
    margin-bottom: 10px;

    font-size: 30px;
    font-weight: 300;
    letter-spacing: 2px;
    text-align: center;

    color: #5f5f5f;
    text-shadow: 1px 1px 0 #7a7a7a;
  }
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: #acacac;
  color: white;

  width: inherit;
  list-style: none;

  border-radius: 5px;

  box-shadow: -10px 0px 13px -7px #000000, 10px 0px 13px -7px #000000,
    5px 5px 15px 5px rgba(0, 0, 0, 0);

  :not(:last-of-type) {
    margin-bottom: 10px;
  }

  & p {
    margin: 0px;
    padding: 5px 10px;

    font-size: 14px;
    font-weight: 400;
    letter-spacing: 1px;
    color: white;

    text-transform: capitalize;
    text-shadow: 0 0 10px #ffffff;

    & span {
      margin-left: 20px;
    }
  }
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  width: inherit;

  margin: 0px;
  padding: 0px;
`;

export const MyBtn = styled.button`
  padding: 5px 10px 5px 30px;

  background-color: transparent;
  color: white;
  border: none;

  text-shadow: 0 0 10px #ffffff;

  text-transform: capitalize;
  animation: change-color 3s linear 3 alternate;

  cursor: pointer;

  @keyframes change-color {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.3);
    }
    100% {
      transform: scale(1);
    }
  }
`;
