import client from '../scripts/helpers/client';

const endpoint = client.databaseURL;

const getOrders = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}/orders.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data) {
        resolve(Object.values(data));
      } else {
        resolve([]);
      }
    })
    .catch(reject);
});

const createOrder = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/order.json`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((data) => {
      if (data) {
        resolve(Object.values(data));
      } else {
        resolve([]);
      }
    })
    .catch(reject);
});

const deleteOrders = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/order/${firebaseKey}.json`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.JSON())
    .then((data) => resolve(data))
    .catch(reject);
});

const getSingleOrder = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/order/${firebaseKey}.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const updateOrder = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/order/${payload.firebaseKey}.json`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then(resolve)
    .catch(reject);
});

export {
  getOrders, createOrder, deleteOrders, updateOrder, getSingleOrder
};
