import renderToDom from '../../helpers/renderToDom';

const selectOrdTypes = (typeId) => {
  let domString = `<label for="order">Select an Order</label>
    <select class="form-control" id="order_id" required>
    <option value="">Select an Order</option>`;
  // changed all Authors to Order, will need to update differntly than need be.

  getOrderTypes().then((ordTypesArray) => {
    ordTypesArray.forEach((types) => {
      domString += `
          <option 
            value="${types.firebaseKey}" 
            ${typeId === types.firebaseKey ? 'selected' : ''}>
              ${types.first_name} ${types.last_name}
          </option>`;
    });

    domString += '</select>';

    renderToDom('#select-ordertypes', domString);
  });
};

export default selectOrdTypes;
