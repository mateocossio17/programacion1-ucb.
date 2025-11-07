// Elementos del DOM para Ejercicios (1-25)
const canvas = document.getElementById('matrixCanvas');
const fillButton = document.getElementById('fillBtn');
const clearButton = document.getElementById('clearBtn');
const ejercicio1Btn = document.getElementById('ejercicio1Btn');
const ejercicio2Btn = document.getElementById('ejercicio2Btn');
const ejercicio3Btn = document.getElementById('ejercicio3Btn');
const ejercicio4Btn = document.getElementById('ejercicio4Btn');
const ejercicio5Btn = document.getElementById('ejercicio5Btn');
const ejercicio6Btn = document.getElementById('ejercicio6Btn');
const ejercicio7Btn = document.getElementById('ejercicio7Btn');
const ejercicio8Btn = document.getElementById('ejercicio8Btn');
const ejercicio9Btn = document.getElementById('ejercicio9Btn');
const ejercicio10Btn = document.getElementById('ejercicio10Btn');
const ejercicio11Btn = document.getElementById('ejercicio11Btn');
const ejercicio12Btn = document.getElementById('ejercicio12Btn');
const ejercicio13Btn = document.getElementById('ejercicio13Btn');
const ejercicio14Btn = document.getElementById('ejercicio14Btn');
const ejercicio15Btn = document.getElementById('ejercicio15Btn');
const ejercicio16Btn = document.getElementById('ejercicio16Btn');
const ejercicio17Btn = document.getElementById('ejercicio17Btn');
const ejercicio18Btn = document.getElementById('ejercicio18Btn');
const ejercicio19Btn = document.getElementById('ejercicio19Btn');
const ejercicio20Btn = document.getElementById('ejercicio20Btn');
const ejercicio21Btn = document.getElementById('ejercicio21Btn');
const ejercicio22Btn = document.getElementById('ejercicio22Btn');
const ejercicio23Btn = document.getElementById('ejercicio23Btn');
const ejercicio24Btn = document.getElementById('ejercicio24Btn');
const ejercicio25Btn = document.getElementById('ejercicio25Btn');


