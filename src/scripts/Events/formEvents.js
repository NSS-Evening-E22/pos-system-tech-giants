const formEvents = (user) => {
  document.querySelector('#main-container').addEventListener('submit', (e) => {
    e.preventDefault();
    if (e.target.id.includes('update-book')) {
      const [, firebaseKey] = e.target.id.split('--');
      const payload = {
        name: document.querySelector('name').value,
        price: document.querySelector('#price').value,
        firebaseKey,
      };

      (payload).then(() => {
        (user.uid).then();
      });
    }
  });
};

export default formEvents;
