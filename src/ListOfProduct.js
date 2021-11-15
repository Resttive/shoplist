import Product from "./Product";

function ListOfProduct(props) {
    return (
        <div>
            <h3>List of products:</h3>
        <ol>
            {
                props.shoppingList.map((value, index) => {
                    return <Product
                        index= {index}
                        name={value}
                    /> 
                }
                )
            }
        </ol>
        ----------------------------------
        </div>
    )
  }
  
  export default ListOfProduct;
  