const myClose = document.getElementById('closeModal');
const myImage = document.getElementById('myImg');
const myModalImg = document.getElementById('myModalImg');
const myModal = document.getElementById('myModal');
const routeImage = document.getElementById('RouteImage');

myImage.addEventListener('click', () => {
  myModal.style.display = 'block';
  myModalImg.src = routeImage.src;
  myModalImg.alt = routeImage.alt;
});

myClose.addEventListener('click', () => {
  myModal.style.display = 'none';
});
