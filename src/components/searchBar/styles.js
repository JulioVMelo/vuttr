import styled from 'styled-components';
import SearchImage from '../../assets/images/Icon-Search-2px.svg';

export const Container = styled.div`
  display: flex;
  align-items: center;


  input[type="text"] {
    width: 403px;
    height: 50px;
    background-color: #F5F4F6;
    background-image: url("${SearchImage}");
    background-repeat: no-repeat;
    background-size: 20px;
    background-position: 15px 15px;
    font-size: 20px;
    color: #170C3A;
    padding-left: 50px;
    border-radius: 5px;
    border: 1px solid #EBEAED;

    &::placeholder {
      color: #B1ADB9;
    }

    &:focus {
      border-color: #DEDCE1;
      background-color: #EBEAED;
    }
  }
`;

export const SearchTags = styled.div`
  margin-left: 20px;

  label {
    color: #170C3A;
    font-size: 20px;
    padding-left: 7px;
  }
`;
