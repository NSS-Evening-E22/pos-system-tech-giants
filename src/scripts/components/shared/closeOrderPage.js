import clearDom from '../../helpers/clearDom';
import selectPaymentTypesForm from '../closeOrderForm';

const closeOrderPage = () => {
  clearDom();

  selectPaymentTypesForm();
};

export default closeOrderPage;
