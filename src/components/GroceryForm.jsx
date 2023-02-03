import React from 'react'
import { Button, Form, Input } from 'antd';

const GroceryForm = () => {


  




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
          message: 'Please input your Items!',
        },
      ]}
    >
      <Input />
    </Form.Item>
    <Button type="primary" >
            Add Grocery 
          </Button>
        
    </Form>
    

    </div>
  )
}

export default GroceryForm