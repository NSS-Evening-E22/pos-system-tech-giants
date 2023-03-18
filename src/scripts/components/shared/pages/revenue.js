import clearDom from '../../../helpers/clearDom';
import renderToDom from '../../../helpers/renderToDom';

const viewRevenue = () => {
  clearDom();
  const totalRevenue = 0; // fetch from database
  const totalTips = 0; // fetch from database
  const totalCallInOrders = 0; // fetch from database
  const totalWalkInOrders = 0; // fetch from database
  const cashPayments = 0; // fetch from database
  const creditPayments = 0; // fetch from database
  const mobilePayments = 0; // fetch from database

  const domString = `
    <div class="revenue">
      <h1>REVENUE</h1>
      <br>
      <h1>TOTAL REVENUE: $${totalRevenue.toFixed(2)}</h1>
      <br>
      <p>TOTAL TIPS: $${totalTips.toFixed(2)}</p>
      <p>TOTAL CALL IN ORDERS: ${totalCallInOrders}</p>
      <p>TOTAL WALK IN ORDERS: ${totalWalkInOrders}</p>
      <br>
      <p>PAYMENT TYPES:</p>
      <ul>
        <li>CASH - ${cashPayments}</li>
        <li>CREDIT - ${creditPayments}</li>
        <li>MOBILE - ${mobilePayments}</li>
      </ul>
    </div>
  `;

  renderToDom('#revenue-container', domString);
};

export default viewRevenue;
