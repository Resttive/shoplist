import React from 'react';

export default class EditProduct extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editedElement:'',
    };
  }

  handleChange(event) {    
    this.setState({editedElement: event.target.value});  
  }

  callParentMethod() {
    this.props.editElement(this.props.el2edit, this.state.editedElement);
  }

  render() {
    return (
      <div>
          {console.log(this.props.el2edit)}
        <input type="text" value={this.state.editedElement} onChange={this.handleChange.bind(this)}/>
        <input type="button" value="edit" onClick={this.callParentMethod.bind(this)}/>
      </div>
    );
  }
}