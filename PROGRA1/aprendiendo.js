function mi_primer_algoritmo() {
    var mensaje = "Hola Mundo";
    alert(mensaje);
}
function decimalABinario(binario) {
  // Validación: solo permitir dígitos binarios
  if (!/^[01]+$/.test(binario)) {
    throw new Error("Entrada inválida: solo se permiten dígitos binarios (0 y 1).");
  }

  let decimal = 0;
  const longitud = binario.length;

  for (let i = 0; i < longitud; i++) {
    const digito = parseInt(binario[i], 10);
    const exponente = longitud - 1 - i;
    decimal += digito * Math.pow(2, exponente);
  }

  return decimal;
}


// Ejemplo
let bin1 = "1010";
let bin2 = "1101";
console.log("Suma en decimal:", sumarBinarios(bin1, bin2));