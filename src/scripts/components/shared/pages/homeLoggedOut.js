import renderToDom from '../../../helpers/renderToDom';
import loginButton from '../../loginButton';
import logo from '../../../../../documentation/logo.png';

const homeLoggedOut = () => {
  document.querySelector('#app').innerHTML = '';
  const domString = `
  <div id="hello"><h1>Hello</h1></div>
  <img src=${logo} alt="" width= 200px>
  <div id="login-button"></div>
  `;
  renderToDom('#app', domString);
  loginButton();
};

export default homeLoggedOut;
