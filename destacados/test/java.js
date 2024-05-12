document.addEventListener('DOMContentLoaded', function () {
  const tarjetasPrincipales = document.querySelectorAll('.main');

  tarjetasPrincipales.forEach(tarjeta => {
    tarjeta.addEventListener('click', () => {
      tarjetasPrincipales.forEach(e => {
        if (e !== tarjeta) {
          e.querySelector('.more-information').style.display = 'none';
        }
      });
      const detalles = tarjeta.querySelector('.more-information');
      if (detalles.style.display === 'block') {
        detalles.style.display = 'none';
      } else {
        detalles.style.display = 'block';
      }
    });
  });
});
