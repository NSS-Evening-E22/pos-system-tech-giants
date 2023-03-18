import logoutButton from '../components/logoutButton';
import domBuilder from '../components/shared/domBuilder';
import navBar from '../components/shared/navBar';
import homeLoggedIn from '../components/shared/pages/homeLoggedIn';
import domEvents from '../Events/domEvents';
import formEvents from '../Events/formEvents';
import navEvents from '../Events/navEvents';

const startApp = () => {
  domBuilder(); // BUILD THE DOM
  domEvents(); // ADD THE EVENT LISTENTERS TO THE DOM
  formEvents(); // ADD FORM EVENT LISTENTERS TO THE DOM
  navBar(); // DYNAMICALLY ADD THE NAV
  logoutButton(); // ADD THE LOGOUT BUTTON COMPONENT
  navEvents(); // ATTACH THE EVENT LISTENERS TO THE NAVBAR

  homeLoggedIn(); // STARTS AS THE APP LOADS
};

export default startApp;
