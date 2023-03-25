import clearDom from '../../../helpers/clearDom';
import renderToDom from '../../../helpers/renderToDom';

const viewRevenue = (revenueData) => {
  clearDom();
  let callInCount = 0;
  let walkInCount = 0;
  let cashPaymentCount = 0;
  let creditPaymentCount = 0;
  let mobilePaymentCount = 0;
  let totalRevenue = revenueData.reduce((a, b) => a + b.total_amount, 0); // fetch from database
  let totalTips = revenueData.reduce((a, b) => a + b.tip_amount, 0); // fetch from database

  revenueData.forEach((data) => {
    totalRevenue += data.totalRevenue;
    totalTips += data.totalTips;
    if (data.order_type === 'in-person') {
      callInCount += 1;
    } else if (data.order_type === 'in-person') {
      walkInCount += 1;
    } else if (data.payment_type === 'Cash') {
      cashPaymentCount += 1;
    } else if (data.payment_type === 'Debit Card') {
      creditPaymentCount += 1;
    } else if (data.payment_type === 'Credit Card') {
      mobilePaymentCount += 1;
    }
  });

  const domString = `
    <div class="revenue">
      <h1>REVENUE</h1>
      <br>
      <h1>TOTAL REVENUE: $${totalRevenue.toFixed(2)}</h1>
      <br>
      <p>TOTAL TIPS: $${totalTips.toFixed(2)}</p>
      <p>TOTAL CALL IN ORDERS: ${callInCount}</p>
      <p>TOTAL WALK IN ORDERS: ${walkInCount}</p>
      <br>
      <p>PAYMENT TYPES:</p>
      <ul>
        <li>CASH - ${cashPaymentCount}</li>
        <li>CREDIT - ${creditPaymentCount}</li>
        <li>MOBILE - ${mobilePaymentCount}</li>
      </ul>
    </div>
  `;

  renderToDom('#revenue-container', domString);
};

export default viewRevenue;
