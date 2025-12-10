// --- Clase Enemy ---

class Enemy {
  constructor(row, col, value = 7) {
    this.row = row;
    this.col = col;
    this.value = value;
    this.dr = 1; // +1 = bajando, -1 = subiendo
  }

  moveVertical(rows) {
    let newRow = this.row + this.dr;

    if (newRow < 0 || newRow >= rows) {
      this.dr = -this.dr;
      newRow = this.row + this.dr;
    }

    this.row = newRow;
  }
}

// --- Clase Bullet ---
class Bullet {
  constructor(row, col, value = 8) {
    this.row = row;
    this.col = col;
    this.value = value;

    this.dr = -1; // dirección por defecto (arriba)
    this.dc = 0;
  }

  move(rows, cols) {
    const newRow = this.row + this.dr;
    const newCol = this.col + this.dc;

    if (newRow < 0 || newRow >= rows) return false;
    if (newCol < 0 || newCol >= cols) return false;

    this.row = newRow;
    this.col = newCol;
    return true;
  }
}

// --- Clase Enemy Bullet ---
class EnemyBullet {
  constructor(row, col, value = 9) {
    this.row = row;
    this.col = col;
    this.value = value;
    this.dr = 1;
    this.dc = 0;
  }

  move(rows, cols) {
    const newRow = this.row + this.dr;
    const newCol = this.col + this.dc;

    if (newRow < 0 || newRow >= rows) return false;
    if (newCol < 0 || newCol >= cols) return false;

    this.row = newRow;
    this.col = newCol;

    return true;
  }
}

// --- Clase Game ---
class Game {

  lastDirection = { dr: -1, dc: 0 }; // dirección inicial apuntando arriba
  startCellCleared = false;

  constructor(canvasId, mapMatrix, images, onLevelComplete) {

    this.canvas = document.getElementById(canvasId);
    this.ctx = this.canvas.getContext("2d");

    this.rows = mapMatrix.rows || 10;
    this.cols = mapMatrix.cols || 10;
    this.cellSize = this.canvas.width / this.cols;

    this.mapMatrix = mapMatrix;
    this.images = images;
    this.onLevelComplete = onLevelComplete;

    this.player = this.initPlayer();

    this.enemies = [];
    this.spawnEnemies(5);
    this.moveEnemies();

    this.bullets = [];
    this.moveBullets();

    this.enemyBullets = [];
    this.moveEnemyBullets();

    this.initControls();
  }

  initPlayer() {
    for (let r = 0; r < this.rows; r++) {
      for (let c = 0; c < this.cols; c++) {
        if (this.mapMatrix.getValue(r, c) === 6) {
          return new Player(r, c, 6);
        }
      }
    }
    return new Player(0, 0, 6);
  }

  initControls() {
    document.addEventListener("keydown", (e) => {
      switch (e.key) {
        case "ArrowUp":
          this.lastDirection = { dr: -1, dc: 0 };
          this.handleMove(-1, 0);
          break;

        case "ArrowDown":
          this.lastDirection = { dr: 1, dc: 0 };
          this.handleMove(1, 0);
          break;

        case "ArrowLeft":
          this.lastDirection = { dr: 0, dc: -1 };
          this.handleMove(0, -1);
          break;

        case "ArrowRight":
          this.lastDirection = { dr: 0, dc: 1 };
          this.handleMove(0, 1);
          break;

        case " ":
          this.fireBullet();
          break;
      }
    });
  }

  loadLevel(levelData) {
    this.mapMatrix.fillFromArray(levelData);

    this.player = this.initPlayer();
    this.enemies = [];
    this.bullets = [];
    this.enemyBullets = [];
    this.startCellCleared = false;

    this.spawnEnemies(5);
    this.draw();
  }

  handleMove(dr, dc) {
    const beforeRow = this.player.row;
    const beforeCol = this.player.col;

    this.player.move(dr, dc, this.rows, this.cols);

    const moved = this.player.row !== beforeRow || this.player.col !== beforeCol;

    if (moved && !this.startCellCleared) {
      this.mapMatrix.setValue(beforeRow, beforeCol, 1);
      this.startCellCleared = true;
    }

    this.draw();
  }

