import getOrderDetails from '../../api/mergedData';
import {
  deleteOrders, getOrders, getSingleOrder, updateOrder
} from '../../api/orderData';
import addEditorderForm from '../components/forms/orderForm';
import editOrderForm from '../components/shared/pages/editOrder';
import renderOrderDetailsPage from '../components/shared/pages/orderReview';
import { viewAllOrders } from '../components/shared/pages/viewOrders';

const orderEvents = () => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
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

      getOrderDetails(firebaseKey).then(editOrderForm);
    }
    if (e.target.id.includes('details-card')) {
      const [, firebaseKey] = e.target.id.split('--');
      viewAllOrders(firebaseKey).then((data) => {
        renderOrderDetailsPage(data, firebaseKey);
      });
    }
  });

  document.querySelector('#main-container').addEventListener('click', (e) => {
    console.warn('This works here!');
    if (e.target.id.includes('submit-order')) {
      const [, firebaseKey] = e.target.id.split('--');
      console.warn(firebaseKey, 'Grabbed key!');

      const payload = {
        order_name: document.querySelector('#order-name').value,
        customer_phone: document.querySelector('#customer-phone').value,
        customer_email: document.querySelector('#customer-email').value,
        order_type: document.querySelector('#order-type').value,
        order_status: 'open',
        firebaseKey,
      };

      updateOrder(payload).then(() => {
        getOrders().then(viewAllOrders);
      });
    }
  });
};

export default orderEvents;
