import renderToDom from '../../helpers/renderToDom';
import clearDom from '../../helpers/clearDom';

const addEditorderForm = (obj = {}) => {
  clearDom();

  const domForm = `
  <form id="${obj.firebaseKey ? `update-form--${obj.firebaseKey}` : 'submit-order'}>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Order Name</label>
    <input type="order-name" class="form-control" id="order-name" aria-describedby="emailHelp" value="${obj.name || ''}">
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Customer Phone</label>
    <input type="password" class="form-control" id="customer-phone" value="${obj.phone || ''}">
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Customer Email</label>
    <input type="password" class="form-control" id="customer-email" value="${obj.email || ''}">
  </div>
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1">
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>`;

  renderToDom('#app', domForm);
};

export default addEditorderForm;
