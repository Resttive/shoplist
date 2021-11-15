import React from 'react';

export default class SearchProduct extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      el2search: '',
    };
  }

  handleChange(event) {    
    this.setState({el2search: event.target.value});  
  }

  callParentMethod() {
    this.props.searchProduct(this.state.el2search);
  }

  render() {
    return (
      <div>
        <input type="text" placeholder="Product to search" value={this.state.el2search} onChange={this.handleChange.bind(this)}/>
        <input type="button" value="find!" onClick={this.callParentMethod.bind(this)}/>
        <h4>{this.props.searchedProduct}</h4>
      </div>
    );
  }
}