  // --- Enemigos ---
  spawnEnemies(count) {
    for (let i = 0; i < count; i++) {
      const col = Math.floor(Math.random() * this.cols);
      this.enemies.push(new Enemy(0, col));
    }
  }

  moveEnemies() {
    setInterval(() => {
      this.enemies.forEach(enemy => {
        enemy.moveVertical(this.rows);
        this.enemyBullets.push(new EnemyBullet(enemy.row, enemy.col));
      });

      this.draw();
    }, 500);
  }

  moveEnemyBullets() {
    setInterval(() => {
      this.enemyBullets = this.enemyBullets.filter(b => b.move(this.rows, this.cols));
      this.checkEnemyBulletCollision();
      this.draw();
    }, 120);
  }

  // --- Balas del jugador ---
  fireBullet() {
    const bullet = new Bullet(this.player.row, this.player.col);

    bullet.dr = this.lastDirection.dr;
    bullet.dc = this.lastDirection.dc;

    this.bullets.push(bullet);
  }

  moveBullets() {
    setInterval(() => {
      this.bullets = this.bullets.filter(b => b.move(this.rows, this.cols));
      this.checkBulletCollisions();
      this.draw();
    }, 120);
  }

  checkBulletCollisions() {
    for (let b = this.bullets.length - 1; b >= 0; b--) {
      for (let e = this.enemies.length - 1; e >= 0; e--) {
        if (this.bullets[b].row === this.enemies[e].row &&
            this.bullets[b].col === this.enemies[e].col) {
          this.bullets.splice(b, 1);
          this.enemies.splice(e, 1);
          break;
        }
      }
    }

    if (this.enemies.length === 0 && typeof this.onLevelComplete === "function") {
      this.onLevelComplete();
    }
  }

  checkEnemyBulletCollision() {
    for (let b = this.enemyBullets.length - 1; b >= 0; b--) {
      if (this.enemyBullets[b].row === this.player.row &&
          this.enemyBullets[b].col === this.player.col) {
        
        console.log("¡Jugador eliminado!");
        window.location.href = "game-over.html";
        this.enemyBullets.splice(b, 1);
        this.player = 0 ;
        break;
      }
    }
  }

  // --- Dibujo ---
  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    // Mapa
    for (let r = 0; r < this.rows; r++) {
      for (let c = 0; c < this.cols; c++) {
        const value = this.mapMatrix.getValue(r, c);
        const img = this.images[value];
        if (img) {
          this.ctx.drawImage(img, c * this.cellSize, r * this.cellSize, this.cellSize, this.cellSize);
        }
      }
    }

    // --- Jugador con rotación ---
    if (this.player) {
      const img = this.images[this.player.value];
      const x = this.player.col * this.cellSize;
      const y = this.player.row * this.cellSize;
      const size = this.cellSize;

      this.ctx.save();
      this.ctx.translate(x + size / 2, y + size / 2);

      if (this.lastDirection.dr === -1 && this.lastDirection.dc === 0) this.ctx.rotate(0);
      if (this.lastDirection.dr === 1 && this.lastDirection.dc === 0) this.ctx.rotate(Math.PI);
      if (this.lastDirection.dr === 0 && this.lastDirection.dc === 1) this.ctx.rotate(Math.PI / 2);
      if (this.lastDirection.dr === 0 && this.lastDirection.dc === -1) this.ctx.rotate(-Math.PI / 2);

      this.ctx.drawImage(img, -size / 2, -size / 2, size, size);
      this.ctx.restore();
    }

    // Enemigos
    this.enemies.forEach(enemy => {
      const enemyImg = this.images[enemy.value];
      this.ctx.drawImage(enemyImg, enemy.col * this.cellSize, enemy.row * this.cellSize, this.cellSize, this.cellSize);
    });

    // Balas del jugador
    this.bullets.forEach(b => {
      const img = this.images[b.value];
      this.ctx.drawImage(img, b.col * this.cellSize, b.row * this.cellSize, this.cellSize, this.cellSize);
    });

    // Balas enemigas
    this.enemyBullets.forEach(b => {
      const img = this.images[b.value];
      this.ctx.drawImage(img, b.col * this.cellSize, b.row * this.cellSize, this.cellSize, this.cellSize);
    });
  }
}








//setinterval para poner movimiento automatico


