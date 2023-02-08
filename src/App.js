import React, { useState } from 'react';
import './App.css';
import GroceryList from './components/GroceryList';
import GroceryForm from './components/GroceryForm';






function App() {

  const [groceryList, setGroceryList] = useState([]);
  const [inputText, setInputText] = useState("");
  const [inputAmount, setInputAmount] = useState("");
  const [inputPrice, setInputPrice] = useState("");


  return (
    <div className="App">
      <h1>Grocery List </h1>
      <GroceryForm
        inputText={inputText}
        setInputText={setInputText}
        inputAmount={inputAmount}
        setInputAmount={setInputAmount}
        inputPrice={inputPrice}
        setInputPrice={setInputPrice}
      />
     
        <GroceryList
          groceryList={groceryList}
          setGroceryList={setGroceryList}
        />
    </div>
  );
}

export default App;
