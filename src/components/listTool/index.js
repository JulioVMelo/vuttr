import React from 'react';
import { Container, Tool } from './styles';
import RemoveImg from '../../assets/images/Icon-Delete-2px.svg';

const ListTool = () => (
  <Container>
    <Tool>
      <div className="title">
        <h1>Notion</h1>
        <img src={RemoveImg} />
      </div>

      <div className="description">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur metus augue, malesuada ut elit in, ultricies pellentesque ante. Vestibulum eu.</p>
      </div>

      <div className="tags">
        <span>#web</span>
        <span>#api</span>
        <span>#json</span>
        <span>#node</span>
        <span>#react</span>
        <span># es6</span>
      </div> 
    </Tool>
  </Container>
);

export default ListTool;
