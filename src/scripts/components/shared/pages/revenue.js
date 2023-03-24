import clearDom from '../../../helpers/clearDom';
import renderToDom from '../../../helpers/renderToDom';

const viewRevenue = (revenueData) => {
  clearDom();
  let totalRevenue = 0; // fetch from database
  let totalTips = 0; // fetch from database
  let totalCallInOrders = 0; // fetch from database
  let totalWalkInOrders = 0; // fetch from database
  let cashPayments = 0; // fetch from database
  let creditPayments = 0; // fetch from database
  let mobilePayments = 0; // fetch from database

  revenueData.forEach((data) => {
    totalRevenue += data.totalRevenue;
    totalTips += data.totalTips;
    totalCallInOrders += data.totalCallInOrders;
    totalWalkInOrders += data.totalWalkInOrders;
    cashPayments += data.cashPayments;
    creditPayments += data.creditPayments;
    mobilePayments += data.mobilePayments;
  });

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
