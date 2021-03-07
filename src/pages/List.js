import React, { useState, useEffect } from 'react';
import Tabz from '../components/Tabz';
import NavForListing from '../components/ListingNavigation';
import { useQuery, gql, useMutation } from '@apollo/react-hooks';
import 'antd/dist/antd.css';
import './list.css';

export default function List() {
  const savedData = [];
  const [data, setData] = useState(savedData);
  const [isOpen, setIsOpen] = useState(false);
  const [toDel, setToDel] = useState([]);
  // const getInventoryItems = () => {
  const listInvetoryItems = /**GRAPHQL */ gql`
    query {
      allInventories {
        data {
          count
          product
          id
          _id
        }
      }
    }
  `;
  const { data: inventoryData, error, loading } = useQuery(listInvetoryItems);

  const addInventoryMutation = /** GraphQL mutation */ gql`
    mutation CreateInventoryItem($data: InventoryInput!) {
      createInventory(data: $data) {
        count
        id
        product
        _id
      }
    }
  `;

  const deleteInventoryMutation = /** GraphQL delete Mutation */ gql`
    mutation DeleteInventoryItem($id: ID!) {
      deleteInventory(id: $id) {
        count
        id
        product
        _id
      }
    }
  `;
  const [createItem] = useMutation(addInventoryMutation, {
    onCompleted: (data) => {
      const { createInventory } = data;
      setData((state) => {
        return [{ ...createInventory, key: createInventory._id }, ...state];
      });
    },
  });
  const [deleteItem] = useMutation(deleteInventoryMutation, {
    onCompleted: (data) => {
      setData((state) => {
        return state.filter((x) => x.key !== data.deleteInventory._id);
      });
    },
  });
  useEffect(() => {
    // setData(inventoryData);
    if (
      inventoryData &&
      inventoryData.allInventories &&
      inventoryData.allInventories.data
    ) {
      const newData = inventoryData.allInventories.data.map((data) => ({
        ...data,
        key: data._id,
      }));
      setData(newData);
    }
    if (error && loading === false) {
      console.log('I think we have an error');
    }
  }, [inventoryData, error, loading]);
  const setters = (key, data) => {
    setToDel(data);
  };

  const openModal = () => {
    return setIsOpen(true);
  };
  const onOk = ({ product, count, id }) => {
    createItem({ variables: { data: { product, count, id } } });
    setIsOpen(false);
  };

  const save = () => {
    window.localStorage.setItem('data', JSON.stringify(data));
  };

  const onDelete = () => {
    toDel.forEach((del) => {
      deleteItem({ variables: { id: del } });
    });
  };

  const onCancel = () => {
    setIsOpen(false);
  };

  return (
    <div style={style.body}>
      <NavForListing
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
