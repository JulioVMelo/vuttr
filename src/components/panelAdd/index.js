import React from 'react';
import { Container } from './styles';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as ToolsActions } from '../../store/ducks/tools';

const panelAdd = ({toggleAddPanel}) => (
  <Container>
    <div className="container">
      <header>
        <h2>Add new tool</h2>
        <span onClick={() => toggleAddPanel()}>&times;</span>
      </header> 
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

const mapDispatchToProps = dispatch => bindActionCreators(ToolsActions, dispatch);

const mapStateToProps = state => ({
  state,
});

export default connect(mapStateToProps, mapDispatchToProps)(panelAdd);
