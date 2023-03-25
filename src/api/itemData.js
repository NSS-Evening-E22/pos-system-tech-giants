import client from '../scripts/helpers/client';

const endpoint = client.databaseURL;

const getItems = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}/items.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const getSingleItem = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/items/${firebaseKey}.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const getItemsByOrder = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/items.json?orderBy="order_name"&equalTo="${firebaseKey}"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const createItem = (itemObject) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/items.json`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(itemObject),
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const updateItem = (itemObject) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/items/${itemObject.firebaseKey}.json`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(itemObject),
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

export {
  getItems, getSingleItem, getItemsByOrder, createItem, updateItem
};
