import renderToDom from '../../helpers/renderToDom';
import clearDom from '../../helpers/clearDom';

const addEditOrderForm = (obj = {}) => {
  clearDom();

  const domForm = `
  <form id="${obj.firebaseKey ? `update-form--${obj.firebaseKey}` : 'submit-order'}>
    <div class="mb-3">
      <label for="order-name" class="form-label">Order Name</label>
      <input type="text" class="form-control" id="order-name" value="${obj.name || ''}">
    </div>
    <div class="mb-3">
      <label for="customer-phone" class="form-label">Customer Phone Number</label>
      <input type="tel" class="form-control" id="customer-phone" value="${obj.phone || ''}">
    </div>
    <div class="mb-3">
      <label for="customer-email" class="form-label">Customer Email Address</label>
      <input type="email" class="form-control" id="customer-email" value="${obj.email || ''}">
    </div>
    <div class="mb-3">
      <label for="order-type" class="form-label">Order Type</label>
      <select class="form-select" id="order-type">
        <option value=""${!obj.orderType ? ' selected' : ''}>Select an option</option>
        <option value="phone"${obj.orderType === 'phone' ? ' selected' : ''}>Phone</option>
        <option value="in-person"${obj.orderType === 'in-person' ? ' selected' : ''}>In-person</option>
      </select>
    </div>
    <button type="submit" id="submit-order--${obj.firebaseKey}" class="btn btn-primary">Submit</button>
  </form>`;

  renderToDom('#form-container', domForm);
};

export default addEditOrderForm;
