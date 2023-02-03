import React from 'react'
import { Card } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';

const GroceryCard = () => {
  
  return (
    <div>
    <Card
        title="Grocery Item"
        bordered={true}
        style={{width: 300}}
        >
        <p>Grocery</p>
        <DeleteOutlined />   
     </Card>
   
    </div>
  )
}

export default GroceryCard