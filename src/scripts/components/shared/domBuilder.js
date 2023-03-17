import renderToDom from '../../helpers/renderToDom';

const domBuilder = () => {
  const domString = `
  <div id="navigation"></div>
    <div id="form-container></div>
    
    `;

  renderToDom('#app', domString);
};

export default domBuilder;
