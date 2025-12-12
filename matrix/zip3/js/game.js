const lives = 3;

class enemigos {
  constructor(row, col, value = 7) {
    this.row = row;
    this.col = col;
    this.value = value;
    this.dr = 1; // movimiento vertical (nivel 1 y 2)
  }

  moveVertical(rows) {
    let newRow = this.row + this.dr;
    let newCol = this.col;

    const titulo = mapMatrix.getValue(newRow, newCol);
    const caminable = [1, 4];

    if (newRow < 0 || newRow >= rows || !caminable.includes(titulo)) {
      this.dr = -this.dr;
      newRow = this.row + this.dr;
    }
    this.row = newRow;
  }
}

// Enemigos horizontales (nivel 3)
class enemigolados {
  constructor(row, col, value = 10) {
    this.row = row;
    this.col = col;
    this.value = value;
    this.dc = 1; // se mueve derecha
  }

  moveHorizontal(cols) {
    const newRow = this.row;
    let newCol = this.col + this.dc;

    const tile = mapMatrix.getValue(newRow, newCol);
    const adelante = [1, 4];

    if (newCol < 0 || newCol >= cols || !adelante.includes(tile)) {
      this.dc = -this.dc;
      newCol = this.col + this.dc;
    }

    this.col = newCol;
  }
}

// Bala del jugador
class Bullet {
  constructor(row, col, value = 8) {
    this.row = row;
    this.col = col;
    this.value = value;
    this.dr = -1;
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

// Bala enemiga
class EnemyBullet {
  constructor(row, col, dr, dc, value = 9) {
    this.row = row;
    this.col = col;
    this.value = value;
    this.dr = dr;
    this.dc = dc;
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

// GAME CLASS
class Game {
  currentLevel = 1;
  lastDirection = { dr: -1, dc: 0 };
  startCellCleared = false;

  constructor(canvasId, mapMatrix, images) {
    this.canvas = document.getElementById(canvasId);
    this.ctx = this.canvas.getContext("2d");

    this.rows = mapMatrix.rows || 10;
    this.cols = mapMatrix.cols || 10;
    this.cellSize = this.canvas.width / this.cols;

    this.mapMatrix = mapMatrix;
    this.images = images;

    this.player = this.initPlayer();

    this.enemies = [];
    this.horizontalEnemies = [];
    this.bullets = [];
    this.enemyBullets = [];

    this.spawnEnemies();
    this.moveEnemies();
    this.moveEnemyBullets();
    this.moveBullets();

    this.initControls();

    // vidas iniciales
    this.player.lives = lives;
    this.updateLivesDisplay();
  }

  // PLAYER
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
          new Audio("assets/sounds/space.mp3").play();
          break;
      }
    });
  }

  // SISTEMA DE NIVELES
  nextLevel() {
    this.currentLevel++;
    if (!LEVELS[this.currentLevel]) {
      window.location.href = "game-win.html";
      return;
    }
    this.loadLevel(LEVELS[this.currentLevel]);
  }

  loadLevel(levelData) {
    this.mapMatrix.fillFromArray(levelData);

    this.player = this.initPlayer();

    // ✅ PARCHE MÍNIMO: reinicia vidas y HUD al cambiar de nivel
    this.player.lives = lives;
    this.updateLivesDisplay();

    this.enemies = [];
    this.horizontalEnemies = [];
    this.bullets = [];
    this.enemyBullets = [];

    this.spawnEnemies();
    this.draw();
  }

  handleMove(dr, dc) {
    const beforeRow = this.player.row;
    const beforeCol = this.player.col;

    const newRow = beforeRow + dr;
    const newCol = beforeCol + dc;

    const tile = this.mapMatrix.getValue(newRow, newCol);
    const walkable = [1, 4, 5];
    if (!walkable.includes(tile)) return;

    this.player.move(dr, dc, this.rows, this.cols);

    const moved = this.player.row !== beforeRow || this.player.col !== beforeCol;
    if (moved && !this.startCellCleared) {
      this.mapMatrix.setValue(beforeRow, beforeCol, 1);
      this.startCellCleared = true;
    }

    this.draw();
  }

  spawnEnemies() {
    if (this.currentLevel === 1) {
      for (let i = 1; i < 3; i++) {
        this.enemies.push(new enemigos(1, Math.floor(Math.random() * this.cols)));
      }
    }

    if (this.currentLevel === 2) {
      for (let i = 0; i < 7; i++) {
        this.enemies.push(new enemigos(1, Math.floor(Math.random() * this.cols)));
      }
    }

    if (this.currentLevel === 3) {
      const rows = [2, 8, 15];
      rows.forEach((r) => {
        this.horizontalEnemies.push(new enemigolados(r, 1));
      });

      for (let i = 0; i < 5; i++) {
        this.enemies.push(new enemigos(1, Math.floor(Math.random() * this.cols)));
      }
    }
  }

