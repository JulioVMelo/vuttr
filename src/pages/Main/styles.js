import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 800px;
  margin: 0 auto;
  padding: 60px 0px;
`;

export const Header = styled.header`
  color: #170C3A;

  h1 {
    font-size: 4.2em;
    font-weight: 600;
    letter-spacing: 2px;
  }

  h3 {
    font-size: 3em;
    font-weight: 400;
  }
`;

export const ActionsList = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 50px 0 20px 0;
`;

export const AddTool = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;

  background-color: rgba(0,0,0, .6);

  .container {
    background-color: #fff;
    max-width: 800px;
    flex-grow: 1;
    border-radius: 5px;
    padding: 15px;
    box-shadow: 0px 20px 25px rgba(0,0,0, .1);

    h2 {
      font-size: 2.6em;
      font-weight: 600;
      color: #170C3A;
      margin-bottom: 30px;
    }

    .boxInput {
      display: flex;
      flex-direction: column;
      margin-bottom: 30px;
      padding: 0px 20px;
      
      label {
        font-size: 2em;
        color: #170C3A;
        margin-bottom: 20px;
      }

      input {
        padding: 12px 21px;
        background-color: #F5F4F6;
        border: 1px solid #EBEAED;
        border-radius: 5px;
        color: #170C3A;
        font-size: 2em;

        &:focus {
          border: 1px solid #DEDCE1;
          background-color: #EBEAED;
        }
        &::placeholder {
          color: #B1ADB9;
        }
      }
    }

    .action {
      width: 100%;
      display: flex;
      justify-content: flex-end;
      padding: 0 20px;

      button {
        font-size: 1.8em;
        color: #fff;
        height: 50px;
        width: 174px;
        border-radius: 5px;
        background-color: #365DF0;
        cursor: pointer;
        
        &:hover {
          background-color: #2F55CC;
        }
        &:active {
          background-color: #244AA8;
        }
      }       
    }
  }
`;