// Elementos del DOM para Ejercicios (26-88)
const ejercicio26Btn = document.getElementById('ejercicio26Btn');
const ejercicio27Btn = document.getElementById('ejercicio27Btn');
const ejercicio28Btn = document.getElementById('ejercicio28Btn');
const ejercicio29Btn = document.getElementById('ejercicio29Btn');
const ejercicio30Btn = document.getElementById('ejercicio30Btn');
const ejercicio31Btn = document.getElementById('ejercicio31Btn');
const ejercicio32Btn = document.getElementById('ejercicio32Btn');
const ejercicio33Btn = document.getElementById('ejercicio33Btn');
const ejercicio34Btn = document.getElementById('ejercicio34Btn');
const ejercicio35Btn = document.getElementById('ejercicio35Btn');
const ejercicio36Btn = document.getElementById('ejercicio36Btn');
const ejercicio37Btn = document.getElementById('ejercicio37Btn');
const ejercicio38Btn = document.getElementById('ejercicio38Btn');
const ejercicio39Btn = document.getElementById('ejercicio39Btn');
const ejercicio40Btn = document.getElementById('ejercicio40Btn');
const ejercicio41Btn = document.getElementById('ejercicio41Btn');
const ejercicio42Btn = document.getElementById('ejercicio42Btn');
const ejercicio43Btn = document.getElementById('ejercicio43Btn');
const ejercicio44Btn = document.getElementById('ejercicio44Btn');
const ejercicio45Btn = document.getElementById('ejercicio45Btn');
const ejercicio46Btn = document.getElementById('ejercicio46Btn');
const ejercicio47Btn = document.getElementById('ejercicio47Btn');
const ejercicio48Btn = document.getElementById('ejercicio48Btn');
const ejercicio49Btn = document.getElementById('ejercicio49Btn');
const ejercicio50Btn = document.getElementById('ejercicio50Btn');
const ejercicio51Btn = document.getElementById('ejercicio51Btn');
const ejercicio52Btn = document.getElementById('ejercicio52Btn');
const ejercicio53Btn = document.getElementById('ejercicio53Btn');
const ejercicio54Btn = document.getElementById('ejercicio54Btn');
const ejercicio55Btn = document.getElementById('ejercicio55Btn');
const ejercicio56Btn = document.getElementById('ejercicio56Btn');
const ejercicio57Btn = document.getElementById('ejercicio57Btn');
const ejercicio58Btn = document.getElementById('ejercicio58Btn');
const ejercicio59Btn = document.getElementById('ejercicio59Btn');
const ejercicio60Btn = document.getElementById('ejercicio60Btn');
const ejercicio61Btn = document.getElementById('ejercicio61Btn');
const ejercicio62Btn = document.getElementById('ejercicio62Btn');
const ejercicio63Btn = document.getElementById('ejercicio63Btn');
const ejercicio64Btn = document.getElementById('ejercicio64Btn');
const ejercicio65Btn = document.getElementById('ejercicio65Btn');
const ejercicio66Btn = document.getElementById('ejercicio66Btn');
const ejercicio67Btn = document.getElementById('ejercicio67Btn');
const ejercicio68Btn = document.getElementById('ejercicio68Btn');
const ejercicio69Btn = document.getElementById('ejercicio69Btn');
const ejercicio70Btn = document.getElementById('ejercicio70Btn');
const ejercicio71Btn = document.getElementById('ejercicio71Btn');
const ejercicio72Btn = document.getElementById('ejercicio72Btn');
const ejercicio73Btn = document.getElementById('ejercicio73Btn');
const ejercicio74Btn = document.getElementById('ejercicio74Btn');
const ejercicio75Btn = document.getElementById('ejercicio75Btn');
const ejercicio76Btn = document.getElementById('ejercicio76Btn');
const ejercicio77Btn = document.getElementById('ejercicio77Btn');
const ejercicio78Btn = document.getElementById('ejercicio78Btn');
const ejercicio79Btn = document.getElementById('ejercicio79Btn');
const ejercicio80Btn = document.getElementById('ejercicio80Btn');
const ejercicio81Btn = document.getElementById('ejercicio81Btn');
const ejercicio82Btn = document.getElementById('ejercicio82Btn');
const ejercicio83Btn = document.getElementById('ejercicio83Btn');
const ejercicio84Btn = document.getElementById('ejercicio84Btn');
const ejercicio85Btn = document.getElementById('ejercicio85Btn');
const ejercicio86Btn = document.getElementById('ejercicio86Btn');
const ejercicio87Btn = document.getElementById('ejercicio87Btn');
const ejercicio88Btn = document.getElementById('ejercicio88Btn');


// Contexto de dibujo
const context = canvas.getContext('2d');

// Instancia de la CLASS matrix (Se asume una matriz de 10x10)
const matrix = new Matrix(10, 10, 0);

