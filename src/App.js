import './App.css';

function App(props) {
  return (
    <div>
      {props.shoppingList && (
        <ol>
          {props.shoppingList.map((el) => (
            <li>{el}</li>
          ))}
        </ol>
      )}
    </div>
  );
}

export default App;
