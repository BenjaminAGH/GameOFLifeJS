---

# 🦠 Game of Life - Implementación en JS 🦠

Implementación en JavaScript del **Juego de la Vida** de John Conway. Con visualización por terminal e ingreso del estado inicial mediante un archivo `main.js`
---

## 🌟 Funcionalidades principales

### 📋 Reglas del Juego de la Vida

El **Juego de la Vida** es un autómata celular que sigue estas reglas:

1. **Superpoblación**: Una célula viva con más de 3 vecinos vivos muere (por sobrepoblación).
2. **Soledad**: Una célula viva con menos de 2 vecinos vivos muere (por soledad).
3. **Reproducción**: Una célula muerta con exactamente 3 vecinos vivos nace.
4. **Supervivencia**: Una célula viva con 2 o 3 vecinos vivos sobrevive.

### 🛠 Funciones Principales

#### 1. `crearTablero(n)`
Crea un tablero de `n x n` inicializado con todas las células muertas (`0`).

```javascript
let tableroJuego = crearTablero(40);
```

#### 2. `insertCelula(matrix, row, col)`
Inserta una célula viva (`1`) en una posición específica del tablero.

```javascript
insertCelula(tableroJuego, 5, 10);
```

#### 3. `insertarCeldasManualmente(matrix, listaDeCeldas)`
Permite insertar múltiples células vivas en posiciones específicas. La lista de células debe estar en formato de coordenadas `[fila, columna]`.

```javascript
insertarCeldasManualmente(tableroJuego, [
    [5, 1], [6, 1], [7, 1]  // Ejemplo de inserción de varias células
]);
```

#### 4. `imprimirMatriz(matrix)`
Imprime el estado actual del tablero en la consola, utilizando `·` para las células muertas y `1` para las células vivas.

```javascript
imprimirMatriz(tableroJuego);
```

#### 5. `iniciarJuego(matrix, intervaloTiempo)`
Inicia el juego y actualiza la simulación automáticamente cada `intervaloTiempo` milisegundos. Este método llama a `procesarGeneracion` de manera continua para generar nuevas generaciones.

```javascript
iniciarJuego(tableroJuego, 1000);  // Avanza el juego cada 1 segundo
```

---

## 🚀 Ejemplo: Fábrica de Naves Espaciales (Glider Gun)

Para insertar una **fábrica de naves espaciales** en el tablero, solo debes agregar las siguientes coordenadas usando la función `insertarCeldasManualmente`.

```javascript
let tableroJuego = crearTablero(40);  // Crear un tablero de 40x40

// Insertar nave espacial 
gameOfLife.insertLista(tableroJuego, [
    [1, 2],
    [2, 3],
    [3, 1], [3, 2], [3, 3],
]);

imprimirMatriz(tableroJuego);

// Iniciar el juego con un intervalo de 1 segundo
iniciarJuego(tableroJuego, 1000);
```

---

## 📝 Uso del Proyecto

1. Clona este repositorio en tu máquina local.
2. Ejecuta el archivo `main.js` en un entorno de Node.js.
3. Observa el tablero en la consola, donde las células se actualizarán según las reglas del Juego de la Vida.

### Ejecución básica:

```bash
node main.js
```
---

## 📖 Referencias

- [John Conway's Game of Life](https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life) - Información sobre las reglas y los patrones del juego.
---

Disfruta explorando el comportamiento de autómatas celulares y experimenta con diferentes configuraciones para ver cómo emergen patrones complejos en el **Juego de la Vida**. 🌟

---

