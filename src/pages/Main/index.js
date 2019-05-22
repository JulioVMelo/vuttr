import React from 'react';
import { Container, Header, ActionsList } from './styles';
import AddTool from '../../components/addTool';
import SearchBar from '../../components/searchBar';
import ListTool from '../../components/listTool/';

const Main = () => (
  <Container>
    <Header>
      <h1>VUTTR</h1>
      <h3>Very Userful Tools to Remember</h3>
    </Header>
    {/* Search and add */}
    <ActionsList>
      <SearchBar />
      <AddTool />
    </ActionsList>
    <ListTool />
  </Container>  
);

export default Main;
