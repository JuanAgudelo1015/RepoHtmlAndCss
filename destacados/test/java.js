/**Funcion addEventListener parametros
 * - tipo de evento 
 * - function que se ejecutara cuando ocurra el evento
 * -  Uso de captura
 */
document.addEventListener('DOMContentLoaded', function () {
  const tarjetasPrincipales = document.querySelectorAll('.main');

  tarjetasPrincipales.forEach(tarjeta => {
    /**Itera sobre todas las tarjetas hasta que hagan click en una */
    tarjeta.addEventListener('click', () => {
      // Vuelve y hace un forEach ah todas las main para comparar si la tarjeta 
      // Encontrada es distinta de las que hay en el segundo forEach, si si es distinta no las muestra
      tarjetasPrincipales.forEach(e => { 
        if (e !== tarjeta) {
          e.querySelector('.more-information').style.display = 'none';
        }
      });
      // Mostrar o ocultar los detalles de la tarjeta seleccionada
      const detalles = tarjeta.querySelector('.more-information');
      /**El operador ternario tiene 3 parametros
       *    */
      detalles.style.display = detalles.style.display === 'block' ? 'none' : 'block';
    });
  });
});