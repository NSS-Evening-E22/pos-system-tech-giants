import { getOrders } from '../../api/orderData';
import logoutButton from '../components/logoutButton';
import domBuilder from '../components/shared/domBuilder';
import navBar from '../components/shared/navBar';
import homeLoggedIn from '../components/shared/pages/homeLoggedIn';
import domEvents from '../Events/domEvents';
import navigationEvents from '../Events/navEvents';
import orderEvents from '../Events/orderEvents';

const startApp = () => {
  domBuilder(); // BUILD THE DOM
  domEvents(); // ADD THE EVENT LISTENTERS TO THE DOM
  orderEvents(); // CRUD ON INDIVIDUAL ORDERS
  navBar(); // DYNAMICALLY ADD THE NAV
  logoutButton(); // ADD THE LOGOUT BUTTON COMPONENT
  navigationEvents(); // ATTACH THE EVENT LISTENERS TO THE NAVBAR
  getOrders();
  homeLoggedIn(); // STARTS AS THE APP LOADS
};

export default startApp;
