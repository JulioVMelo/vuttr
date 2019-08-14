import React from 'react';
import { Container, SearchTags } from './styles';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as ToolsActions } from "../../store/ducks/tools";

const SearchBar = ({searchTool, toggleTags}) => (
  <Container>
      <input type="text" name="query" onChange={(e) => searchTool(e.target.value)} placeholder="search"/>

      <SearchTags>
        <input name="tags" type="checkbox" id="tagsOnly" onChange={(e) => toggleTags(e.target.checked)} />
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
