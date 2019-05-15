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
