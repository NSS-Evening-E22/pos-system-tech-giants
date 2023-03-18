import clearDom from '../../../helpers/clearDom';
import renderToDom from '../../../helpers/renderToDom';

const homeLoggedIn = () => {
  clearDom();

  const domString = '<h1>Welcome, USER </h1>';
  renderToDom('#welcome', domString);

  const btnString = `
    <button class="btn btn-success btn-lg mb-4" id="view-orders">View Orders</button>
    <button class="btn btn-info btn-lg mb-4" id="create-order">Create an Order</button>
    <button class="btn btn-warning btn-lg mb-4" id="view-revenue">View Revenue</button>
  `;
  renderToDom('#add-button', btnString);
};

export default homeLoggedIn;
