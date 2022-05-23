


const guessNumber = (min, max, number) => {

  /*Primera condición de si max es mayor o igual a min*/
  if (max >= min) {

    /*Si la condicion se cumple calculo a mitades ya sea para abajo o para arriba*/
    let middle = min + Math.floor((max - min) / 2)

    /* Condición si mitad es igual a n*/
    if (middle === number) {
      return middle
    }

    /*Condicion de que mitad es mayor a n*/
    if (middle > number) {

      /*Vuelvo a ejecutar la función con middle -1 porque middle ya está comprobado y quiero seguir comprobando para abajo*/
      return guessNumber(min, middle - 1, number)
    }

    /*Si n es mayor a mitad ejecuta de nuevo la función*/
    if (number > middle) {

      /*Ahora min es la mitad*/
      return guessNumber(middle + 1, max, number)
    }
  }

  /*Si no hay coincidencias o error retorna -1 o false*/
  return - 1

}

export default guessNumber