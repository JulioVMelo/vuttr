import React from "react";
import { Container, Header, ActionsList, AddTool } from "./styles";
import AddBtn from "../../components/addBtn";
import SearchBar from "../../components/searchBar";
import ListTool from "../../components/listTool/";
import PanelAdd from "../../components/panelAdd";

const Main = () => (
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
    {/* <PanelAdd /> */}
  </Container>
);

export default Main;
