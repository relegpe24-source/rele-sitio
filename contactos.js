/* Envía los datos de contacto a la hoja de Google de R.E.L.E. (y de ahí te llega un correo).
   Pega aquí la URL de tu Apps Script (termina en /exec). Mientras esté vacía, no se envía nada. */
var RELE_CONTACTOS_URL = 'https://script.google.com/macros/s/AKfycbw-jLwNj9x13EgJoDmdjpzZcxEX1AQ3cW0izmjHr38ZL0YT4AD-HZkUOapgPTcLA-7G/exec';

function enviarContacto(datos) {
  if (!RELE_CONTACTOS_URL) return;
  try {
    fetch(RELE_CONTACTOS_URL, {
      method: 'POST',
      mode: 'no-cors',
      keepalive: true,
      headers: { 'Content-Type': 'text/plain;charset=utf-8' },
      body: JSON.stringify(datos)
    }).catch(function () {});
  } catch (e) {}
}
