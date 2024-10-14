function crearTablero(n) {
    return Array.from({ length: n }, () => Array(n).fill(0));
}

function insertCelula(matrix, row, col) {
    const n = matrix.length;

    if (row >= 0 && row < n && col >= 0 && col < n) {
        matrix[row][col] = 1;
    } else {
        console.log("Coordenadas fuera de límites");
    }
}

function imprimirMatriz(matrix) {
    const n = matrix.length;
    for (let i = 0; i < n; i++) {
        let fila = '';
        for (let j = 0; j < n; j++) {
            fila += matrix[i][j] === 0 ? '· ' : '■ ';
        }
        console.log(fila.trim());
    }
}

function contarVecinosVivos(matrix, row, col) {
    const n = matrix.length;
    let vecinosVivos = 0;

    for (let i = -1; i <= 1; i++) {
        for (let j = -1; j <= 1; j++) {
            if (i === 0 && j === 0) continue; 

            const nuevaFila = row + i;
            const nuevaCol = col + j;

            if (nuevaFila >= 0 && nuevaFila < n && nuevaCol >= 0 && nuevaCol < n) {
                vecinosVivos += matrix[nuevaFila][nuevaCol];
            }
        }
    }

    return vecinosVivos;
}

function procesarGeneracion(matrix) {
    const n = matrix.length;
    const nuevoTablero = crearTablero(n);

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            const vecinosVivos = contarVecinosVivos(matrix, i, j);
            const celulaActual = matrix[i][j];

            if (celulaActual === 1) {
                if (vecinosVivos < 2 || vecinosVivos > 3) {
                    nuevoTablero[i][j] = 0; 
                } else {
                    nuevoTablero[i][j] = 1; 
                }
            } else {
                if (vecinosVivos === 3) {
                    nuevoTablero[i][j] = 1;
                }
            }
        }
    }

    return nuevoTablero;
}

function insertLista(matrix, listaDeCeldas) {
    for (let [row, col] of listaDeCeldas) {
        insertCelula(matrix, row, col);
    }
}

let juegoEnCurso = false;
let intervaloId = null;

function iniciarJuego(matrix, intervaloTiempo) {
    if (!juegoEnCurso) {
        juegoEnCurso = true;
        intervaloId = setInterval(() => {
            matrix = procesarGeneracion(matrix);
            imprimirMatriz(matrix);
            console.log("\n🅽ᵘᵉᵛᵃ 𝕲 𝐞𝐧𝐞𝐫𝐚𝐜𝐢𝐨𝐧 ⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯\n");
        }, intervaloTiempo);
    }
}

function pausarJuego() {
    if (juegoEnCurso) {
        clearInterval(intervaloId);
        juegoEnCurso = false;
    }
}

function esTableroIgual(tablero1, tablero2) {
    const n = tablero1.length;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (tablero1[i][j] !== tablero2[i][j]) {
                return false;
            }
        }
    }
    return true;
}

function detenerSiEstable(matrix) {
    let generacionAnterior = crearTablero(matrix.length);
    let intervaloId = setInterval(() => {
        const nuevaGeneracion = procesarGeneracion(matrix);
        if (esTableroIgual(generacionAnterior, nuevaGeneracion)) {
            clearInterval(intervaloId);
            console.log("El tablero ha alcanzado un estado estable.");
        } else {
            generacionAnterior = matrix;
            matrix = nuevaGeneracion;
            imprimirMatriz(matrix);
        }
    }, 500);
}

module.exports = {
    crearTablero,
    insertCelula,
    imprimirMatriz,
    insertLista,
    insertCelula,
    procesarGeneracion,
    iniciarJuego,
    pausarJuego
};