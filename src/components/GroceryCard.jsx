import React from 'react'
import { Card } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';

const GroceryCard = ({inputText, inputAmount, inputPrice}) => {


  
  return (
    <div>
    <Card
        title="Grocery Item"
        bordered={true}
        style={{width: 300}}
        inputText={inputText}
        inputAmount={inputAmount}
        inputPrice={inputPrice}
        >
       
        <DeleteOutlined />   
     </Card>
   
    </div>
  )
}

export default GroceryCard