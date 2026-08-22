document.addEventListener('DOMContentLoaded', () => {
  const menu = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav');
  if (menu && nav) menu.addEventListener('click', () => { nav.classList.toggle('open'); menu.textContent = nav.classList.contains('open') ? '×' : '☰'; });

  const serviceImage = document.getElementById('service-image');
  document.querySelectorAll('.service-row').forEach(row => row.addEventListener('click', () => {
    document.querySelectorAll('.service-row').forEach(item => item.classList.remove('active'));
    row.classList.add('active');
    if (serviceImage && row.dataset.image) serviceImage.src = row.dataset.image;
  }));

  const success = document.getElementById('success');
  if (success && new URLSearchParams(window.location.search).get('sent') === '1') success.classList.add('show');
});