  moveEnemies() {
    setInterval(() => {
      const speed = this.currentLevel === 2 ? 2 : 1;

      for (let i = 0; i < speed; i++) {
        this.enemies.forEach((enemy) => {
          enemy.moveVertical(this.rows);
          this.enemyBullets.push(new EnemyBullet(enemy.row, enemy.col, enemy.dr, 0));
        });
      }

      this.horizontalEnemies.forEach((enemy) => {
        enemy.moveHorizontal(this.cols);
        this.enemyBullets.push(new EnemyBullet(enemy.row, enemy.col, 0, enemy.dc));
      });

      this.checkTankCollision();
      this.draw();
    }, 450);
  }

  moveEnemyBullets() {
    setInterval(() => {
      this.enemyBullets = this.enemyBullets.filter((b) => b.move(this.rows, this.cols));
      this.checkEnemyBulletCollision();
      this.draw();
    }, 120);
  }

  fireBullet() {
    const b = new Bullet(this.player.row, this.player.col);
    b.dr = this.lastDirection.dr;
    b.dc = this.lastDirection.dc;
    this.bullets.push(b);
  }

  moveBullets() {
    setInterval(() => {
      this.bullets = this.bullets.filter((b) => b.move(this.rows, this.cols));
      this.checkBulletCollisions();
      this.draw();
    }, 90);
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

    for (let b = this.bullets.length - 1; b >= 0; b--) {
      for (let e = this.horizontalEnemies.length - 1; e >= 0; e--) {
        if (this.bullets[b].row === this.horizontalEnemies[e].row &&
            this.bullets[b].col === this.horizontalEnemies[e].col) {
          this.bullets.splice(b, 1);
          this.horizontalEnemies.splice(e, 1);
          break;
        }
      }
    }

    if (this.enemies.length === 0 && this.horizontalEnemies.length === 0) {
      this.nextLevel();
    }
  }

  // ✅ PARCHE MÍNIMO A PRUEBA DE BUGS
  checkEnemyBulletCollision() {
    for (let b = this.enemyBullets.length - 1; b >= 0; b--) {
      const hit =
        this.enemyBullets[b].row === this.player.row &&
        this.enemyBullets[b].col === this.player.col;

      if (!hit) continue;

      // ⚠️ antes tenías this.player.li-- (typo). Esto evita NaN:
      this.player.lives = Number(this.player.lives) - 1;

      // eliminar bala
      this.enemyBullets.splice(b, 1);

      // GAME OVER primero
      if (this.player.lives <= 0) {
        window.location.replace("./game-over.html");
        return;
      }

      // HUD después (protegido)
      this.updateLivesDisplay();
      return;
    }
  }

  updateLivesDisplay() {
    const livesDiv = document.getElementById("lives");
    if (!livesDiv) return; // evita crash si no existe
    livesDiv.textContent = "❤️".repeat(this.player.lives);
  }

  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    for (let r = 0; r < this.rows; r++) {
      for (let c = 0; c < this.cols; c++) {
        const value = this.mapMatrix.getValue(r, c);
        const img = this.images[value];
        if (img) {
          this.ctx.drawImage(
            img,
            c * this.cellSize,
            r * this.cellSize,
            this.cellSize,
            this.cellSize
          );
        }
      }
    }

    // jugador
    if (this.player) {
      const img = this.images[this.player.value];
      const x = this.player.col * this.cellSize;
      const y = this.player.row * this.cellSize;
      const size = this.cellSize;

      this.ctx.save();
      this.ctx.translate(x + size / 2, y + size / 2);

      if (this.lastDirection.dr === -1) this.ctx.rotate(0);
      if (this.lastDirection.dr === 1) this.ctx.rotate(Math.PI);
      if (this.lastDirection.dc === 1) this.ctx.rotate(Math.PI / 2);
      if (this.lastDirection.dc === -1) this.ctx.rotate(-Math.PI / 2);

      this.ctx.drawImage(img, -size / 2, -size / 2, size, size);
      this.ctx.restore();
    }

    // enemigos normales
    this.enemies.forEach((e) => {
      const img = this.images[e.value];
      this.ctx.drawImage(
        img,
        e.col * this.cellSize,
        e.row * this.cellSize,
        this.cellSize,
        this.cellSize
      );
    });

    // enemigos horizontales
    this.horizontalEnemies.forEach((e) => {
      const img = this.images[e.value];
      this.ctx.drawImage(
        img,
        e.col * this.cellSize,
        e.row * this.cellSize,
        this.cellSize,
        this.cellSize
      );
    });

    // balas jugador
    this.bullets.forEach((b) => {
      const img = this.images[b.value];
      this.ctx.drawImage(
        img,
        b.col * this.cellSize,
        b.row * this.cellSize,
        this.cellSize,
        this.cellSize
      );
    });

    // balas enemigas
    this.enemyBullets.forEach((b) => {
      const img = this.images[b.value];
      this.ctx.drawImage(
        img,
        b.col * this.cellSize,
        b.row * this.cellSize,
        this.cellSize,
        this.cellSize
      );
    });
  }
}
