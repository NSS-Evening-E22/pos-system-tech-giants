import clearDom from '../../../helpers/clearDom';
import renderToDom from '../../../helpers/renderToDom';

const priceTotaled = (array) => {
  let total = 0;
  array.forEach((item) => {
    total += item.itemPrice;
  });
  return total.toFixed(1);
};

const renderOrderDetailsPage = (array, orderName) => {
  const totalPrice = priceTotaled(array);
  clearDom();
  const domString = `
  <h1 class="mt-5">Total: $${totalPrice}</h1>
    <div id="itemCards" class="d-flex flex-column align-items-center "></div>
    <div id="itemDetailsButtons" class="d-flex justify-content-center gap-3 mt-4">
      <button id="addItemButton--${orderName}" class="btn btn-lg btn-warning">Add Item</button>
      <button id="goToPaymentButton--${orderName}" class="btn btn-lg btn-primary">Go To Payment</button>
    </div>
  `;
  renderToDom(domString, '#price-total');
};

export default renderOrderDetailsPage;
