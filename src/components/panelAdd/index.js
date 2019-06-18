import React from 'react';
import { Container } from './styles';

const panelAdd = () => (
  <Container>
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
  </Container>
);

export default panelAdd;
