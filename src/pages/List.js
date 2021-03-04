import React, { useState } from 'react';
import { PlusCircleFilled } from '@ant-design/icons';
import { Button, Modal } from 'antd';
import Input from '../components/Input';
import Tabz from '../components/Tabz';
import Formz from '../components/Form';
import Sidebar from './Sidebar';

import 'antd/dist/antd.css';
import './list.css';

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

function NavForLIsting({ isOpen, onOk, onCancel, openModal, save, onDelete }) {
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
      <Sidebar save={save} onDelete={onDelete} />
      <Modal
        visible={isOpen}
        title="Add Items"
        onOk={onOk}
        onCancel={onCancel}
        footer={[
          <Button key="back" onClick={onCancel}>
            Back
          </Button>,
        ]}
      >
        <Formz onOk={onOk} />
      </Modal>
    </div>
  );
}

// localStorage.getItem('data') !== null ||
// localStorage.getItem('data') !== undefined
//   ? JSON.parse(localStorage.getItem('data'))
//   :
export default function List() {
  const savedData = [];
  const [data, setData] = useState(savedData);
  const [isOpen, setIsOpen] = useState(false);
  const [toDel, setToDel] = useState([]);
  const setters = (key, data) => {
    setToDel(data);
    console.log(data);
  };

  const openModal = () => {
    return setIsOpen(true);
  };
  const onOk = ({ name, age, address }) => {
    setData(
      (state) => {
        return [
          {
            key: state.length + 1,
            name,
            age,
            address,
          },
          ...state,
        ];
      }
      // )
    );
    setIsOpen(false);
  };

  const save = () => {
    window.localStorage.setItem('data', JSON.stringify(data));
  };

  const onDelete = () => {
    console.log(toDel);
    toDel.forEach((del) =>
      setData((state) => {
        return state.filter((x) => x === del.key);
      })
    );
    // setTimeout(() => {
    //   save();
    // }, 2000);
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
        save={save}
        onDelete={onDelete}
      />

      <Tabz data={data} setters={setters} />
    </div>
  );
}

/** ===============Style======================= */
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