// Inicializa el canvas y dibuja la matriz
function initializeCanvas() {
  drawMatrix();
  window.addEventListener('resize', drawMatrix);
  fillButton.addEventListener('click', fillMatrix);
  clearButton.addEventListener('click', clearCanvas);
  
  // LISTENERS EJERCICIOS (1-25)
  ejercicio1Btn.addEventListener('click', ejercicio1BtnApp);
  ejercicio2Btn.addEventListener('click', ejercicio2BtnApp);
  ejercicio3Btn.addEventListener('click', ejercicio3BtnApp);
  ejercicio4Btn.addEventListener('click', ejercicio4BtnApp);
  ejercicio5Btn.addEventListener('click', ejercicio5BtnApp);
  ejercicio6Btn.addEventListener('click', ejercicio6BtnApp);
  ejercicio7Btn.addEventListener('click', ejercicio7BtnApp);
  ejercicio8Btn.addEventListener('click', ejercicio8BtnApp);
  ejercicio9Btn.addEventListener('click', ejercicio9BtnApp);
  ejercicio10Btn.addEventListener('click', ejercicio10BtnApp);
  ejercicio11Btn.addEventListener('click', ejercicio11BtnApp);
  ejercicio12Btn.addEventListener('click', ejercicio12BtnApp);
  ejercicio13Btn.addEventListener('click', ejercicio13BtnApp);
  ejercicio14Btn.addEventListener('click', ejercicio14BtnApp);
  ejercicio15Btn.addEventListener('click', ejercicio15BtnApp);
  ejercicio16Btn.addEventListener('click', ejercicio16BtnApp);
  ejercicio17Btn.addEventListener('click', ejercicio17BtnApp);
  ejercicio18Btn.addEventListener('click', ejercicio18BtnApp);
  ejercicio19Btn.addEventListener('click', ejercicio19BtnApp);
  ejercicio20Btn.addEventListener('click', ejercicio20BtnApp);
  ejercicio21Btn.addEventListener('click', ejercicio21BtnApp);
  ejercicio22Btn.addEventListener('click', ejercicio22BtnApp);
  ejercicio23Btn.addEventListener('click', ejercicio23BtnApp);
  ejercicio24Btn.addEventListener('click', ejercicio24BtnApp);
  ejercicio25Btn.addEventListener('click', ejercicio25BtnApp);

  // LISTENERS EJERCICIOS (26-88)
  ejercicio26Btn.addEventListener('click', ejercicio26BtnApp);
  ejercicio27Btn.addEventListener('click', ejercicio27BtnApp);
  ejercicio28Btn.addEventListener('click', ejercicio28BtnApp);
  ejercicio29Btn.addEventListener('click', ejercicio29BtnApp);
  ejercicio30Btn.addEventListener('click', ejercicio30BtnApp);
  ejercicio31Btn.addEventListener('click', ejercicio31BtnApp);
  ejercicio32Btn.addEventListener('click', ejercicio32BtnApp);
  ejercicio33Btn.addEventListener('click', ejercicio33BtnApp);
  ejercicio34Btn.addEventListener('click', ejercicio34BtnApp);
  ejercicio35Btn.addEventListener('click', ejercicio35BtnApp);
  ejercicio36Btn.addEventListener('click', ejercicio36BtnApp);
  ejercicio37Btn.addEventListener('click', ejercicio37BtnApp);
  ejercicio38Btn.addEventListener('click', ejercicio38BtnApp);
  ejercicio39Btn.addEventListener('click', ejercicio39BtnApp);
  ejercicio40Btn.addEventListener('click', ejercicio40BtnApp);
  ejercicio41Btn.addEventListener('click', ejercicio41BtnApp);
  ejercicio42Btn.addEventListener('click', ejercicio42BtnApp);
  ejercicio43Btn.addEventListener('click', ejercicio43BtnApp);
  ejercicio44Btn.addEventListener('click', ejercicio44BtnApp);
  ejercicio45Btn.addEventListener('click', ejercicio45BtnApp);
  ejercicio46Btn.addEventListener('click', ejercicio46BtnApp);
  ejercicio47Btn.addEventListener('click', ejercicio47BtnApp);
  ejercicio48Btn.addEventListener('click', ejercicio48BtnApp);
  ejercicio49Btn.addEventListener('click', ejercicio49BtnApp);
  ejercicio50Btn.addEventListener('click', ejercicio50BtnApp);
  ejercicio51Btn.addEventListener('click', ejercicio51BtnApp);
  ejercicio52Btn.addEventListener('click', ejercicio52BtnApp);
  ejercicio53Btn.addEventListener('click', ejercicio53BtnApp);
  ejercicio54Btn.addEventListener('click', ejercicio54BtnApp);
  ejercicio55Btn.addEventListener('click', ejercicio55BtnApp);
  ejercicio56Btn.addEventListener('click', ejercicio56BtnApp);
  ejercicio57Btn.addEventListener('click', ejercicio57BtnApp);
  ejercicio58Btn.addEventListener('click', ejercicio58BtnApp);
  ejercicio59Btn.addEventListener('click', ejercicio59BtnApp);
  ejercicio60Btn.addEventListener('click', ejercicio60BtnApp);
  ejercicio61Btn.addEventListener('click', ejercicio61BtnApp);
  ejercicio62Btn.addEventListener('click', ejercicio62BtnApp);
  ejercicio63Btn.addEventListener('click', ejercicio63BtnApp);
  ejercicio64Btn.addEventListener('click', ejercicio64BtnApp);
  ejercicio65Btn.addEventListener('click', ejercicio65BtnApp);
  ejercicio66Btn.addEventListener('click', ejercicio66BtnApp);
  ejercicio67Btn.addEventListener('click', ejercicio67BtnApp);
  ejercicio68Btn.addEventListener('click', ejercicio68BtnApp);
  ejercicio69Btn.addEventListener('click', ejercicio69BtnApp);
  ejercicio70Btn.addEventListener('click', ejercicio70BtnApp);
  ejercicio71Btn.addEventListener('click', ejercicio71BtnApp);
  ejercicio72Btn.addEventListener('click', ejercicio72BtnApp);
  ejercicio73Btn.addEventListener('click', ejercicio73BtnApp);
  ejercicio74Btn.addEventListener('click', ejercicio74BtnApp);
  ejercicio75Btn.addEventListener('click', ejercicio75BtnApp);
  ejercicio76Btn.addEventListener('click', ejercicio76BtnApp);
  ejercicio77Btn.addEventListener('click', ejercicio77BtnApp);
  ejercicio78Btn.addEventListener('click', ejercicio78BtnApp);
  ejercicio79Btn.addEventListener('click', ejercicio79BtnApp);
  ejercicio80Btn.addEventListener('click', ejercicio80BtnApp);
  ejercicio81Btn.addEventListener('click', ejercicio81BtnApp);
  ejercicio82Btn.addEventListener('click', ejercicio82BtnApp);
  ejercicio83Btn.addEventListener('click', ejercicio83BtnApp);
  ejercicio84Btn.addEventListener('click', ejercicio84BtnApp);
  ejercicio85Btn.addEventListener('click', ejercicio85BtnApp);
  ejercicio86Btn.addEventListener('click', ejercicio86BtnApp);
  ejercicio87Btn.addEventListener('click', ejercicio87BtnApp);
  ejercicio88Btn.addEventListener('click', ejercicio88BtnApp);
}

