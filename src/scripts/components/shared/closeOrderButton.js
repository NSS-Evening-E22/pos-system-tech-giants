import renderToDom from '../../helpers/renderToDom';

const closeOrderButton = () => {
  const domString = '<button id="closeOrder-button" class="btn btn-danger">Close Order</button>';

  renderToDom('#add-button', domString);
};

export default closeOrderButton;
