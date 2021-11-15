import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function Product(props) {
    return (
        <div>
            <li>{props.name} <Link to={"/details/" + props.index}>details</Link> | <Link to={"/" + props.index + "/edit"}>edit</Link> | <Link to={"/" + props.index}>this</Link></li>
        </div>
    );
  }
  
  export default Product;