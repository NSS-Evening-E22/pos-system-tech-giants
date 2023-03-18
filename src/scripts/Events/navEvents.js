import { getOrders } from '../../api/orderData';
import addEditorderForm from '../components/forms/orderForm';
import { viewAllOrders } from '../components/shared/pages/viewOrders';
import signOut from '../helpers/signOut';

const navigationEvents = () => {
  // LOGOUT BUTTON
  document.querySelector('#google-auth')
    .addEventListener('click', signOut);

  document.querySelector('#view-orders').addEventListener('click', () => {
    getOrders().then(viewAllOrders);
  });

  document.querySelector('#create-order').addEventListener('click', () => {
    addEditorderForm();
  });

  document.querySelector('#welcome-page').addEventListener('click', () => {
    homeLoggedIn();
  });

  document.querySelector('#search-btn').addEventListener('click', () => {
    const searchValue = document.querySelector('#search').value;

    getOrders().then((data) => data.filter((index) => index.order_name.toLowerCase().includes(searchValue)
      || index.order_description.toLowerCase().includes(searchValue))).then(viewAllOrders);
    document.querySelector('#search').value = '';
  });
};

export default navigationEvents;
