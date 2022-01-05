const sideMenu = document.querySelector('aside');
const menuBtn = document.getElementById('menu-btn');
const close = document.getElementById('close-btn');
const themeToggler = document.getElementById('themeToggle');

//show SideBar
menuBtn.addEventListener('click', () => {
  sideMenu.style.display = 'block';
});

// close SideBar
close.addEventListener('click', () => {
  sideMenu.style.display = 'none';
});

// Change Theme
themeToggler.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme-variables');
  themeToggler.querySelector('span:nth-child(1)').classList.toggle('active');
  themeToggler.querySelector('span:nth-child(2)').classList.toggle('active');
});

Orders.forEach((order) => {
  const tr = document.createElement('tr');
  const trContent = `<tr>
    <td>${order.productName}</td>
    <td>${order.productNumber}</td>
    <td>${order.paymentStatus}</td> 
    <td class="${
      order.shipping === 'Declined'
        ? 'danger'
        : order.shipping === 'pending'
        ? 'warning'
        : 'primary'
    }">${order.shipping}</td>
    <td class="primary">Details</td>
  </tr>`;
  tr.innerHTML = trContent;
  document.querySelector('table tbody').appendChild(tr);
});
