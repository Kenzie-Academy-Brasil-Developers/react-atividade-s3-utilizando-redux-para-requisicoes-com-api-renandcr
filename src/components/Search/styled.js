import styled from "styled-components";

const ContainerSearch = styled.div`
  width: 350px;
  padding: 15px;
  border-radius: 6px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;

  h2 {
    margin: 0;
    padding: 0;
    max-width: 100%;
    font-size: 25px;
    font-weight: 800;
    color: #94618e;
    text-align: left;
    font-family: Arial, Helvetica, sans-serif;
  }

  div {
    display: flex;
    align-items: center;
    margin-top: 10px;
    input {
      margin: 0;
      padding-left: 10px;
      width: 70%;
      height: 41px;
      border: none;
      border-radius: 4px;
      background-color: #f8eee7;
      color: #6b7a8f;

      font-size: 14px;
      font-weight: 600;
      font-family: Arial, Helvetica, sans-serif;
      ::placeholder {
        color: #6b7a8f;
      }
      :focus {
        color: #6b7a8f;
      }
    }
    button {
      margin: 0;
      margin-left: 10px;
      cursor: pointer;
      width: 30%;
      height: 43px;
      border: none;
      border-radius: 4px;
      background-color: #6b7a8f;
      color: white;
      font-size: 15px;
      font-weight: 500;
      padding: 5px;
      :hover {
        filter: brightness(75%);
        transition: 0.3s;
      }
      :active {
        filter: brightness(1.6);
        transition: 0.3s;
      }
    }
  }
`;

export { ContainerSearch };
