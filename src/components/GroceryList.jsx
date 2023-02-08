import React from 'react'
import GroceryCard from './GroceryCard'

const GroceryList = ({groceryList, setGroceryList, inputText, setInputText, inputPrice, setInputPrice,inputAmount, setInputAmount }) => {

  return (
    <div>
        <ul>
          {groceryList.map((grocery) => ( 
            <GroceryCard
              groceryList={groceryList}
              setGroceryList={setGroceryList}
              inputText={inputText}
              setInputText={setInputText}
              inputAmount={inputAmount}
              setInputAmount={setInputAmount}
              inputPrice={inputPrice}
              setInputPrice={setInputPrice}
              id={grocery.id}
            />
          ))};
          
         
        </ul>
    </div>
  )
}

export default GroceryList