function openModal(title, description) {
    document.getElementById('modal-title').textContent = title;
    document.getElementById('modal-description').textContent = description;
    document.getElementById('modal').style.display = 'block';
  }
  
  document.querySelector('.close-button').addEventListener('click', function () {
    document.getElementById('modal').style.display = 'none';
  });
  
  window.addEventListener('click', function (e) {
    if (e.target === document.getElementById('modal')) {
      document.getElementById('modal').style.display = 'none';
    }
  });
  