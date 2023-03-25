import { getItemsByOrder } from './itemData';
import { getSingleOrder } from './orderData';
// import getPayments from './paymentData';

const getOrderDetails = (firebaseKey) => new Promise((resolve, reject) => {
  getSingleOrder(firebaseKey)
    .then((order) => {
      getItemsByOrder(order.firebaseKey)
        .then((orderItems) => {
          resolve({ ...order, orderItems });
        })
        .catch((error) => {
          reject(error);
        });
    })
    .catch((error) => {
      reject(error);
    });
});

export default getOrderDetails;

// const getRevenueDetails = () => {
//   Promise.all([getItems, getOrders, getPayments])
//   .then(data => {
//     const revenueData = [];

//   })
// }
