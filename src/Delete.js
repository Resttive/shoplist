import React from 'react';

export default class Delete extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      el2delete: '',
    };
  }

  handleChange(event) {    
    this.setState({el2delete: event.target.value});  
  }

  callParentMethod() {
    this.props.deleteElFromList(this.state.el2delete);
  }

  render() {
    return (
      <div>
        <input type="text" placeholder="Product to delete" value={this.state.el2delete} onChange={this.handleChange.bind(this)}/>
        <input type="button" value="delete" onClick={this.callParentMethod.bind(this)}/>
      </div>
    );
  }
}