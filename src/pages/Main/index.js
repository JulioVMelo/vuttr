import React from "react";
import { Container, Header, ActionsList } from "./styles";
import AddBtn from "../../components/addBtn";
import SearchBar from "../../components/searchBar";
import ListTool from "../../components/listTool/";
import PanelAdd from "../../components/panelAdd";
import { connect } from 'react-redux';

const Main = ({state}) => (
  <Container>
    <Header>
      <h1>VUTTR</h1>
      <h3>Very Userful Tools to Remember</h3>
    </Header>
    <ActionsList>
      <SearchBar />
      <AddBtn />
    </ActionsList>
    <ListTool />

    {
      state.tools.showPanelAdd &&
        <PanelAdd />
    }

  </Container>
);


const mapStateToProps = state => ({
  state,
});

export default connect(mapStateToProps)(Main);
