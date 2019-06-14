import React, { Component } from 'react';
import { Container, Tool } from './styles';
import RemoveImg from '../../assets/images/Icon-Delete-2px.svg';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as ToolsActions } from '../../store/ducks/tools';

class ListTool extends Component {

  componentDidMount() {
    this.props.asyncListTools();    
    console.log('props do vuttr', this.props);
  }

  render() {
    return(
      <Container>
          {
            this.props.state.tools.map( tool => 
              <Tool key={tool.id}>
                <div className="title">
                  <h1> { tool.title } </h1>
                  <img  src={ RemoveImg } onClick={() => this.props.removeTool(tool.id)} alt="button remove"/>
                </div>

                <div className="description">
                  <p>{ tool.description }</p>
                </div>
                
                <div className="tags">
                  {  tool.tags.map( tag => 
                      <span key={Math.random()}>#{ tag }</span>
                    )
                  }
                </div> 
              </Tool>
            )
          }
      </Container>
    );
  }
};

const mapStateToProps = state => ({
  state,
});

const mapDispatchToProps = dispatch => bindActionCreators(ToolsActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ListTool);
