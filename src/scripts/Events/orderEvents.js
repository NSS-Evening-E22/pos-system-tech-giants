import {
  deleteOrders, getOrders, getSingleOrder, updateOrder
} from '../../api/orderData';
import editOrderForm from '../components/shared/pages/editOrder';
import { viewAllOrders } from '../components/shared/pages/viewOrders';

const orderEvents = () => {
  document.querySelector('#order-container').addEventListener('click', (e) => {
    console.warn('Clicked Order-Container');
    if (e.target.id.includes('delete-card')) {
      console.warn('Clicked Delete');
      const [, firebaseKey] = e.target.id.split('--');
      deleteOrders(firebaseKey).then(() => { getOrders().then(viewAllOrders); });
    }

    if (e.target.id.includes('edit-card')) {
      const [, firebaseKey] = e.target.id.split('--');

      getSingleOrder(firebaseKey).then((order) => editOrderForm(order));
    }
  });

  document.querySelector('#form-container').addEventListener('click', (e) => {
    if (e.target.id.includes('update-card')) {
      const payload = {
        title: document.querySelector('#title').value,
        description: document.querySelector('#description').value,
        image: document.querySelector('#image').value,
        price: document.querySelector('#price').value,
        author_id: document.querySelector('#author_id').value,
        sale: document.querySelector('#sale').checked,
        // firebaseKey,
      };

      updateOrder(payload).then(() => {
        getOrders().then(viewAllOrders);
      });
    }
  });
};

export default orderEvents;
