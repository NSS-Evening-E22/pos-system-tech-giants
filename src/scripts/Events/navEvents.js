import getOrders from '../../api/orderData';
import { viewAllOrders } from '../components/shared/pages/viewOrders';
import signOut from '../helpers/signOut';

const navigationEvents = () => {
  // LOGOUT BUTTON
  document.querySelector('#google-auth')
    .addEventListener('click', signOut);

  document.querySelector('#view-orders').addEventListener('click', () => {

  });

  document.querySelector('#create-order').addEventListener('click', () => {

  });
  document.querySelector('#search-btn').addEventListener('click', () => {
    const searchValue = document.querySelector('#search').value;

    getOrders.then((data) => data.filter((index) => index.title.toLowerCase().includes(searchValue)
      || index.definition.toLowerCase().includes(searchValue))).then(viewAllOrders);
    document.querySelector('#search').value = '';
  });
};

export default navigationEvents;
