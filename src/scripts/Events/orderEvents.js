import getOrderDetails from '../../api/mergedData';
import {
  deleteOrders, getOrders, getSingleOrder, updateOrder
} from '../../api/orderData';
import addEditorderForm from '../components/forms/orderForm';
import { viewAllOrders, viewSingleOrder } from '../components/shared/pages/viewOrders';

const orderEvents = () => {
  document.querySelector('#order-container').addEventListener('click', (e) => {
    if (e.target.id.includes('delete-card')) {
      // console.warn('Clicked Delete');
      const [, firebaseKey] = e.target.id.split('--');
      console.warn(firebaseKey);
      deleteOrders(firebaseKey).then(() => { getOrders().then(viewAllOrders); });
    }

    if (e.target.id.includes('edit-card')) {
      const [, firebaseKey] = e.target.id.split('--');
      console.warn(firebaseKey);

      getSingleOrder(firebaseKey).then((orderObj) => addEditorderForm(orderObj));
      console.warn(getSingleOrder(firebaseKey));
    }

    if (e.target.id.includes('details-card')) {
      const [, firebaseKey] = e.target.id.split('--');

      getOrderDetails(firebaseKey).then(viewSingleOrder);
    }
  });

  document.querySelector('#form-container').addEventListener('click', (e) => {
    console.warn('This works here!');
    if (e.target.id.includes('submit-order')) {
      const [, firebaseKey] = e.target.id.split('--');
      console.warn(firebaseKey, 'Grabbed key!');

      const payload = {
        name: document.querySelector('#order-name').value,
        phone: document.querySelector('#customer-phone').value,
        email: document.querySelector('#customer-email').value,
        firebaseKey
      };

      updateOrder(payload).then(() => {
        getOrders().then(viewAllOrders);
      });
    }
  });
};

export default orderEvents;
