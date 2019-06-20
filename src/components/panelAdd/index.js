import React from 'react';
import { Container } from './styles';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as ToolsActions } from '../../store/ducks/tools';
import { Form, Input, } from '@rocketseat/unform';

function handleSubmit(data) {
  console.log(data);
}

const panelAdd = ({toggleAddPanel}) => (
  <Container>
    <div className="container">
      <header>
        <h2>Add new tool</h2>
        <span onClick={() => toggleAddPanel()}>&times;</span>
      </header> 
      
      <Form onSubmit={handleSubmit}>
        <div className="boxInput">  
          <Input label="Name" name="name"/>
        </div>
        
        <div className="boxInput">
          <Input label="Link" name="link"/>
        </div>
        
        <div className="boxInput">
          <Input label="Description" name="description"/>
        </div>
        
        <div className="boxInput">
          <Input label="Tags" name="tags"/>
        </div>

        <div className="action">
          <button type="submit">Send</button>
        </div>
      </Form>
    </div>
  </Container>
);

const mapDispatchToProps = dispatch => bindActionCreators(ToolsActions, dispatch);

const mapStateToProps = state => ({
  state,
});

export default connect(mapStateToProps, mapDispatchToProps)(panelAdd);
