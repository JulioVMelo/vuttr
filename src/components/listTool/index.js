import React, { Component } from 'react';
import { Container, Tool } from './styles';
import RemoveImg from '../../assets/images/Icon-Delete-2px.svg';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as ToolsActions from '../../store/actions/tools';

class ListTool extends Component {
  
  constructor(props) {
    super(props);
    
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
                      <span>#{ tag }</span>
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
