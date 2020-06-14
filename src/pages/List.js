import React, { useState } from 'react';
import { PlusCircleFilled } from '@ant-design/icons';
import { Table, Radio, Button, Modal } from 'antd';
import Input from '../components/Input';
import Tabz from '../components/Tabz';
import 'antd/dist/antd.css';
import './list.css';

let tableData = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    name: 'Joe Black',
    age: 42,
    address: 'London No. 1 Lake Park',
  },
  {
    key: '3',
    name: 'Jim Green',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
  },
  {
    key: '4',
    name: 'Jim Red',
    age: 32,
    address: 'London No. 2 Lake Park',
  },
];
// rowSelection object indicates the need for row selection

// const rowSelection = {
//   onChange: (selectedRowKeys, selectedRows) => {
//     console.log(
//       `selectedRowKeys: ${selectedRowKeys}`,
//       'selectedRows: ',
//       selectedRows
//     );
//   },
//   getCheckboxProps: (record) => ({
//     disabled: record.name === 'Disabled User',
//     // Column configuration not to be checked
//     name: record.name,
//   }),
// };

function NavForLIsting({ isOpen, onOk, onCancel, openModal }) {
  const [name, setName] = useState();
  const [address, setAddress] = useState();
  const [age, setAge] = useState();

  return (
    <div style={style.nav}>
      <Input color={'white'} />
      <Button
        type="primary"
        style={{
          margin: '10px',
        }}
        onClick={openModal}
      >
        <PlusCircleFilled />
        Add Item
      </Button>
      <Modal
        visible={isOpen}
        title="Add Items"
        onOk={onOk}
        onCancel={onCancel}
        footer={[
          <Button key="back" onClick={onCancel}>
            Back
          </Button>,
          <Button key="Add Iteem" type="primary" loading={false} onClick={onOk}>
            Add Item
          </Button>,
        ]}
      ></Modal>
    </div>
  );
}
export default function List() {
  const [data, setData] = useState(tableData);
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => {
    return setIsOpen(true);
  };
  const onOk = () => {
    setData(
      (state) =>
        // state.push(
        [
          {
            key: '5',
            name: 'Ten  Blue',
            age: 40,
            address: 'London No. 2 Lake Park',
          },
          ...state,
        ]
      // )
    );
    setIsOpen(false);
  };

  const onCancel = () => {
    setIsOpen(false);
  };

  return (
    <div style={style.body}>
      <NavForLIsting
        onOk={onOk}
        onCancel={onCancel}
        isOpen={isOpen}
        openModal={openModal}
      />

      <Tabz data={data} />
    </div>
  );
}
const style = {
  body: {
    background: 'white',
    height: '105%',
    width: '100%',
    paddingTop: '10px',
    display: 'flex',
    borderRadius: '25px',
    flowFlow: 'column nowrap',
    flexDirection: 'column',
    boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.1)',
  },
  firstDiv: {},
  table: {
    width: '100%',
  },
  nav: {
    height: '8%',
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    paddingBottom: '10px',
    justifyContent: 'space-between',
    paddingRight: '20px',
  },
};
