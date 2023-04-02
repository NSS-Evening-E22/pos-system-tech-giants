import clearDom from '../../../helpers/clearDom';
import renderToDom from '../../../helpers/renderToDom';

const emptyOrders = () => {
  const domString = '<h2>No Data</h2>';
  renderToDom('#order-container', domString);
};

const viewAllOrders = (array) => {
  clearDom();

  let domString = '';
  array.forEach((orders) => {
    domString += `
    <div class="card">
      <div class="card-body">
        <h5>${orders.order_name}</h5>
        <p class="card-text">${orders.customer_email}</p>
        <hr>
        <i class ='fas fa-forward' id="details-card--${orders.firebaseKey}" class="btn btn-info">Details</i>
        <i class ='fas fa-pause' id="edit-card--${orders.firebaseKey}" class="btn">Edit</i>
        <i class ='fas fa-redo' id="delete-card--${orders.firebaseKey}" class="btn but-danger">Delete</i>
      </div>
    </div>`;
  });
  renderToDom('#order-container', domString);
};

const viewSingleOrder = () => {
  clearDom();
};

export { emptyOrders, viewAllOrders, viewSingleOrder };
