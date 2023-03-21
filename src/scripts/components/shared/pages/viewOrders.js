import clearDom from '../../../helpers/clearDom';
import renderToDom from '../../../helpers/renderToDom';

const emptyOrders = () => {
  const domString = '<h2>No Data</h2>';
  renderToDom('#order-container', domString);
};

const viewAllOrders = (array) => {
  clearDom();

  let domString = '';
  array.forEach((item) => {
    domString += `
    <div class="card">
      <div class="card-body">
        <h5>${item.order_name}</h5>
        <p class="card-text">${item.order_description}</p>
        <hr>
        <i class ='fas fa-forward' id="details-card--${item.firebaseKey}' class="btn btn-info">Details</i>
        <i class ='fas fa-pause' id="edit-card--${item.firebaseKey}' class="btn">Edit</i>
        <i class ='fas fa-redo' id="delete-card--${item.firebaseKey}' class="btn but-danger">Delete</i>
      </div>
    </div>`;
  });
  renderToDom('#order-container', domString);
};

const viewSingleOrder = (obj) => {
  clearDom();

  const orderString = `
    <div class="card">
      <div class="card-body">
      <h5>${obj.order_name}</h5>
        <p class="card-text">${obj.order_description}</p>
        <hr>
        <i id="details-card--${obj.firebaseKey}' class="btn btn-info">Details</i>
        <i id="edit-card--${obj.firebaseKey}' class="btn">Edit</i>
        <i id="delete-card--${obj.firebaseKey}' class="btn but-danger">Delete</i>
      </div>
    </div>`;

  renderToDom('#order-container', orderString);
};

export { emptyOrders, viewAllOrders, viewSingleOrder };
