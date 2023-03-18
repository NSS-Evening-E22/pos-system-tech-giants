import clearDom from '../../../helpers/clearDom';
import renderToDom from '../../../helpers/renderToDom';

const emptyOrders = () => {
  const domString = '<h2>No Data</h2>';
  renderToDom('#order-container', domString);
};

const viewAllOrders = () => {
  clearDom();

  let domString = '';
  Array.forEach((item) => {
    domString += `
    <div class="card">
      <div class="card-body">
        <h5>${item.order_name}</h5>
        <p class="card-text">${item.order_description}</p>
        <hr>
        <i id="details-card-btn--${item.firebaseKey}' class="btn btn-info">Details</i>
        <i id="edit-card-btn--${item.firebaseKey}' class="btn">Edit</i>
        <i id="delete-card-btn--${item.firebaseKey}' class="btn but-danger">Delete</i>
      </div>
    </div>`;
  });
  renderToDom('#order-container', domString);
};

export { emptyOrders, viewAllOrders };