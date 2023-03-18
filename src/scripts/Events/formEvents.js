import getItems from '../../api/itemData';

const formEvents = () => {
  document.querySelector('#main-container').addEventListener('submit', (e) => {
    e.preventDefault();
    if (e.target.id.includes('edit-item')) {
      const [, firebaseKey] = e.target.id.split('--');
      const payload = {
        name: document.querySelector('name').value,
        price: document.querySelector('#price').value,
        firebaseKey,
      };

      (payload).then(() => {
        getItems().then(showItems);
      });
    }
  });
};

export default formEvents;