// Dibuja la matriz en el canvas
function drawMatrix() {
  const width = canvas.width = canvas.clientWidth;
  const height = canvas.height = canvas.clientHeight;
  const cellWidth = width / matrix.cols;
  const cellHeight = height / matrix.rows;

  context.clearRect(0, 0, width, height);
  // Ajustar el tamaño de la fuente basado en el tamaño de la celda
  context.font = `${Math.min(cellWidth, cellHeight) / 3}px Arial`; 
  context.textAlign = 'center';
  context.textBaseline = 'middle';

  for (let row = 0; row < matrix.rows; row++) {
    for (let col = 0; col < matrix.cols; col++) {
      const x = col * cellWidth;
      const y = row * cellHeight;
      const value = matrix.getValue(row, col);

      context.strokeRect(x, y, cellWidth, cellHeight);
      context.fillText(value, x + cellWidth / 2, y + cellHeight / 2);
    }
  }
}

// Llena la matriz con valores aleatorios y la dibuja
function fillMatrix() {
  // Llenar con números aleatorios entre 0 y 9 para visualización simple
  matrix.fillRandom(0, 9); 
  drawMatrix();
}

// Limpia el canvas
function clearCanvas() {
  context.clearRect(0, 0, canvas.width, canvas.height);
}


// FUNCIONES APP EJERCICIOS (1-25)
function ejercicio1BtnApp(){
  matrix.ejercicio1();
  drawMatrix();
}
function ejercicio2BtnApp(){
  matrix.ejercicio2();
  drawMatrix();
}
function ejercicio3BtnApp(){
  matrix.ejercicio3();
  drawMatrix();
}
function ejercicio4BtnApp(){
  matrix.ejercicio4();
  drawMatrix();
}
function ejercicio5BtnApp(){
  matrix.ejercicio5();
  drawMatrix();
}
function ejercicio6BtnApp(){
  matrix.ejercicio6();
  drawMatrix();
}
function ejercicio7BtnApp(){
  matrix.ejercicio7();
  drawMatrix();
}
function ejercicio8BtnApp(){
  matrix.ejercicio8();
  drawMatrix();
}
function ejercicio9BtnApp(){
  matrix.ejercicio9();
  drawMatrix();
}
function ejercicio10BtnApp(){
  matrix.ejercicio10();
  drawMatrix();
}
function ejercicio11BtnApp(){
  matrix.ejercicio11();
  drawMatrix();
}
function ejercicio12BtnApp(){
  matrix.ejercicio12();
  drawMatrix();
}
function ejercicio13BtnApp(){
  matrix.ejercicio13();
  drawMatrix();
}
function ejercicio14BtnApp(){
  matrix.ejercicio14();
  drawMatrix();
}
function ejercicio15BtnApp(){
  matrix.ejercicio15();
  drawMatrix();
}
function ejercicio16BtnApp(){
  matrix.ejercicio16();
  drawMatrix();
}
function ejercicio17BtnApp(){
  matrix.ejercicio17();
  drawMatrix();
}
function ejercicio18BtnApp(){
  matrix.ejercicio18();
  drawMatrix();
}
function ejercicio19BtnApp(){
  matrix.ejercicio19();
  drawMatrix();
}
function ejercicio20BtnApp(){
  matrix.ejercicio20();
  drawMatrix();
}
function ejercicio21BtnApp(){
  matrix.ejercicio21();
  drawMatrix();
}
function ejercicio22BtnApp(){
  matrix.ejercicio22();
  drawMatrix();
}
function ejercicio23BtnApp(){
  matrix.ejercicio23();
  drawMatrix();
}
function ejercicio24BtnApp(){
  matrix.ejercicio24();
  drawMatrix();
}
function ejercicio25BtnApp(){
  matrix.ejercicio25();
  drawMatrix();
}


