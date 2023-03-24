import clearDom from '../../../helpers/clearDom';
import renderToDom from '../../../helpers/renderToDom';
// import renderOrderDetailsPage from './orderReview';

const emptyOrders = () => {
  const domString = '<h2>No Data</h2>';
  renderToDom('#order-container', domString);
};

const viewAllOrders = (array) => {
  clearDom();

  let domString = '';
  array.forEach((order) => {
    domString += `
    <div class="card">
      <div class="card-body">
        <h5>${order.order_name}</h5>
        <p class="card-text">${order.order_description}</p>
        <hr>
        <i class ='fas fa-forward' id="details-card--${order.firebaseKey}" class="btn btn-info">Details</i>
        <i class ='fas fa-pause' id="edit-card--${order.firebaseKey}" class="btn">Edit</i>
        <i class ='fas fa-redo' id="delete-card--${order.firebaseKey}" class="btn but-danger">Delete</i>
      </div>
    </div>`;
  });
  renderToDom('#order-container', domString);
};

const viewSingleOrder = () => {
  // const totalPrice = 'priceTotaled(array)';
  clearDom();
  const domString = ' <h1> total </h1>';

  renderToDom(domString, '#order-container');
};

export { emptyOrders, viewAllOrders, viewSingleOrder };
