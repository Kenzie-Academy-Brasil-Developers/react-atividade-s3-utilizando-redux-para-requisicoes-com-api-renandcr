import styled from "styled-components";

const Container = styled.li`
  display: flex;
  flex-direction: column;
  width: 230px;
  text-align: left;
  margin: 0 0 15px 0;
  border-radius: 4px;
  img {
    max-width: 100%;
    border-radius: 4px;
    box-shadow: 0 4px 32px -12px #94618e;
  }
  h1 {
    font-size: 20px;
    font-weight: 700;
    margin: 10px 0 0 0;
  }
  h2 {
    font-size: 18px;
    font-weight: 500;
    margin: 10px 0 0 0;
  }
  span {
    color: #94618e;
    font-weight: 800;
    font-family: Arial, Helvetica, sans-serif;
  }
`;
export default Container;
