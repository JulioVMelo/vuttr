import styled from 'styled-components';

export const Button = styled.button`
  font-size: 1.8em;
  color: #fff;
  background-color: #365DF0;
  padding: 0 26px;
  border-radius: 5px;
  border: 0;
  height: 50px;

  &:hover {
    background-color: #2F55CC;
    cursor: pointer;
  }

  &:active {
    background-color: #244AA8;
  }
`;
