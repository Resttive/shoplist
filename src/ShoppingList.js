import React from 'react';
import Add from './Add';
import Delete from './Delete';
import ListOfProduct from './ListOfProduct';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Product from './Product';
import EditProduct from './EditProduct';
import ProductDetails from './ProductDetails';
import SearchProduct from './SearchProduct';

export default class ShoppingList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shoppingList: ['bread', 'cookies', 'milk', 'water'],
      detailList: [
        { name: 'bread with grains', cnt: 3 },
        { name: 'cookies with chocolate', cnt: 2 },
        { name: 'full milk 2%', cnt: 1 },
        { name: 'mineral water', cnt: 10 },
      ],
      searchedProduct: '',
    };
  }

  addEl2List(new_item) {
    this.setState((prevState) => ({
      shoppingList: [...prevState.shoppingList, new_item]
    }))
  }
  
  deleteElFromList(item_name) {
    this.setState((prevState) => {
      let prev = prevState.shoppingList;
      let reduced = prev.filter(function(element, index, tab) {
        return element.toLowerCase() !== item_name.toLowerCase(); 
      });
    return {shoppingList: reduced}
    })
  }
  searchProduct(item_name) {
    this.setState((prevState) => {
      let prev = prevState.shoppingList;
      let searched = prev.filter(function(element, index, tab) {
        return element.toLowerCase() === item_name.toLowerCase(); 
      });
      if (searched.length === 0){
        return {searchedProduct: "This product is not on the list!"}
      }
    return {searchedProduct: searched.length + " product of name " + searched + " found!"}
    })
  }


  editElement(item_name, after_edit) {
    this.setState((prevState) =>{
      let prev = prevState.shoppingList;
      let toEditIndex = prev.indexOf(item_name);
      prev[toEditIndex] = after_edit;
      return {shoppingList: prev}
    })
  }

  render() {
    return (
    <Router>
        <ul>
          <li>
            <Link to="/">Shopping List</Link>
          </li>
          <li>
            <Link to="/list/add">Add Product</Link>
          </li>
          <li>
            <Link to="/list/delete">Delete Product</Link>
          </li>
          <li>
            <Link to="/list/search">Search Product</Link>
          </li>
        </ul>
        <hr />
        <Route path="/" render={() => <ListOfProduct shoppingList = {this.state.shoppingList} />}/>
        <Route path="/list/add" render={() => ( <Add addEl2List = {this.addEl2List.bind(this)}/>)}/>
        <Route path="/list/delete" render={() => ( <Delete deleteElFromList = {this.deleteElFromList.bind(this)}/>) }/>
        <Route path="/list/search" render={() => ( <SearchProduct searchProduct = {this.searchProduct.bind(this)} searchedProduct ={this.state.searchedProduct}/>) }/>
        <Route exact path="/:id" render={({match}) =>  <ol> <Product name={this.state.shoppingList[match.params.id] } /> </ol>} />
        <Route path="/:id/edit" render={({match}) => <EditProduct el2edit ={this.state.shoppingList[match.params.id] } editElement = {this.editElement.bind(this)} />} />
        <Route path="/details/:id" render={({match}) => <ProductDetails name ={this.state.detailList[match.params.id].name } cnt ={this.state.detailList[match.params.id].cnt } />} />
      </Router>
    );
  }
}