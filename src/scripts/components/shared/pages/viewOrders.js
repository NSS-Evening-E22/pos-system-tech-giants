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
        ${orderDetailsBtn()}
        ${editOrderBtn()}
        ${deleteOrderBtn()}
      </div>
    </div>`;
  });
  renderToDom('#order-container', domString);
};

export { emptyOrders, viewAllOrders };
