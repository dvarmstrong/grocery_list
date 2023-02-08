import React, { useState } from 'react'
import { Button, Form, Input } from 'antd';




const GroceryForm = ({inputText, setInputText,inputAmount, setInputAmount,inputPrice, setInputPrice}) => {


  const [groceryList, setGroceryList] = useState([]);

  const inputTextHandler = (e) => {
    console.log(e.target.value);
    setInputText(e.target.value);
  };

  const inputAmountHandler = (e) => {
    console.log(e.target.value);
    setInputAmount(e.target.value);
  };

  const inputPriceHandler = (e) => {
    console.log(e.target.value);
    setInputPrice(e.target.value);
  }



  const submitGroceryHandler = (e) => {
    console.log("Clicked")
    e.preventDefault();
    setGroceryList([
      ...groceryList, {text: inputText, amount: inputAmount, price: inputPrice, completed: false, id: Math.random() * 1000}
    ]);
    
   
   
    setInputText("");
    setInputAmount("");
    setInputPrice("");
  };


  




  return (
    <div>
        <Form
    name="basic"
    labelCol={{
      span: 8,
    }}
    wrapperCol={{
      span: 8,
    }}
    // style={{
    //   maxWidth: '200px',
    // }}
    initialValues={{
      remember: true,
    }}
    >
        <Form.Item
      label="Grocery Items"
      name="Grocery Item"
      rules={[
        {
          required: true,
          message: 'Please input your Grocery!',
        },
      ]}
    >
    
      <Input
      value={inputText}
      onChange={inputTextHandler}
      type="text"
      className="grocery-input"
      />
      </Form.Item>

      <Form.Item
      label= "Amount"
      name="Amount"
      rules={[
        {
          required: true,
          message: 'Please input your Amount!',
        },
      ]}
    >
      <Input
      value={inputAmount}
      type="number"
      className="grocery-input"
      onChange={inputAmountHandler}
      />
    </Form.Item>
    <Form.Item
      label= "Price"
      name="Price"
      rules={[
        {
          required: true,
          message: 'Please input your Price!',
        },
      ]}
    >
      <Input
      value={inputPrice}
      type="number"
      className="grocery-input"
      onChange={inputPriceHandler}
      >
      </Input>
    </Form.Item>
    <Button type="primary" onClick={submitGroceryHandler}  >
            Add Grocery 
          </Button>
        
    </Form>
    

    </div>
  )
}

export default GroceryForm