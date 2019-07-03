import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px 0px;
`;

export const Tool = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #EBEAED;
  border-radius: 5px;
  padding: 15px 15px;
  box-shadow: 0px 5px 7px rgba(0,0,0, 0.05);
  transition: all 0.5s;
  margin-bottom: 30px;

  &:hover {
    cursor: pointer;
    box-shadow : 0px 20px 25px rgba(0,0,0, 0.05);
  }

  .title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10px;

    a {
      text-decoration: underline;
      font-size: 2.4em;
      color: #365DF0;
      font-weight: 900;
    }

    img {
      width: 15px;
      cursor: pointer;
    }
  }

  .description {
    font-size: 2em;
    color: #170C3A;
    margin-bottom: 20px;
  }

  .tags {
    font-size: 1.8em;
    color: #170C3A;
    font-weight: 900;

    span {
      margin-right: 10px;
    }
  }
`;
