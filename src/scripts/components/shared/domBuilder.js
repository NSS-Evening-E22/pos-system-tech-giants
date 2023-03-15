import renderToDom from '../../helpers/renderToDom';

const domBuilder = () => {
  const domString = `
  <div id="navigation"></div>`;

  renderToDom('#app', domString);
};

export default domBuilder;
