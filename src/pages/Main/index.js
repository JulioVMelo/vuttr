import React from 'react';
import { Container, Header, ActionsList, AddTool } from './styles';
import AddBtn from '../../components/addBtn';
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
      <AddBtn />
    </ActionsList>
    <ListTool />
    <AddTool>
      <div className="container">
        <h2>Add new tool</h2>
        <div className="boxInput">
          <label>Name</label>
          <input type="text" placeholder="teste"/>
        </div>
        <div className="boxInput">
          <label>Link</label>
          <input type="text" placeholder="teste"/>
        </div>
        <div className="boxInput">
          <label>Description</label>
          <input type="text" placeholder="teste"/>
        </div>
        <div className="boxInput">
          <label>Tags</label>
          <input type="text" placeholder="teste"/>
        </div>
        <div className="action">
          <button>Save</button>
        </div>
      </div>
    </AddTool>
  </Container>  
);

export default Main;
