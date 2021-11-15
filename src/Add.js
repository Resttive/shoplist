import React from 'react';

export default class Add extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      el2add: '',
    };
  }

  handleChange(event) {    
    this.setState({el2add: event.target.value});  
  }

  callParentMethod() {
    this.props.addEl2List(this.state.el2add);
  }

  render() {
    return (
      <div>
        <input type="text" placeholder="Product to add" value={this.state.el2add} onChange={this.handleChange.bind(this)}/>
        <input type="button" value="add" onClick={this.callParentMethod.bind(this)}/>
      </div>
    );
  }
}