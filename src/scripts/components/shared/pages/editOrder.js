import renderToDom from '../../../helpers/renderToDom';
import clearDom from '../../../helpers/clearDom';

const editOrderForm = (obj = {}) => {
  clearDom();
  const domString = `
  <form id="${obj.firebaseKey ? `update-order--${obj.firebaseKey}` : 'edit-form'}" class="mb-4">
  <div class="form-group">
    <label for="title">Item Name</label>
    <input type="text" class="form-control" id="item-name" aria-describedby="itemName" placeholder="Enter Item Name" value="${obj.name || ''}" required>
  </div>
  <div class="form-group">
    <label for="description">Description</label>
    <textarea class="form-control" placeholder="Item Price" id="item-price" style="height: 100px">${obj.price || ''}</textarea>
  </div>
  <button type="submit" class="btn btn-primary mt-3">Add/Edit Item</button>
  </form>
  `;

  renderToDom('#form-container', domString);
};

export default editOrderForm;
