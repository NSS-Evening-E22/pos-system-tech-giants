import { domEvents, navEvents } from '../Events/domEvents';
import domBuilder from '../components/shared/domBuilder';
import logoutButton from '../components/logoutButton';

const startApp = (user) => {
  domBuilder(user);
  domEvents(user);
  logoutButton(user);
  navEvents(user);
};
export default startApp;
