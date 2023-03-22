import clearDom from '../../helpers/clearDom';
import renderToDom from '../../helpers/renderToDom';
import selectPaymentTypesForm from '../closeOrderForm';

const closeOrderPage = () => {
  clearDom();

  selectPaymentTypesForm();

  closeOrderButton();

  renderToDom('#main-container', closeOrderPage);
};

export default closeOrderPage;
