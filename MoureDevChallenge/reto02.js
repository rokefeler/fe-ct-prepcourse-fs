/*
 * Escribe un programa que muestre cómo transcurre un juego de tenis y quién lo ha ganado.
 * El programa recibirá una secuencia formada por "P1" (Player 1) o "P2" (Player 2), según quien
 * gane cada punto del juego.
 *
 * - Las puntuaciones de un juego son "Love" (cero), 15, 30, 40, "Deuce" (empate), ventaja.
 * - Ante la secuencia [P1, P1, P2, P2, P1, P2, P1, P1], el programa mostraría lo siguiente:
 *                      15  30  15  30  40  40  ventaja ventaja
 *   15 - Love
 *   30 - Love
 *   30 - 15
 *   30 - 30
 *   40 - 30
 *   Deuce
 *   Ventaja P1
 *   Ha ganado el P1
 * - Si quieres, puedes controlar errores en la entrada de datos.
 * - Consulta las reglas del juego si tienes dudas sobre el sistema de puntos.
 * **********Reglas del Juego Adicional ***********************
 * En el tenis, cada punto se cuenta como 0, 15, 30, 40 y al siguiente punto, se termina el juego.
 * En caso de que se produzca un empate a 40-40, un jugador tendrá que ganar dos puntos seguidos para
 * llevarse ese juego (ventaja-punto).
 * El objetivo del partido es que uno de los jugadores (o equipos) gane 6 juegos para ganar un set. Los partidos pueden ser o bien a 3 sets o bien a 5 sets, así que en función de este, un jugador puede ganar 2 ó 3 sets en función de la competición.
 */
const jugarTennis = (secuencia) => {
  let puntuacionP1 = 0;
  let puntuacionP2 = 0;
  let n = 0;

  for (const punto of secuencia) {
    n++;
    if (punto === "P1") {
      puntuacionP1++;
    } else if (punto === "P2") {
      puntuacionP2++;
    } else {
      console.log("Entrada no válida: " + punto);
      continue;
    }

    if (puntuacionP1 === puntuacionP2 && n > 4) {
      console.log("Deuce");
    } else {
      console.log(
        puntuacionToString(puntuacionP1) +
          " - " +
          puntuacionToString(puntuacionP2)
      );
    }
  }

  console.log(">>>>>>>>>>Resultado Final<<<<<<<<<<");
  if (puntuacionP1 > puntuacionP2 + 2) {
    console.log("Ha ganado el P1");
  } else if (puntuacionP2 > puntuacionP1 + 2) {
    console.log("Ha ganado el P2");
  } else {
    console.log("Deuce");
  }
};

function puntuacionToString(puntuacion) {
  switch (puntuacion) {
    case 0:
      return "Love";
    case 1:
      return "15";
    case 2:
      return "30";
    case 3:
      return "40";
    default:
      return "Ventaja";
  }
}

// Prueba con la secuencia dada
const secuencia = ["P1", "P1", "P2", "P2", "P1", "P2", "P1", "P1"];
console.log("Secuencia:", secuencia);
jugarTennis(secuencia);
