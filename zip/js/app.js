
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

canvas.width = 1000;
canvas.height = 1000;

const rows = 30;
const cols = 30;
const cellSize = canvas.width / cols;

// Matriz del mapa (se reutiliza para todos los niveles)
const mapMatrix = new Matrix(rows, cols);

// Niveles
let currentLevel = 1;
const maxLevel = Object.keys(LEVELS).length;

// Imágenes
const images = {};
let loadedCount = 1;
const totalImages = 10;

let game = null;

// Carga un nivel dentro de la misma matriz y el mismo Game
function setLevel(levelNumber) {
  const levelData = LEVELS[levelNumber];
  mapMatrix.fillFromArray(levelData);

  if (game) {
    game.loadLevel(levelData);
    game.draw();
  }
}

// Callback cuando se acaba un nivel
function onLevelComplete() {
  if (currentLevel < maxLevel) {
    currentLevel++;
    console.log("Nivel completado. Pasando al nivel", currentLevel);
    setLevel(currentLevel);
  } else {
    console.log("¡Has completado todos los niveles!");
    window.location.href = "game-win.html";
    // Si quieres reiniciar desde el nivel 1:
    currentLevel = 1;
    setLevel(currentLevel);
  }
}

// Inicializar el juego una vez que las imágenes estén cargadas
function iniciarJuego() {
  // Cargar el primer nivel en la matriz
  setLevel(currentLevel);

  // Crear instancia del juego una sola vez
  game = new Game("gameCanvas", mapMatrix, images, onLevelComplete);

  // Dibujar por primera vez
  game.draw();
}

// Cargar imágenes
for (let i = 1; i < totalImages; i++) {
  const img = new Image();
  img.src = `assets/${i}.png`;
  img.onload = () => {
    loadedCount++;
    if (loadedCount === totalImages) {
      iniciarJuego(); // solo cuando todas estén listas
    }
  };
  images[i] = img;
}


//game = new Game("gameCanvas", mapMatrix, images, 1, onLevelComplete);
/*
const canvas = document.getElementById("gameCanvas");
canvas.width = 1000;
canvas.height = 1000;

// Crear matriz
const mapMatrix = new Matrix(30, 30);

// Cargar imágenes
const images = {};
const totalImages = 10;
let loadedCount = 0;

for (let i = 1; i < totalImages; i++) {
  const img = new Image();
  img.src = `assets/${i}.png`;
  img.onload = () => {
    loadedCount++;
    if (loadedCount === totalImages - 1) {
      initGame(); // Solo cuando todas las imágenes estén listas
    }
  };
  images[i] = img;
}

// Nivel inicial
let currentLevel = 1;
let game;

function initGame() {
  // Cargar nivel en la matriz
  mapMatrix.fillFromArray(LEVELS[currentLevel]);

  // Crear instancia de Game
  game = new Game(
    "gameCanvas",
    mapMatrix,
    images,
    () => {
      // Callback al completar nivel
      currentLevel++;
      if (LEVELS[currentLevel]) {
        // Cargar siguiente nivel en el mismo juego
        mapMatrix.fillFromArray(LEVELS[currentLevel]);
        game.loadLevel(LEVELS[currentLevel], currentLevel);
      } else {
        window.location.href = "game-win.html";
      }
    },
    currentLevel
  );

  // Dibujar por primera vez (el juego ya tiene bucles automáticos)
  game.draw();
}

*/
