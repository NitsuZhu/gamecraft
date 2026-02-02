const popup = document.getElementById('popup');
const openPopupBtn = document.getElementById('openPopup');

openPopupBtn.addEventListener('click', () => {
  popup.style.display = 'flex'; 
});

function closePopup() {
  popup.style.display = 'none'; 
}

function openPage(url) {
  window.location.href = url;
}