import renderToDOM from '../helpers/renderToDom';

const selectPaymentTypesForm = (obj = {}) => {
  const domString = `<form id="${obj.firebaseKey ? `update-form--${obj.firebaseKey}` : 'submit-payment'}>
  <div class="rt_form-text">Payment Type</div>
  <div class="rt_payment-types">
  <select class="form-select" id="rt_payment-input">
    <option selected>Select Payment Type</option>
    <option value="Visa">Visa</option>
    <option value="MasterCard">MasterCard</option>
    <option value="AmericanExpress">American Express</option>
    <option value="PayPal">PayPal</option>
  </select>
</div>
<div class="rt_tip-input">
<div class="rt_form-text">Tip Amount</div>
  <span class="input-group-text">$</span>
  <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)">
  <span class="input-group-text">.00</span>
  </ hr>
  <button id="closeOrder-button" class="btn btn-danger">Close Order</button>
</div>
</form>`;
  renderToDOM(domString, '#form-container');
};

export default selectPaymentTypesForm;

// ${inputTipAmount.value}
