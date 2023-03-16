import client from '../scripts/helpers/client';

const endpoint = client.databaseURL;

const getPayments = () => new Promise((resolve, reject) => {
    fetch(`${endpoint}/payments.json`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

export default getPayments;
