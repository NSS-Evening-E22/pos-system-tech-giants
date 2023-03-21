import getOrders from '../../api/orderData';
import closeOrderButton from '../components/shared/closeOrderButton';
import editOrderForm from '../components/shared/pages/editOrder';
import homeLoggedIn from '../components/shared/pages/homeLoggedIn';
import { viewAllOrders } from '../components/shared/pages/viewOrders';
import renderToDom from '../helpers/renderToDom';
import signOut from '../helpers/signOut';

const navigationEvents = () => {
  // LOGOUT BUTTON
  document.querySelector('#google-auth')
    .addEventListener('click', signOut);

  document.querySelector('#view-orders').addEventListener('click', () => {
    getOrders().then(viewAllOrders);
  });

  document.querySelector('#create-order').addEventListener('click', () => {
    editOrderForm();
  });

  document.querySelector('#welcome-page').addEventListener('click', () => {
    homeLoggedIn();
  });

  document.querySelector('#close-order').addEventListener('click', () => {
    closeOrderButton();
  });

  document.querySelector('#search-btn').addEventListener('click', () => {
    const searchValue = document.querySelector('#search').value;

    getOrders.then((data) => data.filter((index) => index.title.toLowerCase().includes(searchValue)
      || index.definition.toLowerCase().includes(searchValue))).then(viewAllOrders);
    document.querySelector('#search').value = '';
  });
};

export default navigationEvents;