// FUNCIONES APP EJERCICIOS (26-88)
function ejercicio26BtnApp() { 
  matrix.ejercicio26(); 
  drawMatrix(); 
}
function ejercicio27BtnApp() { 
  matrix.ejercicio27(); 
  drawMatrix(); 
}
function ejercicio28BtnApp() { 
  matrix.ejercicio28(); 
  drawMatrix(); 
}
function ejercicio29BtnApp() { 
  matrix.ejercicio29(); 
  drawMatrix(); 
}
function ejercicio30BtnApp() { 
  matrix.ejercicio30(); 
  drawMatrix(); 
}
function ejercicio31BtnApp() { 
  matrix.ejercicio31(); 
  drawMatrix(); 
}
function ejercicio32BtnApp() { 
  matrix.ejercicio32(); 
  drawMatrix(); 
}
function ejercicio33BtnApp() { 
  matrix.ejercicio33(); 
  drawMatrix(); 
}
function ejercicio34BtnApp() { 
  matrix.ejercicio34(); 
  drawMatrix(); 
}
function ejercicio35BtnApp() { 
  matrix.ejercicio35(); 
  drawMatrix(); 
}
function ejercicio36BtnApp() { 
  matrix.ejercicio36(); 
  drawMatrix(); 
}
function ejercicio37BtnApp() { 
  matrix.ejercicio37(); 
  drawMatrix(); 
}
function ejercicio38BtnApp() { 
  matrix.ejercicio38(); 
  drawMatrix(); 
}
function ejercicio39BtnApp() { 
  matrix.ejercicio39(); 
  drawMatrix(); 
}
function ejercicio40BtnApp() { 
  matrix.ejercicio40(); 
  drawMatrix(); 
}
function ejercicio41BtnApp() { 
  matrix.ejercicio41(); 
  drawMatrix(); 
}
function ejercicio42BtnApp() { 
  matrix.ejercicio42(); 
  drawMatrix(); 
}
function ejercicio43BtnApp() { 
  matrix.ejercicio43(); 
  drawMatrix(); 
}
function ejercicio44BtnApp() { 
  matrix.ejercicio44(); 
  drawMatrix(); 
}
function ejercicio45BtnApp() { 
  matrix.ejercicio45(); 
  drawMatrix(); 
}
function ejercicio46BtnApp() { 
  matrix.ejercicio46(); 
  drawMatrix(); 
}
function ejercicio47BtnApp() { 
  matrix.ejercicio47(); 
  drawMatrix(); 
}
function ejercicio48BtnApp() { 
  matrix.ejercicio48(); 
  drawMatrix(); 
}
function ejercicio49BtnApp() { 
  matrix.ejercicio49(); 
  drawMatrix(); 
}
function ejercicio50BtnApp() { 
  matrix.ejercicio50(); 
  drawMatrix(); 
}
function ejercicio51BtnApp() { 
  matrix.ejercicio51(); 
  drawMatrix(); 
}
function ejercicio52BtnApp() { 
  matrix.ejercicio52(); 
  drawMatrix(); 
}
function ejercicio53BtnApp() { 
  matrix.ejercicio53(); 
  drawMatrix(); 
}
function ejercicio54BtnApp() { 
  matrix.ejercicio54(); 
  drawMatrix(); 
}
function ejercicio55BtnApp() { 
  matrix.ejercicio55(); 
  drawMatrix(); 
}
function ejercicio56BtnApp() { 
  matrix.ejercicio56(); 
  drawMatrix(); 
}
function ejercicio57BtnApp() { 
  matrix.ejercicio57(); 
  drawMatrix(); 
}
function ejercicio58BtnApp() { 
  matrix.ejercicio58(); 
  drawMatrix(); 
}
function ejercicio59BtnApp() { 
  matrix.ejercicio59(); 
  drawMatrix(); 
}
function ejercicio60BtnApp() { 
  matrix.ejercicio60(); 
  drawMatrix(); 
}
function ejercicio61BtnApp() { 
  matrix.ejercicio61(); 
  drawMatrix(); 
}
function ejercicio62BtnApp() { 
  matrix.ejercicio62(); 
  drawMatrix(); 
}
function ejercicio63BtnApp() { 
  matrix.ejercicio63(); 
  drawMatrix(); 
}
function ejercicio64BtnApp() { 
  matrix.ejercicio64(); 
  drawMatrix(); 
}
function ejercicio65BtnApp() { 
  matrix.ejercicio65(); 
  drawMatrix(); 
}
function ejercicio66BtnApp() { 
  matrix.ejercicio66(); 
  drawMatrix(); 
}
function ejercicio67BtnApp() { 
  matrix.ejercicio67(); 
  drawMatrix(); 
}
function ejercicio68BtnApp() { 
  matrix.ejercicio68(); 
  drawMatrix(); 
}
function ejercicio69BtnApp() { 
  matrix.ejercicio69(); 
  drawMatrix(); 
}
function ejercicio70BtnApp() { 
  matrix.ejercicio70(); 
  drawMatrix(); 
}
function ejercicio71BtnApp() { 
  matrix.ejercicio71(); 
  drawMatrix(); 
}
function ejercicio72BtnApp() { 
  matrix.ejercicio72(); 
  drawMatrix(); 
}
function ejercicio73BtnApp() { 
  matrix.ejercicio73(); 
  drawMatrix(); 
}
function ejercicio74BtnApp() { 
  matrix.ejercicio74(); 
  drawMatrix(); 
}
function ejercicio75BtnApp() { 
  matrix.ejercicio75(); 
  drawMatrix(); 
}
function ejercicio76BtnApp() { 
  matrix.ejercicio76(); 
  drawMatrix(); 
}
function ejercicio77BtnApp() { 
  matrix.ejercicio77(); 
  drawMatrix(); 
}
function ejercicio78BtnApp() { 
  matrix.ejercicio78(); 
  drawMatrix(); 
}
function ejercicio79BtnApp() { 
  matrix.ejercicio79(); 
  drawMatrix(); 
}
function ejercicio80BtnApp() { 
  matrix.ejercicio80(); 
  drawMatrix(); 
}
function ejercicio81BtnApp() { 
  matrix.ejercicio81(); 
  drawMatrix(); 
}
function ejercicio82BtnApp() { 
  matrix.ejercicio82(); 
  drawMatrix(); 
}
function ejercicio83BtnApp() { 
  matrix.ejercicio83(); 
  drawMatrix(); 
}
function ejercicio84BtnApp() { 
  matrix.ejercicio84(); 
  drawMatrix(); 
}
function ejercicio85BtnApp() { 
  matrix.ejercicio85(); 
  drawMatrix(); 
}
function ejercicio86BtnApp() { 
  matrix.ejercicio86(); 
  drawMatrix(); 
}
function ejercicio87BtnApp() { 
  matrix.ejercicio87(); 
  drawMatrix(); 
}
function ejercicio88BtnApp() { 
  matrix.ejercicio88(); 
  drawMatrix(); 
}

// Inicializa el canvas cuando el DOM esté listo
initializeCanvas();