import firebase from 'firebase/app';
import 'firebase/auth';
import homeLoggedOut from '../components/shared/pages/homeLoggedOut';
import client from './client';
import startApp from './startApp';

const ViewDirectorBasedOnUserAuthStatus = () => {
  firebase.initializeApp(client);
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      startApp(user);
    } else {
      // person is NOT logged in
      homeLoggedOut();
    }
  });
};

export default ViewDirectorBasedOnUserAuthStatus;
