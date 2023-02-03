import React from 'react'
import GroceryCard from './GroceryCard'

const GroceryList = () => {

  return (
    <div>
        <ul>
          {filteredItems.map((Item) =>(

            <GroceryCard/>
          
          ))}
        </ul>
    </div>
  )
}

export default GroceryList