import React from 'react';
import { Button } from './styles';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as ToolsActions } from '../../store/ducks/tools';

const AddBtn = ({toggleAddPanel}) => (
  <Button onClick={() => toggleAddPanel()}>Add</Button>
);

const mapDispatchToProps = dispatch => bindActionCreators(ToolsActions, dispatch);

const mapStateToProps = state => ({
  state,
});

export default connect(mapStateToProps, mapDispatchToProps)(AddBtn);
