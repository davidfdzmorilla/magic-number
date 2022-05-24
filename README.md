# Magic Number App

Trabajo en React realizado para prueba técnica.\
Crear una una aplicación web con un formulario en el que se pueda introducir un número entre 1 y 10000000000 y que al enviar dicho formulario la aplicación tendrá que "adivinar" el número que se ha introducido cumpliendo las siguientes reglas:

- El valor introducido se almacenará en una variable. No se modificará ni copiará ni clonará para devolver el valor introducido.
- La aplicación hará una comprobación matemática con otros números para poder adivinar el resultado final (ver ejemplo).
- La aplicación deberá calcular el resultado de la forma más rápida y eficiente posible.

Un ejemplo de cómo calcular el número de un modo nada eficiente y, por tanto, no correcta:\


const min = 1\
const max = 10000000000\

for (let i = min; i <= max; i++) {\
        if(i === valorintroducido){\
            return i\
        }\
}




# Primeros pasos

En el directorio del proyecto, puede ejecutar:

### `npm install`

Instala dependencias.

### `npm start`

Ejecuta la aplicación en el modo de desarrollo.\
Abra [http://localhost:3000](http://localhost:3000) para verlo en su navegador.

### `npm test`

Inicia test.

### `npm run build`

Construye la aplicación para producción en la carpeta `build`.\
Empaqueta correctamente React en modo de producción y optimiza la compilación para obtener el mejor rendimiento.

