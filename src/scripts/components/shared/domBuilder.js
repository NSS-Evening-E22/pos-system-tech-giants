import renderToDom from '../../helpers/renderToDom';

const domBuilder = () => {
  const domString = `
  <div id="navigation"></div>
  <div id="welcome"></div>
  <div id="main-container">
    <div id="form-container"></div>
    <div id="order-container"></div>
    <div id="price-total"></div>
    <div id="item-container"></div>
    <div id="add-button"></div>
    <div id="revenue-container"></div>
  </div>`;

  renderToDom('#app', domString);
};

export default domBuilder;
