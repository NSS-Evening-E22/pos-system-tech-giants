import renderToDom from '../../../helpers/renderToDom';
import createOrderBtn from '../../createOrderBtn';

const homeLoggedIn = (user) => {
  // clearDom();
  const domString = `<h1>Welcome ${user.name}</h1>
    <button>View Orders</button>
    ${createOrderBtn()}
    <button>View Revenue</button>`;
  renderToDom('#app', domString);
};

export default homeLoggedIn;
