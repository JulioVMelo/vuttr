import React from 'react';
import { Container, SearchTags } from './styles';

const SearchBar = () => (
  <Container>
    <input type="text" placeholder="search"/>

    <SearchTags>
      <input type="checkbox" id="tagsOnly"/>
      <label htmlFor="tagsOnly">search in tags only</label>
    </SearchTags>
  </Container>
);


export default SearchBar;
