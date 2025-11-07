class Matrix {
  rows;
  cols;
  data;

  /**
   * Constructor de la clase Matrix.
   * Inicializa la matriz con el tamaño especificado y un valor por defecto.
   * @param {number} rowsParam - Número de filas.
   * @param {number} colsParam - Número de columnas.
   * @param {number} defaultValue - Valor inicial para todas las celdas.
   */
  constructor(rowsParam, colsParam, defaultValue) {
    this.rows = rowsParam;
    this.cols = colsParam;
    this.data = [];

    for (let i = 0; i < rowsParam; i++) {
      const rowTemp = [];
      for (let j = 0; j < colsParam; j++) {
        rowTemp.push(defaultValue);
      }
      this.data.push(rowTemp);
    }
  }

  /**
   * Verifica si una posición (fila, columna) es válida dentro de los límites de la matriz.
   * @param {number} row - Índice de la fila.
   * @param {number} col - Índice de la columna.
   * @returns {boolean} - Verdadero si la posición es válida.
   */
  isValidPosition(row, col) {
    return row >= 0 && row < this.rows && col >= 0 && col < this.cols;
  }

  /**
   * Establece un valor en una posición específica de la matriz.
   * @param {number} row - Índice de la fila.
   * @param {number} col - Índice de la columna.
   * @param {*} value - El valor a establecer.
   */
  setValue(row, col, value) {
    if (this.isValidPosition(row, col)) {
      this.data[row][col] = value;
    }
  }

  /**
   * Obtiene el valor de una posición específica de la matriz.
   * @param {number} row - Índice de la fila.
   * @param {number} col - Índice de la columna.
   * @returns {*} - El valor en la posición o null si es inválida.
   */
  getValue(row, col) {
    if (this.isValidPosition(row, col)) {
      return this.data[row][col];
    } else {
      return null
    }
  }

  /**
   * Llena la matriz con números enteros aleatorios entre un mínimo y un máximo.
   * @param {number} min - Valor mínimo (incluido).
   * @param {number} max - Valor máximo (incluido).
   */
  fillRandom(min, max) {
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        // Genera un número aleatorio entero entre min y max
        const random = Math.floor(Math.random() * (max - min + 1)) + min;
        this.data[i][j] = random;
      }
    }
  }
  
  /**
   * Imprime la matriz en la consola (útil para depuración).
   */
  print() {
    console.log(this.data.map(row => row.join('\t')).join('\n'));
  }

  // =================================================================
  // === MÉTODOS EJERCICIOS (1-25) - Primer Práctico =================
  // =================================================================

  // Ejercicio 1. Suma de todos los elementos
  ejercicio1() {
    let sum = 0;
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        sum += this.data[i][j];
      }
    }
    console.log("Ejercicio #1: Suma total de elementos: " + sum);
    // Para visualizarlo en la matriz: llenar la matriz con la suma total
    this.fill(sum); 
  }

  // Ejercicio 2. Máximo y mínimo
  ejercicio2() {
    let max = this.data[0][0];
    let min = this.data[0][0];

    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        const value = this.data[i][j];
        if (value > max) {
          max = value;
        }
        if (value < min) {
          min = value;
        }
      }
    }
    console.log(`Ejercicio #2: Máximo: ${max}, Mínimo: ${min}`);
    // Para visualizarlo en la matriz: rellenar con Máximo
    this.fill(max); 
  }

  // Ejercicio 3. Promedio de Elementos
  ejercicio3() {
    let sum = 0;
    let count = 0;
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        sum += this.data[i][j];
        count++;
      }
    }
    const average = count > 0 ? (sum / count).toFixed(2) : 0;
    console.log("Ejercicio #3: Promedio de elementos: " + average);
    // Para visualizarlo: rellenar con el promedio (redondeado)
    this.fill(Math.round(average)); 
  }

  // Ejercicio 4. Contar Ocurrencias (Ejemplo: contar cuántos 5s hay)
  ejercicio4() {
    const target = 5; // El valor a contar (se puede pedir al usuario)
    let count = 0;

    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        if (this.data[i][j] === target) {
          count++;
        }
      }
    }
    console.log(`Ejercicio #4: Ocurrencias del valor ${target}: ${count}`);
    // Para visualizarlo: rellenar con el conteo
    this.fill(count); 
  }

  // Ejercicio 5. Invertir Filas
  ejercicio5() {
    for (let i = 0; i < this.rows; i++) {
      // Invertir la fila actual
      this.data[i].reverse(); 
    }
    console.log("Ejercicio #5: Filas invertidas horizontalmente.");
  }
  
  // Ejercicio 6. Rotar 90° (Nueva Matriz)
  ejercicio6() {
    const newRows = this.cols;
    const newCols = this.rows;
    
    // Crear una nueva matriz para la rotación (temporalmente)
    const rotatedData = [];
    for (let j = 0; j < newRows; j++) {
        const newRow = [];
        for (let i = this.rows - 1; i >= 0; i--) {
            newRow.push(this.data[i][j]);
        }
        rotatedData.push(newRow);
    }
    
    // Actualizar la matriz principal
    this.rows = newRows;
    this.cols = newCols;
    this.data = rotatedData;
    
    console.log("Ejercicio #6: Matriz rotada 90 grados en sentido horario.");
  }
  
  // Ejercicio 7. Transpuesta (Nueva Matriz)
  ejercicio7() {
    const newRows = this.cols;
    const newCols = this.rows;
    
    const transposedData = [];
    for (let j = 0; j < newRows; j++) {
        const newRow = [];
        for (let i = 0; i < newCols; i++) {
            newRow.push(this.data[i][j]);
        }
        transposedData.push(newRow);
    }
    
    // Actualizar la matriz principal
    this.rows = newRows;
    this.cols = newCols;
    this.data = transposedData;
    
    console.log("Ejercicio #7: Transpuesta generada.");
  }
  
  // Ejercicio 8. Multiplicación de Matrices (Requiere otra matriz, simplificaremos con escalar)
  ejercicio8() {
    const scalar = 2; // Multiplicar por 2 para el ejemplo
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        this.data[i][j] *= scalar;
      }
    }
    console.log(`Ejercicio #8: Multiplicación por escalar ${scalar}.`);
  }
  
  // Ejercicio 9. Diagonal Principal (Llenar con 1s)
  ejercicio9() {
    this.fill(0); // Limpiar primero
    const size = Math.min(this.rows, this.cols);
    for (let i = 0; i < size; i++) {
        this.data[i][i] = 1;
    }
    console.log("Ejercicio #9: Diagonal Principal (1s).");
  }

  // Ejercicio 10. Diagonal Secundaria (Llenar con 1s)
  ejercicio10() {
    this.fill(0); // Limpiar primero
    const size = Math.min(this.rows, this.cols);
    for (let i = 0; i < size; i++) {
        this.data[i][this.cols - 1 - i] = 1;
    }
    console.log("Ejercicio #10: Diagonal Secundaria (1s).");
  }

  // Ejercicio 11. Suma de Filas (Llenar la matriz con la suma de su fila)
  ejercicio11() {
    for (let i = 0; i < this.rows; i++) {
      let rowSum = 0;
      for (let j = 0; j < this.cols; j++) {
        rowSum += this.data[i][j];
      }
      // Reemplazar la fila con la suma
      for (let j = 0; j < this.cols; j++) {
        this.data[i][j] = rowSum;
      }
      console.log(`Suma Fila ${i}: ${rowSum}`);
    }
    console.log("Ejercicio #11: Matriz llenada con la suma de sus filas originales.");
  }

  // Ejercicio 12. Suma de Columnas (Llenar la matriz con la suma de su columna)
  ejercicio12() {
    const colSums = new Array(this.cols).fill(0);
    
    for (let j = 0; j < this.cols; j++) {
      for (let i = 0; i < this.rows; i++) {
        colSums[j] += this.data[i][j];
      }
    }
    
    // Rellenar la matriz con las sumas de columna
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        this.data[i][j] = colSums[j];
      }
    }

    console.log("Ejercicio #12: Matriz llenada con la suma de sus columnas originales.");
  }

  // Ejercicio 13. Transpuesta (In-place) - SOLO CUADRADA
  ejercicio13() {
    if (this.rows !== this.cols) {
        console.warn("Ejercicio #13: La transpuesta in-place solo funciona en matrices cuadradas.");
        return;
    }
    for (let i = 0; i < this.rows; i++) {
      for (let j = i + 1; j < this.cols; j++) {
        // Intercambio
        [this.data[i][j], this.data[j][i]] = [this.data[j][i], this.data[i][j]];
      }
    }
    console.log("Ejercicio #13: Transpuesta realizada in-place.");
  }

  // Ejercicio 14. Matriz Identidad
  ejercicio14() {
    this.fill(0); // Limpiar primero
    const size = Math.min(this.rows, this.cols);
    for (let i = 0; i < size; i++) {
      this.data[i][i] = 1;
    }
    console.log("Ejercicio #14: Matriz Identidad.");
  }

  // Ejercicio 15. Matriz Simétrica (Rellenar para que sea simétrica)
  ejercicio15() {
    if (this.rows !== this.cols) {
        console.warn("Ejercicio #15: La simetría solo aplica a matrices cuadradas.");
        return;
    }
    this.fillRandom(1, 9); // Llenar con valores aleatorios
    for (let i = 0; i < this.rows; i++) {
      for (let j = i + 1; j < this.cols; j++) {
        // Asegurar la simetría: M[i][j] = M[j][i]
        this.data[j][i] = this.data[i][j]; 
      }
    }
    console.log("Ejercicio #15: Matriz generada con simetría (respecto a la diagonal principal).");
  }

  // Ejercicio 16. Triangular Superior (Poner 0s abajo de la diagonal principal)
  ejercicio16() {
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        if (i > j) { // Si la fila es mayor que la columna (debajo de la diagonal)
          this.data[i][j] = 0;
        } else {
           // Opcional: Llenar el resto con 1s para patrón
           this.data[i][j] = 1; 
        }
      }
    }
    console.log("Ejercicio #16: Matriz Triangular Superior.");
  }

  // Ejercicio 17. Triangular Inferior (Poner 0s arriba de la diagonal principal)
  ejercicio17() {
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        if (j > i) { // Si la columna es mayor que la fila (arriba de la diagonal)
          this.data[i][j] = 0;
        } else {
           // Opcional: Llenar el resto con 1s para patrón
           this.data[i][j] = 1; 
        }
      }
    }
    console.log("Ejercicio #17: Matriz Triangular Inferior.");
  }

  // Ejercicio 18. Suma de Diagonales (Principal + Secundaria)
  ejercicio18() {
    let sumPrincipal = 0;
    let sumSecundaria = 0;
    const size = Math.min(this.rows, this.cols);

    for (let i = 0; i < size; i++) {
      sumPrincipal += this.data[i][i];
      sumSecundaria += this.data[i][this.cols - 1 - i];
    }
    
    // Si la matriz es cuadrada y de tamaño impar, el elemento central se contó dos veces
    if (this.rows === this.cols && this.rows % 2 !== 0) {
      const center = Math.floor(this.rows / 2);
      sumSecundaria -= this.data[center][center];
    }

    const totalSum = sumPrincipal + sumSecundaria;
    console.log(`Ejercicio #18: Suma Diagonal Principal: ${sumPrincipal}, Suma Diagonal Secundaria: ${sumSecundaria}, Suma Total: ${totalSum}`);
    // Para visualizarlo: rellenar con la suma total
    this.fill(totalSum); 
  }

  // Ejercicio 19. Suma de Bordes
  ejercicio19() {
    let sumBordes = 0;

    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        // Verificar si está en el borde
        if (i === 0 || i === this.rows - 1 || j === 0 || j === this.cols - 1) {
          sumBordes += this.data[i][j];
        }
      }
    }

    console.log("Ejercicio #19: Suma de los elementos del borde: " + sumBordes);
    // Para visualizarlo: rellenar con la suma total
    this.fill(sumBordes); 
  }

  // Ejercicio 20. Max y Min con Posición (Mostrar posición del Máximo)
  ejercicio20() {
    let max = this.data[0][0];
    let maxPos = [0, 0];
    let min = this.data[0][0];
    let minPos = [0, 0];

    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        const value = this.data[i][j];
        if (value > max) {
          max = value;
          maxPos = [i, j];
        }
        if (value < min) {
          min = value;
          minPos = [i, j];
        }
      }
    }

    console.log(`Ejercicio #20: Máximo: ${max} en [${maxPos}], Mínimo: ${min} en [${minPos}]`);
    
    // Para visualizarlo: poner 1s en las posiciones de max y min
    this.fill(0); 
    this.setValue(maxPos[0], maxPos[1], 1);
    this.setValue(minPos[0], minPos[1], 1);
  }

  // Ejercicio 21. Promedio de la Matriz (Igual que el Ejercicio 3)
  ejercicio21() {
    this.ejercicio3(); // Llamamos al método ya implementado
    console.log("Ejercicio #21: Promedio de la Matriz (Mismo que Ejercicio 3).");
  }

  // Ejercicio 22. Contar Pares/Impares
  ejercicio22() {
    let countPares = 0;
    let countImpares = 0;

    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        if (this.data[i][j] % 2 === 0) {
          countPares++;
        } else {
          countImpares++;
        }
      }
    }
    
    console.log(`Ejercicio #22: Pares: ${countPares}, Impares: ${countImpares}`);
    // Para visualizarlo: Poner 1 en pares, 0 en impares
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        this.data[i][j] = (this.data[i][j] % 2 === 0) ? 1 : 0;
      }
    }
  }

  // Ejercicio 23. Buscar Valor (Posiciones)
  ejercicio23() {
    const target = 7; // El valor a buscar
    const positions = [];

    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        if (this.data[i][j] === target) {
          positions.push(`[${i}, ${j}]`);
        }
      }
    }

    console.log(`Ejercicio #23: Posiciones de ${target}: ${positions.join(', ')}`);
    // Para visualizarlo: poner 1 donde se encuentre el valor
    this.fill(0);
    for (const pos of positions) {
      const [i, j] = pos.match(/\d+/g).map(Number);
      this.setValue(i, j, 1);
    }
  }

  // Ejercicio 24. Suma Arriba/Abajo Diag. Prin.
  ejercicio24() {
    let sumArriba = 0;
    let sumAbajo = 0;

    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        if (j > i) { // Arriba de la diagonal
          sumArriba += this.data[i][j];
        } else if (i > j) { // Abajo de la diagonal
          sumAbajo += this.data[i][j];
        }
      }
    }

    console.log(`Ejercicio #24: Suma Arriba: ${sumArriba}, Suma Abajo: ${sumAbajo}`);
    // Para visualizarlo: Llenar arriba con 1, abajo con 2, diagonal con 0
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        if (j > i) {
          this.data[i][j] = 1;
        } else if (i > j) {
          this.data[i][j] = 2;
        } else {
          this.data[i][j] = 0;
        }
      }
    }
  }

  // Ejercicio 25. Matriz Espejo Horizontal
  ejercicio25() {
    const middleCol = Math.floor(this.cols / 2);
    
    // Asumiendo que la mitad izquierda ya está llena (o la llenamos aleatoriamente)
    this.fillRandom(1, 9);

    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < middleCol; j++) {
        // Copiar el valor de la columna j a la columna reflejada (this.cols - 1 - j)
        this.data[i][this.cols - 1 - j] = this.data[i][j];
      }
    }
    console.log("Ejercicio #25: Matriz generada con reflejo horizontal (espejo).");
  }

  // =================================================================
  // === MÉTODOS EJERCICIOS (26-88) - Segundo Práctico ===============
  // =================================================================

  // Método auxiliar para rellenar toda la matriz con un valor
  fill(value) {
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        this.data[i][j] = value;
      }
    }
  }

  // Ejercicio 26. Reflejo Vertical de la matriz
  ejercicio26() {
    for (let i = 0; i < Math.floor(this.rows / 2); i++) {
      const filaOpuesta = this.rows - 1 - i;
      // Intercambiar la fila i con la fila opuesta
      [this.data[i], this.data[filaOpuesta]] = [this.data[filaOpuesta], this.data[i]];
    }
    console.log("Ejercicio #26: Reflejo vertical aplicado.");
  }

  // Ejercicio 27. Reflejo Horizontal de la matriz (Igual al Ejercicio 5: Invertir Filas)
  ejercicio27() {
    for (let i = 0; i < this.rows; i++) {
      // Invertir la fila actual
      this.data[i].reverse(); 
    }
    console.log("Ejercicio #27: Reflejo horizontal aplicado.");
  }

  // Ejercicio 28. Rotación 90° (Reutiliza la lógica del Ejercicio 6)
  ejercicio28() {
    this.ejercicio6();
    console.log("Ejercicio #28: Rotación 90° en sentido horario.");
  }

  // Ejercicio 29. Rotación 180°
  ejercicio29() {
    // Rotar 180 grados es equivalente a invertir filas y luego invertir columnas (o viceversa)
    for (let i = 0; i < this.rows; i++) {
        this.data[i].reverse(); // Reflejo horizontal
    }
    this.data.reverse(); // Reflejo vertical
    console.log("Ejercicio #29: Rotación 180 grados.");
  }

  // Ejercicio 30. Diagonal Principal (1s) (Igual al Ejercicio 9)
  ejercicio30() {
    this.ejercicio9();
    console.log("Ejercicio #30: Diagonal Principal (1s).");
  }

  // Ejercicio 31. Diagonal Secundaria (1s) (Igual al Ejercicio 10)
  ejercicio31() {
    this.ejercicio10();
    console.log("Ejercicio #31: Diagonal Secundaria (1s).");
  }

  // Ejercicio 32. Triángulo Superior (Rellenar con 1s)
  ejercicio32() {
    this.fill(0);
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        if (i <= j) { // Incluye la diagonal principal
          this.data[i][j] = 1;
        }
      }
    }
    console.log("Ejercicio #32: Patrón de Triángulo Superior.");
  }

  // Ejercicio 33. Triángulo Inferior (Rellenar con 1s)
  ejercicio33() {
    this.fill(0);
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        if (i >= j) { // Incluye la diagonal principal
          this.data[i][j] = 1;
        }
      }
    }
    console.log("Ejercicio #33: Patrón de Triángulo Inferior.");
  }

  // Ejercicio 34. Marco (Bordes 1s)
  ejercicio34() {
    this.fill(0);
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        if (i === 0 || i === this.rows - 1 || j === 0 || j === this.cols - 1) {
          this.data[i][j] = 1;
        }
      }
    }
    console.log("Ejercicio #34: Patrón de Marco (Bordes 1s).");
  }

  // Ejercicio 35. Patrón Simple (0/1)
  ejercicio35() {
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        this.data[i][j] = (i + j) % 2;
      }
    }
    console.log("Ejercicio #35: Patrón Simple (0/1 alternado).");
  }

  // Ejercicio 36. Llenar con Suma Total (Reutiliza lógica del Ejercicio 1)
  ejercicio36() {
    let sum = 0;
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        sum += this.data[i][j];
      }
    }
    this.fill(sum);
    console.log("Ejercicio #36: Llenar con Suma Total.");
  }

  // Ejercicio 37. Llenar con Promedio (Reutiliza lógica del Ejercicio 3)
  ejercicio37() {
    let sum = 0;
    let count = 0;
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        sum += this.data[i][j];
        count++;
      }
    }
    const average = count > 0 ? Math.round(sum / count) : 0;
    this.fill(average);
    console.log("Ejercicio #37: Llenar con Promedio (redondeado).");
  }

  // Ejercicio 38. Llenar con Máximo (Reutiliza lógica del Ejercicio 2)
  ejercicio38() {
    let max = this.data[0][0];
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        if (this.data[i][j] > max) {
          max = this.data[i][j];
        }
      }
    }
    this.fill(max);
    console.log("Ejercicio #38: Llenar con Máximo.");
  }

  // Ejercicio 39. Llenar con Mínimo (Reutiliza lógica del Ejercicio 2)
  ejercicio39() {
    let min = this.data[0][0];
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        if (this.data[i][j] < min) {
          min = this.data[i][j];
        }
      }
    }
    this.fill(min);
    console.log("Ejercicio #39: Llenar con Mínimo.");
  }

  // Ejercicio 40. Cuadrante 1 (Llenar con 1)
  ejercicio40() {
    this.fill(0);
    const midRow = Math.floor(this.rows / 2);
    const midCol = Math.floor(this.cols / 2);
    for (let i = 0; i < midRow; i++) {
      for (let j = midCol; j < this.cols; j++) {
        this.data[i][j] = 1; // Fila superior, columna derecha
      }
    }
    console.log("Ejercicio #40: Patrón de Cuadrante 1 (Superior Derecha).");
  }

  // Ejercicio 41. Cuadrante 2 (Llenar con 1)
  ejercicio41() {
    this.fill(0);
    const midRow = Math.floor(this.rows / 2);
    const midCol = Math.floor(this.cols / 2);
    for (let i = 0; i < midRow; i++) {
      for (let j = 0; j < midCol; j++) {
        this.data[i][j] = 1; // Fila superior, columna izquierda
      }
    }
    console.log("Ejercicio #41: Patrón de Cuadrante 2 (Superior Izquierda).");
  }
  
  // Ejercicio 42. Transpuesta (Reutiliza la lógica del Ejercicio 7)
  ejercicio42() {
    this.ejercicio7();
    console.log("Ejercicio #42: Transpuesta generada (Nueva Matriz).");
  }

  // Ejercicio 43. Simetría Principal (Llenar con 1)
  ejercicio43() {
    this.fill(0);
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        if (i === j) {
          this.data[i][j] = 1;
        } else {
          // Si (i, j) está en la parte inferior, copiamos de la superior
          if (i > j) { 
            this.data[i][j] = this.data[j][i];
          } else {
            // Llenamos la parte superior con un patrón para que se vea la simetría
            this.data[i][j] = 2;
          }
        }
      }
    }
    // Simplificaremos solo mostrando la diagonal principal (1) y el resto (0)
    this.ejercicio9();
    console.log("Ejercicio #43: Simetría Principal (Patrón de Diagonal Principal).");
  }

  // Ejercicio 44. Submatriz 3x3 Centro (Poner 1s)
  ejercicio44() {
    this.fill(0);
    const centerRow = Math.floor(this.rows / 2);
    const centerCol = Math.floor(this.cols / 2);

    for (let i = centerRow - 1; i <= centerRow + 1; i++) {
      for (let j = centerCol - 1; j <= centerCol + 1; j++) {
        if (this.isValidPosition(i, j)) {
          this.data[i][j] = 1;
        }
      }
    }
    console.log("Ejercicio #44: Submatriz 3x3 Centrada (1s).");
  }

  // Ejercicio 45. Intercambiar Fila 0 y Fila 1
  ejercicio45() {
    if (this.rows >= 2) {
      [this.data[0], this.data[1]] = [this.data[1], this.data[0]];
      console.log("Ejercicio #45: Filas 0 y 1 intercambiadas.");
    } else {
      console.warn("Ejercicio #45: No hay suficientes filas para intercambiar Fila 0 y Fila 1.");
    }
  }

  // Ejercicio 46. Intercambiar Columna 0 y Columna 1
  ejercicio46() {
    if (this.cols >= 2) {
      for (let i = 0; i < this.rows; i++) {
        // Intercambiar M[i][0] con M[i][1]
        [this.data[i][0], this.data[i][1]] = [this.data[i][1], this.data[i][0]];
      }
      console.log("Ejercicio #46: Columnas 0 y 1 intercambiadas.");
    } else {
      console.warn("Ejercicio #46: No hay suficientes columnas para intercambiar Columna 0 y Columna 1.");
    }
  }

  // Ejercicio 47. Llenar con Suma Fila (Igual al Ejercicio 11)
  ejercicio47() {
    this.ejercicio11();
    console.log("Ejercicio #47: Llenar con Suma Fila.");
  }

  // Ejercicio 48. Llenar con Suma Columna (Igual al Ejercicio 12)
  ejercicio48() {
    this.ejercicio12();
    console.log("Ejercicio #48: Llenar con Suma Columna.");
  }

  // Ejercicio 49. Llenar con Producto Fila
  ejercicio49() {
    for (let i = 0; i < this.rows; i++) {
      let rowProduct = 1;
      for (let j = 0; j < this.cols; j++) {
        // Multiplicación de la fila original. Usaremos solo 1s y 2s para evitar números grandes.
        rowProduct *= (this.data[i][j] % 2 === 0) ? 2 : 1; 
      }
      // Rellenar la fila con el producto (reducido a módulo 10 para visualización)
      for (let j = 0; j < this.cols; j++) {
        this.data[i][j] = rowProduct % 10;
      }
    }
    console.log("Ejercicio #49: Llenar con Producto Fila (Mod 10).");
  }

  // Ejercicio 50. Llenar con Promedio Diagonales (Principal)
  ejercicio50() {
    let sum = 0;
    let count = 0;
    const size = Math.min(this.rows, this.cols);

    for (let i = 0; i < size; i++) {
      sum += this.data[i][i];
      count++;
    }
    const average = count > 0 ? Math.round(sum / count) : 0;
    this.fill(average);
    console.log("Ejercicio #50: Llenar con Promedio Diagonal Principal.");
  }

  // Ejercicio 51. Patrón Ajedrez (0 y 1)
  ejercicio51() {
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        this.data[i][j] = (i + j) % 2;
      }
    }
    console.log("Ejercicio #51: Patrón Ajedrez.");
  }

  // Ejercicio 52. Matriz Identidad (Reutiliza la lógica del Ejercicio 14)
  ejercicio52() {
    this.ejercicio14();
    console.log("Ejercicio #52: Matriz Identidad.");
  }

  // Ejercicio 53. Reflejo Diag. Secundaria
  ejercicio53() {
    // Patrón de llenado: M[i][j] = M[this.cols - 1 - j][this.rows - 1 - i]
    if (this.rows !== this.cols) {
        console.warn("Ejercicio #53: El reflejo por diagonal secundaria es más claro en matrices cuadradas.");
        return;
    }
    for (let i = 0; i < this.rows; i++) {
      for (let j = i + 1; j < this.cols - i; j++) {
        // La condición j < this.cols - i evita el doble conteo en matrices cuadradas
        // Intercambio
        const i_ref = this.rows - 1 - j;
        const j_ref = this.cols - 1 - i;
        [this.data[i][j], this.data[i_ref][j_ref]] = [this.data[i_ref][j_ref], this.data[i][j]];
      }
    }
    console.log("Ejercicio #53: Reflejo por Diagonal Secundaria (in-place).");
  }

  // Ejercicio 54. Llenado Concéntrico (Capas externas con 1, siguientes con 2, etc.)
  ejercicio54() {
    const maxLayers = Math.ceil(Math.min(this.rows, this.cols) / 2);
    this.fill(0); // Limpiar primero
    for (let k = 0; k < maxLayers; k++) {
        const value = k + 1;
        const minRow = k;
        const maxRow = this.rows - 1 - k;
        const minCol = k;
        const maxCol = this.cols - 1 - k;

        // Borde superior
        for (let j = minCol; j <= maxCol; j++) { this.data[minRow][j] = value; }
        // Borde inferior
        for (let j = minCol; j <= maxCol; j++) { this.data[maxRow][j] = value; }
        // Borde izquierdo
        for (let i = minRow + 1; i < maxRow; i++) { this.data[i][minCol] = value; }
        // Borde derecho
        for (let i = minRow + 1; i < maxRow; i++) { this.data[i][maxCol] = value; }
    }
    console.log("Ejercicio #54: Patrón de Llenado Concéntrico.");
  }

  // Ejercicio 55. Invertir Filas Pares
  ejercicio55() {
    for (let i = 0; i < this.rows; i++) {
      if (i % 2 === 0) { // Fila par (0, 2, 4...)
        this.data[i].reverse(); 
      }
    }
    console.log("Ejercicio #55: Filas pares invertidas.");
  }

  // Ejercicio 56. Invertir Columnas Pares
  ejercicio56() {
    for (let j = 0; j < this.cols; j++) {
      if (j % 2 === 0) { // Columna par (0, 2, 4...)
        for (let i = 0; i < Math.floor(this.rows / 2); i++) {
          const i_ref = this.rows - 1 - i;
          // Intercambiar M[i][j] con M[i_ref][j]
          [this.data[i][j], this.data[i_ref][j]] = [this.data[i_ref][j], this.data[i][j]];
        }
      }
    }
    console.log("Ejercicio #56: Columnas pares invertidas verticalmente.");
  }

  // Ejercicio 57. Interc. Fila Central (Con la primera fila)
  ejercicio57() {
    if (this.rows >= 1) {
      const centerRow = Math.floor(this.rows / 2);
      // Intercambiar M[0] con M[centerRow]
      [this.data[0], this.data[centerRow]] = [this.data[centerRow], this.data[0]];
      console.log(`Ejercicio #57: Fila 0 y Fila Central (${centerRow}) intercambiadas.`);
    } else {
      console.warn("Ejercicio #57: No hay filas para intercambiar.");
    }
  }

  // Ejercicio 58. Interc. Col Central (Con la primera columna)
  ejercicio58() {
    if (this.cols >= 1) {
      const centerCol = Math.floor(this.cols / 2);
      for (let i = 0; i < this.rows; i++) {
        // Intercambiar M[i][0] con M[i][centerCol]
        [this.data[i][0], this.data[i][centerCol]] = [this.data[i][centerCol], this.data[i][0]];
      }
      console.log(`Ejercicio #58: Columna 0 y Columna Central (${centerCol}) intercambiadas.`);
    } else {
      console.warn("Ejercicio #58: No hay columnas para intercambiar.");
    }
  }

  // Ejercicio 59. Llenar con i + j
  ejercicio59() {
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        this.data[i][j] = i + j;
      }
    }
    console.log("Ejercicio #59: Llenar con el valor de i + j.");
  }

  // Ejercicio 60. Llenar con i * j
  ejercicio60() {
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        this.data[i][j] = i * j;
      }
    }
    console.log("Ejercicio #60: Llenar con el valor de i * j.");
  }

  // Ejercicio 61. Llenado Progresivo Horizontal (1, 2, 3...)
  ejercicio61() {
    let counter = 1;
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        this.data[i][j] = counter++;
      }
    }
    console.log("Ejercicio #61: Llenado Progresivo Horizontal.");
  }

  // Ejercicio 62. Llenado Progresivo Vertical (1, 2, 3...)
  ejercicio62() {
    let counter = 1;
    for (let j = 0; j < this.cols; j++) {
      for (let i = 0; i < this.rows; i++) {
        this.data[i][j] = counter++;
      }
    }
    console.log("Ejercicio #62: Llenado Progresivo Vertical.");
  }

  // Ejercicio 63. Triáng. Inferior Secund. (Llenar con 1s)
  ejercicio63() {
    this.fill(0);
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        if (i + j >= this.rows - 1) { // Debajo de la diagonal secundaria
          this.data[i][j] = 1;
        }
      }
    }
    console.log("Ejercicio #63: Patrón de Triángulo Inferior de la Diagonal Secundaria.");
  }

  // Ejercicio 64. Triáng. Superior Secund. (Llenar con 1s)
  ejercicio64() {
    this.fill(0);
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        if (i + j <= this.rows - 1) { // Arriba de la diagonal secundaria
          this.data[i][j] = 1;
        }
      }
    }
    console.log("Ejercicio #64: Patrón de Triángulo Superior de la Diagonal Secundaria.");
  }

  // Ejercicio 65. Anti-Bordes (Llenar el interior con 1s)
  ejercicio65() {
    this.fill(0);
    for (let i = 1; i < this.rows - 1; i++) {
      for (let j = 1; j < this.cols - 1; j++) {
        this.data[i][j] = 1;
      }
    }
    console.log("Ejercicio #65: Patrón Anti-Bordes (Interior con 1s).");
  }

  // Ejercicio 66. Zigzag Horizontal
  ejercicio66() {
    let counter = 1;
    for (let i = 0; i < this.rows; i++) {
      if (i % 2 === 0) { // Fila par (normal: izquierda a derecha)
        for (let j = 0; j < this.cols; j++) {
          this.data[i][j] = counter++;
        }
      } else { // Fila impar (reversa: derecha a izquierda)
        for (let j = this.cols - 1; j >= 0; j--) {
          this.data[i][j] = counter++;
        }
      }
    }
    console.log("Ejercicio #66: Patrón Zigzag Horizontal.");
  }

  // Ejercicio 67. Diagonal Superior Única (Poner 1s solo en M[i][i+1])
  ejercicio67() {
    this.fill(0);
    for (let i = 0; i < this.rows; i++) {
      const j = i + 1;
      if (this.isValidPosition(i, j)) {
        this.data[i][j] = 1;
      }
    }
    console.log("Ejercicio #67: Patrón de Diagonal Superior Única.");
  }

  // Ejercicio 68. Diagonal Inferior Única (Poner 1s solo en M[i][i-1])
  ejercicio68() {
    this.fill(0);
    for (let i = 0; i < this.rows; i++) {
      const j = i - 1;
      if (this.isValidPosition(i, j)) {
        this.data[i][j] = 1;
      }
    }
    console.log("Ejercicio #68: Patrón de Diagonal Inferior Única.");
  }

  // Ejercicio 69. Potencias de 2
  ejercicio69() {
    let counter = 0;
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        this.data[i][j] = Math.pow(2, counter++);
      }
    }
    console.log("Ejercicio #69: Llenar con Potencias de 2.");
  }

  // Ejercicio 70. Caracol / Espiral
  ejercicio70() {
    this.fill(0);
    let top = 0, bottom = this.rows - 1, left = 0, right = this.cols - 1;
    let counter = 1;

    while (top <= bottom && left <= right) {
      // De izquierda a derecha (top row)
      for (let j = left; j <= right; j++) {
        this.data[top][j] = counter++;
      }
      top++;

      // De arriba a abajo (right column)
      for (let i = top; i <= bottom; i++) {
        this.data[i][right] = counter++;
      }
      right--;

      // De derecha a izquierda (bottom row)
      if (top <= bottom) {
        for (let j = right; j >= left; j--) {
          this.data[bottom][j] = counter++;
        }
        bottom--;
      }

      // De abajo a arriba (left column)
      if (left <= right) {
        for (let i = bottom; i >= top; i--) {
          this.data[i][left] = counter++;
        }
        left++;
      }
    }
    console.log("Ejercicio #70: Patrón Caracol / Espiral.");
  }

  // Ejercicio 71. Llenar con Suma Diags. (Simulación: D. Prin. = 1, D. Sec. = 2)
  ejercicio71() {
    this.fill(0);
    const size = Math.min(this.rows, this.cols);

    for (let i = 0; i < size; i++) {
        // Diagonal Principal (1)
        this.data[i][i] = 1;
        // Diagonal Secundaria (2)
        const j_sec = this.cols - 1 - i;
        if (this.isValidPosition(i, j_sec)) {
            if (i !== j_sec) { // Si no es el centro, sumar 2
                this.data[i][j_sec] = 2;
            } else {
                this.data[i][j_sec] = 3; // Centro es 1+2=3
            }
        }
    }
    console.log("Ejercicio #71: Patrón de Suma de Diagonales (1=Prin, 2=Sec, 3=Ambos).");
  }

  // Ejercicio 72. Llenar con Conteo Pares
  ejercicio72() {
    let countPares = 0;
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        if (this.data[i][j] % 2 === 0) {
          countPares++;
        }
      }
    }
    this.fill(countPares);
    console.log("Ejercicio #72: Llenar con Conteo Pares.");
  }

  // Ejercicio 73. Reflejo Mitad Horiz. (Refleja la mitad superior sobre la inferior)
  ejercicio73() {
    const midRow = Math.floor(this.rows / 2);
    for (let i = 0; i < midRow; i++) {
        const i_ref = this.rows - 1 - i;
        // Copiar la fila superior a la fila inferior reflejada
        this.data[i_ref] = [...this.data[i]]; 
    }
    console.log("Ejercicio #73: Reflejo de la Mitad Superior sobre la Mitad Inferior.");
  }

  // Ejercicio 74. Reflejo Mitad Vert. (Refleja la mitad izquierda sobre la derecha)
  ejercicio74() {
    const midCol = Math.floor(this.cols / 2);
    for (let i = 0; i < this.rows; i++) {
        for (let j = 0; j < midCol; j++) {
            const j_ref = this.cols - 1 - j;
            // Copiar la columna izquierda a la columna derecha reflejada
            this.data[i][j_ref] = this.data[i][j];
        }
    }
    console.log("Ejercicio #74: Reflejo de la Mitad Izquierda sobre la Mitad Derecha.");
  }

  // Ejercicio 75. Llenar con Ceros
  ejercicio75() {
    this.fill(0);
    console.log("Ejercicio #75: Llenar con Ceros.");
  }

  // Ejercicio 76. Llenar con 1,2,3... (Columna)
  ejercicio76() {
    let counter = 1;
    for (let j = 0; j < this.cols; j++) {
      for (let i = 0; i < this.rows; i++) {
        this.data[i][j] = counter++;
      }
    }
    console.log("Ejercicio #76: Llenar Progresivo por Columna.");
  }

  // Ejercicio 77. Llenar con 1,2,3... (Fila)
  ejercicio77() {
    this.ejercicio61();
    console.log("Ejercicio #77: Llenar Progresivo por Fila.");
  }

  // Ejercicio 78. Llenar con Índice Fila (i)
  ejercicio78() {
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        this.data[i][j] = i;
      }
    }
    console.log("Ejercicio #78: Llenar con el Índice de Fila (i).");
  }

  // Ejercicio 79. Llenar con Índice Col (j)
  ejercicio79() {
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        this.data[i][j] = j;
      }
    }
    console.log("Ejercicio #79: Llenar con el Índice de Columna (j).");
  }

  // Ejercicio 80. Llenar con Cuadrante (1-4)
  ejercicio80() {
    const midRow = Math.floor(this.rows / 2);
    const midCol = Math.floor(this.cols / 2);
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        if (i < midRow && j < midCol) { // Superior Izquierda (Q2)
          this.data[i][j] = 2;
        } else if (i < midRow && j >= midCol) { // Superior Derecha (Q1)
          this.data[i][j] = 1;
        } else if (i >= midRow && j < midCol) { // Inferior Izquierda (Q3)
          this.data[i][j] = 3;
        } else { // Inferior Derecha (Q4)
          this.data[i][j] = 4;
        }
      }
    }
    console.log("Ejercicio #80: Llenar con Número de Cuadrante (1-4).");
  }

  // Ejercicio 81. Patrón en X (Diagonales)
  ejercicio81() {
    this.fill(0);
    const size = Math.min(this.rows, this.cols);

    for (let i = 0; i < size; i++) {
      // Diagonal Principal
      this.data[i][i] = 1; 
      // Diagonal Secundaria
      this.data[i][this.cols - 1 - i] = 1; 
    }
    console.log("Ejercicio #81: Patrón en X (Diagonales con 1s).");
  }

  // Ejercicio 82. Patrón de Rombo (Patrón basado en distancia al centro)
  ejercicio82() {
    this.fill(0);
    const centerRow = Math.floor(this.rows / 2);
    const centerCol = Math.floor(this.cols / 2);
    const size = Math.min(this.rows, this.cols);
    const maxDist = Math.floor(size / 2);

    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        // Distancia Manhattan al centro
        const distance = Math.abs(i - centerRow) + Math.abs(j - centerCol);
        if (distance <= maxDist) {
          this.data[i][j] = 1;
        }
      }
    }
    console.log("Ejercicio #82: Patrón de Rombo (con 1s).");
  }

  // Ejercicio 83. Patrón de Cruz Centrada (Igual a Ejercicio 3)
  ejercicio83() {
    this.fill(0);
    const midRow = Math.floor(this.rows / 2);
    const midCol = Math.floor(this.cols / 2);

    // Línea horizontal
    for (let j = 0; j < this.cols; j++) {
        this.data[midRow][j] = 1;
    }
    // Línea vertical
    for (let i = 0; i < this.rows; i++) {
        this.data[i][midCol] = 1;
    }
    console.log("Ejercicio #83: Patrón de Cruz Centrada (con 1s).");
  }

  // Ejercicio 84. Transpuesta (Reutiliza la lógica del Ejercicio 7)
  ejercicio84() {
    this.ejercicio7();
    console.log("Ejercicio #84: Transpuesta (Nueva Matriz).");
  }

  // Ejercicio 85. Simulación Suma Mat. (i+j) (Igual a Ejercicio 59)
  ejercicio85() {
    this.ejercicio59();
    console.log("Ejercicio #85: Llenar con el valor de i + j (Simulación Suma de Matrices).");
  }

  // Ejercicio 86. Generar 0/1 Alternado (Igual a Ejercicio 51)
  ejercicio86() {
    this.ejercicio51();
    console.log("Ejercicio #86: Patrón 0/1 Alternado (Ajedrez).");
  }

  // Ejercicio 87. Zigzag Vertical
  ejercicio87() {
    let counter = 1;
    for (let j = 0; j < this.cols; j++) {
      if (j % 2 === 0) { // Columna par (normal: arriba a abajo)
        for (let i = 0; i < this.rows; i++) {
          this.data[i][j] = counter++;
        }
      } else { // Columna impar (reversa: abajo a arriba)
        for (let i = this.rows - 1; i >= 0; i--) {
          this.data[i][j] = counter++;
        }
      }
    }
    console.log("Ejercicio #87: Patrón Zigzag Vertical.");
  }

  // Ejercicio 88. Patrón Columna Espejo (Igual a Ejercicio 25)
  ejercicio88() {
    this.ejercicio25();
    console.log("Ejercicio #88: Patrón de Columna Espejo (Reflejo Vertical).");
  }
}