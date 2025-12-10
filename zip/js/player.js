class Player {
  constructor(row, col, value = 100) {
    this.row = row;
    this.col = col;
    this.value = value;
  }

  move(dr, dc, rows, cols) {
    const newRow = this.row + dr;
    const newCol = this.col + dc;

    // Evitar salirse del mapa
    if (newRow < 1 || newRow >= rows-1) return;
    if (newCol < 1 || newCol >= cols-1) return;

    this.row = newRow;
    this.col = newCol;
  }
}
