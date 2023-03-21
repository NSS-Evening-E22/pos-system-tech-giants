const clearDom = () => {
  document.querySelector('#welcome').innerHTML = '';
  document.querySelector('#add-button').innerHTML = '';
  document.querySelector('#form-container').innerHTML = '';
  document.querySelector('#revenue-container').innerHTML = '';
  // document.querySelector('#view').innerHTML = '';
  document.querySelector('#order-container').innerHTML = '';
  // document.querySelector('#cards').innerHTML = '';
  // document.querySelector('#filter-buttons').innerHTML = '';
};

export default clearDom;
