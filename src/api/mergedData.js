import { getSingleOrder } from './orderData';
import { viewSingleOrder } from '../scripts/components/shared/pages/viewOrders';

const getOrderDetails = (firebaseKey) => {
  getSingleOrder(firebaseKey).then(viewSingleOrder());
};

export default getOrderDetails;
