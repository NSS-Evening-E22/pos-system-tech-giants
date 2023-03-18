import getOrders from '../../api/orderData';
import { viewAllOrders } from '../components/shared/pages/viewOrders';
import getItems from '../../api/itemData';
import signOut from '../helpers/signOut';

const navigationEvents = () => {
  // LOGOUT BUTTON
  document.querySelector('#google-auth')
    .addEventListener('click', signOut);

  document.querySelector('#view-orders').addEventListener('click', () => {
    getItems().then(viewAllOrders);
  });

  document.querySelector('#create-order').addEventListener('click', () => {
    // Create order Form call

  });
  document.querySelector('#search-btn').addEventListener('click', () => {
    const searchValue = document.querySelector('#search').value;

    getOrders.then((data) => data.filter((index) => index.title.toLowerCase().includes(searchValue)
      || index.definition.toLowerCase().includes(searchValue))).then(viewAllOrders);
    document.querySelector('#search').value = '';
  });
};

export default navigationEvents;
