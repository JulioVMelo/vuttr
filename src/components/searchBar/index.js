import React from 'react';
import { Container, SearchTags } from './styles';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as ToolsActions } from "../../store/ducks/tools";


const SearchBar = ({searchTool}) => (
  <Container>
    <input type="text" onChange={(e) => searchTool(e.target.value)} placeholder="search"/>

    <SearchTags>
      <input type="checkbox" id="tagsOnly"/>
      <label htmlFor="tagsOnly">search in tags only</label>
    </SearchTags>
  </Container>
);


const mapDispatchToProps = dispatch =>
  bindActionCreators(ToolsActions, dispatch);

const mapStateToProps = state => ({
  state
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
