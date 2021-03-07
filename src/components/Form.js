import React from 'react';
import { Form, Input, Button } from 'antd';
// Checkbox

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

export default function Formz({ onOk }) {
  const onFinish = (values) => {
    onOk(values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form
      {...layout}
      name="basic"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="Product"
        name="product"
        rules={[{ required: true, message: 'Please input name of Product!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Count"
        name="count"
        rules={[{ required: true, message: 'Please input Product Count!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Product Id"
        name="id"
        rules={[{ required: true, message: 'Please input Product Id!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}
