import { getOrders } from '../../api/orderData';
import addEditorderForm from '../components/forms/orderForm';
import viewRevenue from '../components/shared/pages/revenue';
import { viewAllOrders } from '../components/shared/pages/viewOrders';

const domEvents = () => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    // TODO: ADD CLICK EVENT FOR VIEWING ORDERS
    if (e.target.id.includes('view-orders-btn')) {
      getOrders().then(viewAllOrders);
    }

    // TODO: ADD CLICK EVENT FOR CREATING ORDERS
    if (e.target.id.includes('create-order-btn')) {
      addEditorderForm();
    }

    // TODO: ADD CLICK EVENT FOR VIEW REVENUE
    if (e.target.id.includes('view-revenue-btn')) {
      getOrders().then(viewRevenue);
    }
  });
};

export default domEvents;
