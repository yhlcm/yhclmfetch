// onmessage = evt => {
//     postMessage(`Saludos a ${evt.data.nombre1} y a ${evt.data.nombre2}`);
//   };


/**
 * @param {MessageEvent} evt mensaje recibido de la interfaz gráfica. La
 * property data tiene los datos enviados con hilo.postMessage(modelo). */
onmessage = evt => {
  // Calcula y envía de regreso la respuesta a la interfaz gráfica.
  // @ts-ignore
  var multiplicacion=parseInt(evt.data.numero1) * parseInt(evt.data.numero2);
  postMessage(`El resultado de la multiplicacion de  ${evt.data.numero1} X ${evt.data.numero2} es ` +  multiplicacion);
};
