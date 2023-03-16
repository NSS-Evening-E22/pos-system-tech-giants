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
    .then((data) => resolve(data))
    .catch(reject);
});

export default getOrders;
