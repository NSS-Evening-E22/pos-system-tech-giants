import renderToDom from '../../helpers/renderToDom';

const selectOrdTypes = (typeId) => {
  let domString = `<label for="author">Select an Author</label>
    <select class="form-control" id="author_id" required>
    <option value="">Select an Author</option>`;

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
