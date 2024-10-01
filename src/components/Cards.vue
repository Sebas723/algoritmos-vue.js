<script>

import {
  firstAlgoritm, secondAlgoritm, thirdAlgoritm,
  fourthAlgoritm, fifthAlgoritm, sixthAlgoritm,
  seventhAlgoritm, eighthAlgoritm, ninthAlgoritm,
  tenthAlgoritm, eleventhAlgoritm, twelfthAlgoritm,
  thirteenthAlgoritm, fourteenthAlgoritm, fifteenthAlgoritm,
  sixteenthAlgoritm, seventeenthAlgoritm, eighteenthAlgoritm,
  nineteenthAlgoritm, twentiethAlgortim
} from "./js/algoritmos_basicos.js";

import { onMounted } from 'vue';

export default {
  setup() {
    // Función que ajusta las columnas del grid
    const adjustGridColumns = () => {
    const gridContainers = document.querySelectorAll(".grid-container"); // Selecciona todos los elementos
    const screenWidth = window.innerWidth;

    gridContainers.forEach(gridContainer => {
    gridContainer.classList.remove('grid-cols-1', 'grid-cols-2', 'grid-cols-3', 'grid-cols-4', 'grid-cols-6');

    if (screenWidth < 1000) {
      gridContainer.classList.add('grid-cols-1');
    } else if (screenWidth >= 1000 && screenWidth < 1300) {
      gridContainer.classList.add('grid-cols-2');
    } else {
      gridContainer.classList.add('grid-cols-3');
    }
  });
};

    onMounted(() => {
      adjustGridColumns();
      window.addEventListener('resize', adjustGridColumns);
    });
  },

  methods: {
    firstAlgoritm, secondAlgoritm, thirdAlgoritm,
    fourthAlgoritm, fifthAlgoritm, sixthAlgoritm,
    seventhAlgoritm, eighthAlgoritm, ninthAlgoritm,
    tenthAlgoritm, eleventhAlgoritm, twelfthAlgoritm,
    thirteenthAlgoritm, fourteenthAlgoritm, fifteenthAlgoritm,
    sixteenthAlgoritm, seventeenthAlgoritm, eighteenthAlgoritm,
    nineteenthAlgoritm, twentiethAlgortim
  }
};
</script>


<template>
  <!--Cards Container-->
  <section class="basic-algoritms-section grid-container w-[90vw] m-auto grid grid-cols-3 gap-5 p-4">
    <!-- Cards-->
    <!-- firstAlgoritm -->
    <div
      class="card bg-[#F5F5F5] h-[440px] w-[100%] relative rounded-[30px] border-solid border-[1px] border-[#cecece]">
      <img src="../assets/img/LogoSENA-naranja_PNG-1839613.webp" alt=""
        class=" object-cover h-[100%] w-[100%] absolute z-1">
      <div
        class="card-content relative z-[3] opacity-0 h-full translate-y-[30px] transition-all duration-500 flex flex-col text-center p-[8px] gap-[15px]">
        <h3 class=" text-[35px] m-[5px] font-semibold text-[#424242]">Imprimir "Hola, mundo!"</h3>
        <p class="text-[16px] text-[#424242]">
          Este algoritmo simple consiste en mostrar el texto "Hola, mundo!" en la pantalla. Normalmente
          se utiliza para verificar que el entorno de programación esté configurado correctamente y, existen varias
          formar de
          mostrar un valor, como pueden ser console.log() que imprime en la consola del navegador o document.write() que
          muestra
          lo que desees directamente en el documento HTML. Para este ejemplo estamos usando alert("Hola, mundo!"), que
          imprime el valor en una pequeña
          ventana modal.
        </p>
        <div
          class="bg-[#424242] text-white border-none rounded-[10px] text-[20px] m-auto pt-[4px] pb-[4px] pl-[16px] pr-[16px] transition-[.5s] hover:cursor-pointer hover:bg-[#8d8d8d]">
          <button @click="firstAlgoritm()">Testear</button>
        </div>
      </div>
    </div>

    <!-- secondAlgoritm -->
    <div
      class="card bg-[#F5F5F5] h-[440px] w-[100%] relative rounded-[30px] border-solid border-[1px] border-[#cecece]">
      <img src="../assets/img/LogoSENA-naranja_PNG-1839613.webp" alt=""
        class=" object-cover h-[100%] w-[100%] absolute z-1">
      <div
        class="card-content relative z-[3] opacity-0 h-full translate-y-[30px] transition-all duration-500 flex flex-col text-center p-[8px] gap-[15px]">
        <h3 class=" text-[35px] m-[5px] font-semibold text-[#424242]">Preguntar un número y mostrarlo en pantalla</h3>
        <p class="text-[16px] text-[#424242]">
          Este algoritmo solicita al usuario que ingrese un número mediante una interfaz de entrada,
          como un cuadro de diálogo o un formulario. Una vez que el usuario proporciona el número, el
          algoritmo lo captura y lo muestra en la pantalla utilizando una función de salida. Es una operación
          básica que permite la interacción con el usuario, recolectando datos y presentándolos de manera clara.
          En esencia, el proceso consiste en solicitar la entrada del usuario, capturar esa entrada y luego desplegarla
          para que el usuario pueda verla.
        </p>
        <div
          class="bg-[#424242] text-white border-none rounded-[10px] text-[20px] m-auto pt-[4px] pb-[4px] pl-[16px] pr-[16px] transition-[.5s] hover:cursor-pointer hover:bg-[#8d8d8d]">
          <button @click="secondAlgoritm()">Testear</button>
        </div>
      </div>
    </div>

    <!-- thirdAlgoritm -->
    <div
      class="card bg-[#F5F5F5] h-[440px] w-[100%] relative rounded-[30px] border-solid border-[1px] border-[#cecece]">
      <img src="../assets/img/LogoSENA-naranja_PNG-1839613.webp" alt=""
        class=" object-cover h-[100%] w-[100%] absolute z-1">
      <div
        class="card-content relative z-[3] opacity-0 h-full translate-y-[30px] transition-all duration-500 flex flex-col text-center p-[8px] gap-[15px]">
        <h3 class=" text-[35px] m-[5px] font-semibold text-[#424242]">Sumar Números</h3>
        <p class="text-[16px] text-[#424242]">
          Este algoritmo se encarga de sumar una serie de números proporcionados por el usuario. Primero, solicita al
          usuario que ingrese los números, que pueden ser introducidos uno por uno o en una lista. Luego, captura cada
          número y lo acumula en una variable de suma. Finalmente, muestra el resultado total de la suma en la pantalla.
          Este proceso implica una entrada de datos, un ciclo para sumar los números y una salida que presenta el
          resultado
          de la suma. Es útil para tareas básicas de cálculo donde se necesita sumar múltiples valores.

        </p>
        <div
          class="bg-[#424242] text-white border-none rounded-[10px] text-[20px] m-auto pt-[4px] pb-[4px] pl-[16px] pr-[16px] transition-[.5s] hover:cursor-pointer hover:bg-[#8d8d8d]">
          <button @click="thirdAlgoritm()">Testear</button>
        </div>
      </div>
    </div>

    <!-- fourthAlgoritm -->
    <div
      class="card bg-[#F5F5F5] h-[440px] w-[100%] relative rounded-[30px] border-solid border-[1px] border-[#cecece]">
      <img src="../assets/img/LogoSENA-naranja_PNG-1839613.webp" alt=""
        class=" object-cover h-[100%] w-[100%] absolute z-1">
      <div
        class="card-content relative z-[3] opacity-0 h-full translate-y-[30px] transition-all duration-500 flex flex-col text-center p-[8px] gap-[15px]">
        <h3 class=" text-[35px] m-[5px] font-semibold text-[#424242]">Restar Números</h3>
        <p class="text-[16px] text-[#424242]">
          Este algoritmo se utiliza para restar una serie de números proporcionados por el usuario. Comienza
          solicitando al usuario que ingrese los números que se desean restar, típicamente comenzando con un
          número inicial del cual se harán las restas sucesivas. Luego, el algoritmo captura cada número y lo
          sustrae del total acumulado. Finalmente, muestra el resultado final de la resta en la pantalla. El proceso
          incluye una entrada de datos, un ciclo para realizar las restas sucesivas, y una salida que presenta el
          resultado.
          Es útil para operaciones de cálculo en las que se requiere restar varios valores de un número base.
        </p>
        <div
          class="bg-[#424242] text-white border-none rounded-[10px] text-[20px] m-auto pt-[4px] pb-[4px] pl-[16px] pr-[16px] transition-[.5s] hover:cursor-pointer hover:bg-[#8d8d8d]">
          <button @click="fourthAlgoritm()">Testear</button>
        </div>
      </div>
    </div>

    <!-- fifthAlgoritm -->
    <div
      class="card bg-[#F5F5F5] h-[440px] w-[100%] relative rounded-[30px] border-solid border-[1px] border-[#cecece]">
      <img src="../assets/img/LogoSENA-naranja_PNG-1839613.webp" alt=""
        class=" object-cover h-[100%] w-[100%] absolute z-1">
      <div
        class="card-content relative z-[3] opacity-0 h-full translate-y-[30px] transition-all duration-500 flex flex-col text-center p-[8px] gap-[15px]">
        <h3 class=" text-[35px] m-[5px] font-semibold text-[#424242]">Restar Números</h3>
        <p class="text-[16px] text-[#424242]">
          Este algoritmo está diseñado para multiplicar una serie de números proporcionados por el usuario.
          Primero, solicita al usuario que ingrese los números que desea multiplicar, los cuales pueden ser
          ingresados uno por uno o en una lista. Luego, el algoritmo captura cada número y lo multiplica por el
          resultado acumulado.
          Finalmente, muestra el producto total en la pantalla. El proceso implica una entrada de datos, un ciclo para
          multiplicar los
          números sucesivamente, y una salida que presenta el resultado. Es útil para operaciones de cálculo donde se
          requiere obtener el
          producto de varios valores.
        </p>
        <div
          class="bg-[#424242] text-white border-none rounded-[10px] text-[20px] m-auto pt-[4px] pb-[4px] pl-[16px] pr-[16px] transition-[.5s] hover:cursor-pointer hover:bg-[#8d8d8d]">
          <button @click="fifthAlgoritm()">Testear</button>
        </div>
      </div>
    </div>

    <!-- sixthAlgoritm -->
    <div
      class="card bg-[#F5F5F5] h-[440px] w-[100%] relative rounded-[30px] border-solid border-[1px] border-[#cecece]">
      <img src="../assets/img/LogoSENA-naranja_PNG-1839613.webp" alt=""
        class=" object-cover h-[100%] w-[100%] absolute z-1">
      <div
        class="card-content relative z-[3] opacity-0 h-full translate-y-[30px] transition-all duration-500 flex flex-col text-center p-[8px] gap-[15px]">
        <h3 class=" text-[35px] m-[5px] font-semibold text-[#424242]">Dividir Números</h3>
        <p class="text-[16px] text-[#424242]">
          Este algoritmo realiza la división de una serie de números proporcionados por el usuario. Primero,
          solicita al usuario que ingrese el número inicial que será el dividendo y, a continuación, los números
          con los que se desea dividir. Luego, el algoritmo captura cada divisor y divide el resultado acumulado por
          este divisor sucesivamente. Finalmente, muestra el cociente total en la pantalla. Es importante manejar
          correctamente
          las divisiones por cero para evitar errores. El proceso incluye la entrada de datos, un ciclo para realizar
          las divisiones,
          y una salida que presenta el resultado final. Este algoritmo es útil para operaciones en las que se requiere
          dividir un valor
          entre varios números.
        </p>
        <div
          class="bg-[#424242] text-white border-none rounded-[10px] text-[20px] m-auto pt-[4px] pb-[4px] pl-[16px] pr-[16px] transition-[.5s] hover:cursor-pointer hover:bg-[#8d8d8d]">
          <button @click="sixthAlgoritm()">Testear</button>
        </div>
      </div>
    </div>

    <!-- seventhAlgoritm -->
    <div
      class="card bg-[#F5F5F5] h-[440px] w-[100%] relative rounded-[30px] border-solid border-[1px] border-[#cecece]">
      <img src="../assets/img/LogoSENA-naranja_PNG-1839613.webp" alt=""
        class=" object-cover h-[100%] w-[100%] absolute z-1">
      <div
        class="card-content relative z-[3] opacity-0 h-full translate-y-[30px] transition-all duration-500 flex flex-col text-center p-[8px] gap-[15px]">
        <h3 class=" text-[35px] m-[5px] font-semibold text-[#424242]">Calcular área (Rectangulo)</h3>
        <p class="text-[16px] text-[#424242]">
          Este algoritmo calcula el área de un rectángulo dado su ancho y alto. Primero, solicita al usuario que
          ingrese las dimensiones del rectángulo: el ancho y el alto. Luego, multiplica estos dos valores para obtener
          el área. Finalmente, muestra el resultado en la pantalla. El proceso implica la entrada de datos, una
          operación matemática (multiplicación) para calcular el área, y una salida que presenta el resultado. Este
          algoritmo es útil para tareas que requieren el cálculo de áreas en geometría básica y aplicaciones de diseño.
        </p>
        <div
          class="bg-[#424242] text-white border-none rounded-[10px] text-[20px] m-auto pt-[4px] pb-[4px] pl-[16px] pr-[16px] transition-[.5s] hover:cursor-pointer hover:bg-[#8d8d8d]">
          <button @click="seventhAlgoritm()">Testear</button>
        </div>
      </div>
    </div>

    <!-- eighthAlgoritm -->
    <div
      class="card bg-[#F5F5F5] h-[440px] w-[100%] relative rounded-[30px] border-solid border-[1px] border-[#cecece]">
      <img src="../assets/img/LogoSENA-naranja_PNG-1839613.webp" alt=""
        class=" object-cover h-[100%] w-[100%] absolute z-1">
      <div
        class="card-content relative z-[3] opacity-0 h-full translate-y-[30px] transition-all duration-500 flex flex-col text-center p-[8px] gap-[15px]">
        <h3 class=" text-[35px] m-[5px] font-semibold text-[#424242]">Calcular perimetro (Cuadrado)</h3>
        <p class="text-[16px] text-[#424242]">
          Este algoritmo calcula el perímetro de un cuadrado dado el valor de uno de sus lados. Primero,
          solicita al usuario que ingrese la longitud del lado del cuadrado. Luego, multiplica este valor por 4,
          ya que un cuadrado tiene cuatro lados de igual longitud. Finalmente, muestra el resultado del cálculo
          del perímetro en la pantalla. El proceso incluye la entrada de datos, una operación matemática
          (multiplicación) para determinar el perímetro, y una salida que presenta el resultado. Este algoritmo
          es útil para tareas relacionadas con la geometría básica y cálculos de dimensiones de formas cuadradas.
        </p>
        <div
          class="bg-[#424242] text-white border-none rounded-[10px] text-[20px] m-auto pt-[4px] pb-[4px] pl-[16px] pr-[16px] transition-[.5s] hover:cursor-pointer hover:bg-[#8d8d8d]">
          <button @click="eighthAlgoritm()">Testear</button>
        </div>
      </div>
    </div>

    <!-- ninthAlgoritm -->
    <div
      class="card bg-[#F5F5F5] h-[440px] w-[100%] relative rounded-[30px] border-solid border-[1px] border-[#cecece]">
      <img src="../assets/img/LogoSENA-naranja_PNG-1839613.webp" alt=""
        class=" object-cover h-[100%] w-[100%] absolute z-1">
      <div
        class="card-content relative z-[3] opacity-0 h-full translate-y-[30px] transition-all duration-500 flex flex-col text-center p-[8px] gap-[15px]">
        <h3 class=" text-[35px] m-[5px] font-semibold text-[#424242]">Numero par o impar</h3>
        <p class="text-[16px] text-[#424242]">
          Este algoritmo determina si un número ingresado por el usuario es par o impar. Primero,
          solicita al usuario que ingrese un número. Luego, verifica si el número es divisible por 2
          sin dejar un residuo. Esto se hace utilizando el operador módulo (%), que calcula el residuo
          de la división del número entre 2. Si el residuo es 0, el número es par; de lo contrario, es impar.
          Finalmente, muestra el resultado en la pantalla, indicando si el número es par o impar. Este algoritmo
          es útil para clasificar números según su divisibilidad por 2.
        </p>
        <div
          class="bg-[#424242] text-white border-none rounded-[10px] text-[20px] m-auto pt-[4px] pb-[4px] pl-[16px] pr-[16px] transition-[.5s] hover:cursor-pointer hover:bg-[#8d8d8d]">
          <button @click="ninthAlgoritm()">Testear</button>
        </div>
      </div>
    </div>

    <!-- eleventhAlgoritm -->
    <div
      class="card bg-[#F5F5F5] h-[440px] w-[100%] relative rounded-[30px] border-solid border-[1px] border-[#cecece]">
      <img src="../assets/img/LogoSENA-naranja_PNG-1839613.webp" alt=""
        class=" object-cover h-[100%] w-[100%] absolute z-1">
      <div
        class="card-content relative z-[3] opacity-0 h-full translate-y-[30px] transition-all duration-500 flex flex-col text-center p-[8px] gap-[15px]">
        <h3 class=" text-[35px] m-[5px] font-semibold text-[#424242]">Numero mayor</h3>
        <p class="text-[16px] text-[#424242]">
          Este algoritmo determina el número mayor entre dos valores proporcionados por el usuario. Primero,
          solicita al usuario que ingrese dos números. Luego, compara los dos números utilizando una estructura
          condicional. Si el primer número es mayor que el segundo, muestra el primer número como el mayor;
          si el segundo número es mayor, muestra el segundo número como el mayor. Finalmente, presenta el
          resultado en la pantalla. Este proceso incluye la entrada de datos, una comparación de los
          números, y una salida que muestra cuál de los dos números es el mayor. Este algoritmo es útil
          para comparaciones simples entre dos valores numéricos.
        </p>
        <div
          class="bg-[#424242] text-white border-none rounded-[10px] text-[20px] m-auto pt-[4px] pb-[4px] pl-[16px] pr-[16px] transition-[.5s] hover:cursor-pointer hover:bg-[#8d8d8d]">
          <button @click="eleventhAlgoritm()">Testear</button>
        </div>
      </div>
    </div>

    <!-- twelfthAlgoritm -->
    <div
      class="card bg-[#F5F5F5] h-[440px] w-[100%] relative rounded-[30px] border-solid border-[1px] border-[#cecece]">
      <img src="../assets/img/LogoSENA-naranja_PNG-1839613.webp" alt=""
        class=" object-cover h-[100%] w-[100%] absolute z-1">
      <div
        class="card-content relative z-[3] opacity-0 h-full translate-y-[30px] transition-all duration-500 flex flex-col text-center p-[8px] gap-[15px]">
        <h3 class=" text-[35px] m-[5px] font-semibold text-[#424242]">Positivo, negativo o cero</h3>
        <p class="text-[16px] text-[#424242]">
          Este algoritmo clasifica un número ingresado por el usuario como positivo, negativo o cero. Primero,
          solicita al usuario que ingrese un número. Luego, utiliza una estructura condicional para verificar
          el valor del número. Si el número es mayor que cero, lo clasifica como positivo; si es menor que cero,
          lo clasifica como negativo; y si es igual a cero, lo clasifica como cero. Finalmente, muestra el resultado
          en la pantalla. Este proceso incluye la entrada de datos, una serie de comparaciones, y una salida que
          indica la categoría del número. Este algoritmo es útil para clasificar números en función de su signo.
        </p>
        <div
          class="bg-[#424242] text-white border-none rounded-[10px] text-[20px] m-auto pt-[4px] pb-[4px] pl-[16px] pr-[16px] transition-[.5s] hover:cursor-pointer hover:bg-[#8d8d8d]">
          <button @click="twelfthAlgoritm()">Testear</button>
        </div>
      </div>
    </div>

    <!-- thirteenthAlgoritm -->
    <div
      class="card bg-[#F5F5F5] h-[440px] w-[100%] relative rounded-[30px] border-solid border-[1px] border-[#cecece]">
      <img src="../assets/img/LogoSENA-naranja_PNG-1839613.webp" alt=""
        class=" object-cover h-[100%] w-[100%] absolute z-1">
      <div
        class="card-content relative z-[3] opacity-0 h-full translate-y-[30px] transition-all duration-500 flex flex-col text-center p-[8px] gap-[15px]">
        <h3 class=" text-[35px] m-[5px] font-semibold text-[#424242]">Generar lista de numeros</h3>
        <p class="text-[16px] text-[#424242]">
          Este algoritmo genera una lista de números basada en los parámetros proporcionados por el usuario.
          Primero, solicita al usuario que ingrese el número inicial, el número final y el incremento deseado para la
          lista.
          Luego, utiliza un bucle para iterar desde el número inicial hasta el número final, añadiendo el incremento en
          cada
          iteración para generar los números de la lista. Finalmente, muestra la lista completa de números en la
          pantalla. Este
          proceso incluye la entrada de datos, la generación de la lista mediante un bucle, y una salida que presenta la
          lista de
          números generada. Este algoritmo es útil para crear secuencias numéricas en función de los parámetros
          especificados por el usuario.
        </p>
        <div
          class="bg-[#424242] text-white border-none rounded-[10px] text-[20px] m-auto pt-[4px] pb-[4px] pl-[16px] pr-[16px] transition-[.5s] hover:cursor-pointer hover:bg-[#8d8d8d]">
          <button @click="thirteenthAlgoritm()">Testear</button>
        </div>
      </div>
    </div>

    <!-- fourteenthAlgoritm -->
    <div
      class="card bg-[#F5F5F5] h-[440px] w-[100%] relative rounded-[30px] border-solid border-[1px] border-[#cecece]">
      <img src="../assets/img/LogoSENA-naranja_PNG-1839613.webp" alt=""
        class=" object-cover h-[100%] w-[100%] absolute z-1">
      <div
        class="card-content relative z-[3] opacity-0 h-full translate-y-[30px] transition-all duration-500 flex flex-col text-center p-[8px] gap-[15px]">
        <h3 class=" text-[35px] m-[5px] font-semibold text-[#424242]">Generar tabla multiplicar</h3>
        <p class="text-[16px] text-[#424242]">
          Este algoritmo genera una tabla de multiplicar para un número específico ingresado por el usuario. Primero,
          solicita al usuario que ingrese el número para el cual desea generar la tabla de multiplicar. Luego,
          utiliza un bucle para iterar desde un numero especifico pedido al usuario hasta otro numero especifico que
          ingresa el usuario,
          multiplicando el número ingresado por cada valor del bucle. Los resultados de cada multiplicación se almacenan
          y se muestran en
          formato de tabla. Finalmente, presenta la tabla de multiplicar completa en la pantalla. Este proceso incluye
          la entrada de datos,
          la generación de las multiplicaciones mediante un bucle, y una salida que muestra la tabla de multiplicar.
          Este algoritmo es útil
          para visualizar las tablas de multiplicar de manera organizada.
        </p>
        <div
          class="bg-[#424242] text-white border-none rounded-[10px] text-[20px] m-auto pt-[4px] pb-[4px] pl-[16px] pr-[16px] transition-[.5s] hover:cursor-pointer hover:bg-[#8d8d8d]">
          <button @click="fourteenthAlgoritm()">Testear</button>
        </div>
      </div>
    </div>

    <!-- fifteenthAlgoritm -->
    <div
      class="card bg-[#F5F5F5] h-[440px] w-[100%] relative rounded-[30px] border-solid border-[1px] border-[#cecece]">
      <img src="../assets/img/LogoSENA-naranja_PNG-1839613.webp" alt=""
        class=" object-cover h-[100%] w-[100%] absolute z-1">
      <div
        class="card-content relative z-[3] opacity-0 h-full translate-y-[30px] transition-all duration-500 flex flex-col text-center p-[8px] gap-[15px]">
        <h3 class=" text-[35px] m-[5px] font-semibold text-[#424242]">Generar factorial de un numero</h3>
        <p class="text-[16px] text-[#424242]">
          Este algoritmo calcula el factorial de un número entero ingresado por el usuario. Primero, solicita al usuario
          que ingrese un número entero positivo. Luego, utiliza un bucle para multiplicar todos los números enteros
          positivos
          desde 1 hasta el número ingresado. El resultado de estas multiplicaciones es el factorial del número.
          Finalmente,
          muestra el resultado en la pantalla. El proceso incluye la entrada de datos, el cálculo del factorial mediante
          un bucle, y una salida que presenta el resultado del cálculo. Este algoritmo es útil para calcular el
          factorial,
          que es el producto de todos los números enteros positivos hasta un valor dado.
        </p>
        <div
          class="bg-[#424242] text-white border-none rounded-[10px] text-[20px] m-auto pt-[4px] pb-[4px] pl-[16px] pr-[16px] transition-[.5s] hover:cursor-pointer hover:bg-[#8d8d8d]">
          <button @click="fifteenthAlgoritm()">Testear</button>
        </div>
      </div>
    </div>

    <!-- sixteenthAlgoritm -->
    <div
      class="card bg-[#F5F5F5] h-[440px] w-[100%] relative rounded-[30px] border-solid border-[1px] border-[#cecece]">
      <img src="../assets/img/LogoSENA-naranja_PNG-1839613.webp" alt=""
        class=" object-cover h-[100%] w-[100%] absolute z-1">
      <div
        class="card-content relative z-[3] opacity-0 h-full translate-y-[30px] transition-all duration-500 flex flex-col text-center p-[8px] gap-[15px]">
        <h3 class=" text-[35px] m-[5px] font-semibold text-[#424242]">Invertir cadenas de texto</h3>
        <p class="text-[16px] text-[#424242]">
          Este algoritmo invierte una cadena de texto proporcionada por el usuario. Primero,
          solicita al usuario que ingrese una cadena de texto. Luego, el algoritmo utiliza una técnica para invertir
          la cadena, que puede implicar recorrer la cadena desde el final hacia el principio y construir una nueva
          cadena con los caracteres en orden inverso. Finalmente, muestra la cadena invertida en la pantalla.
          El proceso incluye la entrada de datos, la inversión de la cadena utilizando un bucle o métodos de
          manipulación de cadenas,
          y una salida que presenta la cadena invertida. Este algoritmo es útil para tareas que requieren la inversión
          del
          orden de los caracteres en una cadena de texto.
        </p>
        <div
          class="bg-[#424242] text-white border-none rounded-[10px] text-[20px] m-auto pt-[4px] pb-[4px] pl-[16px] pr-[16px] transition-[.5s] hover:cursor-pointer hover:bg-[#8d8d8d]">
          <button @click="sixteenthAlgoritm()">Testear</button>
        </div>
      </div>
    </div>

    <!-- seventeenthAlgoritm -->
    <div
      class="card bg-[#F5F5F5] h-[440px] w-[100%] relative rounded-[30px] border-solid border-[1px] border-[#cecece]">
      <img src="../assets/img/LogoSENA-naranja_PNG-1839613.webp" alt=""
        class=" object-cover h-[100%] w-[100%] absolute z-1">
      <div
        class="card-content relative z-[3] opacity-0 h-full translate-y-[30px] transition-all duration-500 flex flex-col text-center p-[8px] gap-[15px]">
        <h3 class=" text-[35px] m-[5px] font-semibold text-[#424242]">Determinar promedio</h3>
        <p class="text-[16px] text-[#424242]">
          Este algoritmo calcula el promedio de una serie de números proporcionados por el usuario. Primero,
          solicita al usuario que ingrese la cantidad de números para los cuales se desea calcular el promedio.
          Luego, pide al usuario que ingrese cada uno de los números. Una vez que todos los números han sido ingresados,
          el algoritmo suma todos los valores y divide la suma por la cantidad de números para obtener el promedio.
          Finalmente,
          muestra el promedio en la pantalla. El proceso incluye la entrada de datos, la suma de los números, la
          división para
          calcular el promedio, y una salida que presenta el resultado. Este algoritmo es útil para determinar el
          promedio aritmético
          de un conjunto de valores numéricos.
        </p>
        <div
          class="bg-[#424242] text-white border-none rounded-[10px] text-[20px] m-auto pt-[4px] pb-[4px] pl-[16px] pr-[16px] transition-[.5s] hover:cursor-pointer hover:bg-[#8d8d8d]">
          <button @click="seventeenthAlgoritm()">Testear</button>
        </div>
      </div>
    </div>

    <!-- eighteenthAlgoritm -->
    <div
      class="card bg-[#F5F5F5] h-[440px] w-[100%] relative rounded-[30px] border-solid border-[1px] border-[#cecece]">
      <img src="../assets/img/LogoSENA-naranja_PNG-1839613.webp" alt=""
        class=" object-cover h-[100%] w-[100%] absolute z-1">
      <div
        class="card-content relative z-[3] opacity-0 h-full translate-y-[30px] transition-all duration-500 flex flex-col text-center p-[8px] gap-[15px]">
        <h3 class=" text-[35px] m-[5px] font-semibold text-[#424242]">Calcular el numero de vocales</h3>
        <p class="text-[16px] text-[#424242]">
          Este algoritmo cuenta el número de vocales en una cadena de texto proporcionada por el usuario.
          Primero, solicita al usuario que ingrese una cadena de texto. Luego, recorre cada carácter de la cadena
          y verifica si es una vocal (a, e, i, o, u) en minúscula o mayúscula. Utiliza un contador para llevar la
          cuenta de las vocales encontradas. Finalmente, muestra el total de vocales en la pantalla. El proceso incluye
          la entrada de datos, la iteración sobre los caracteres de la cadena, la verificación y conteo de vocales, y
          una
          salida que presenta el número total de vocales. Este algoritmo es útil para analizar y contar vocales en un
          texto.
        </p>
        <div
          class="bg-[#424242] text-white border-none rounded-[10px] text-[20px] m-auto pt-[4px] pb-[4px] pl-[16px] pr-[16px] transition-[.5s] hover:cursor-pointer hover:bg-[#8d8d8d]">
          <button @click="eighteenthAlgoritm()">Testear</button>
        </div>
      </div>
    </div>

    <!-- nineteenthAlgoritm -->
    <div
      class="card bg-[#F5F5F5] h-[440px] w-[100%] relative rounded-[30px] border-solid border-[1px] border-[#cecece]">
      <img src="../assets/img/LogoSENA-naranja_PNG-1839613.webp" alt=""
        class=" object-cover h-[100%] w-[100%] absolute z-1">
      <div
        class="card-content relative z-[3] opacity-0 h-full translate-y-[30px] transition-all duration-500 flex flex-col text-center p-[8px] gap-[15px]">
        <h3 class=" text-[35px] m-[5px] font-semibold text-[#424242]">Determinar si es palindromo</h3>
        <p class="text-[16px] text-[#424242]">
          Este algoritmo determina si una cadena de texto ingresada por el usuario es un palíndromo,
          que es una secuencia que se lee igual de izquierda a derecha que de derecha a izquierda. Primero,
          solicita al usuario que introduzca una cadena de texto. Luego, normaliza la cadena al eliminar
          espacios y convertir todos los caracteres a minúsculas para facilitar la comparación. A continuación,
          compara la cadena normalizada con su versión invertida. Si ambas cadenas son iguales, el algoritmo
          concluye que la cadena es un palíndromo; de lo contrario, no lo es. Finalmente, muestra un mensaje indicando
          si la cadena es un palíndromo o no. Este algoritmo es útil para identificar secuencias de caracteres que
          tienen
          simetría en su lectura.
        </p>
        <div
          class="bg-[#424242] text-white border-none rounded-[10px] text-[20px] m-auto pt-[4px] pb-[4px] pl-[16px] pr-[16px] transition-[.5s] hover:cursor-pointer hover:bg-[#8d8d8d]">
          <button @click="nineteenthAlgoritm()">Testear</button>
        </div>
      </div>
    </div>

    <!-- twentiethAlgortim -->
    <div
      class="card bg-[#F5F5F5] h-[440px] w-[100%] relative rounded-[30px] border-solid border-[1px] border-[#cecece]">
      <img src="../assets/img/LogoSENA-naranja_PNG-1839613.webp" alt=""
        class=" object-cover h-[100%] w-[100%] absolute z-1">
      <div
        class="card-content relative z-[3] opacity-0 h-full translate-y-[30px] transition-all duration-500 flex flex-col text-center p-[8px] gap-[15px]">
        <h3 class=" text-[35px] m-[5px] font-semibold text-[#424242]">Generar numeros aleatorios</h3>
        <p class="text-[16px] text-[#424242]">
          Este algoritmo genera números aleatorios dentro de un rango especificado. Primero,
          se solicita al usuario que introduzca los límites del rango (mínimo y máximo). A continuación, el algoritmo
          utiliza
          una función para generar un número aleatorio dentro de ese rango, garantizando que los números generados sean
          enteros.
          Finalmente, se muestra el número aleatorio generado en pantalla, y este proceso se puede repetir cuantas veces
          sea necesario
          para obtener diferentes resultados aleatorios. Esto es útil para generar datos al azar en simulaciones, juegos
          u otras aplicaciones
          que requieran aleatoriedad.
        </p>
        <div
          class="bg-[#424242] text-white border-none rounded-[10px] text-[20px] m-auto pt-[4px] pb-[4px] pl-[16px] pr-[16px] transition-[.5s] hover:cursor-pointer hover:bg-[#8d8d8d]">
          <button @click="twentiethAlgortim()">Testear</button>
        </div>
      </div>
    </div>
  </section>

  <!-- Intermediate Algoritms -->
  <!-- Intermediate Algoritms -->
  <!-- Intermediate Algoritms -->
  <section class="intermediate-algoritms-section grid-container w-[90vw] m-auto grid grid-cols-3 gap-5 p-4">
    <div
      class="card bg-[#F5F5F5] h-[440px] w-[100%] relative rounded-[30px] border-solid border-[1px] border-[#cecece]">
      <img src="../assets/img/LogoSENA-naranja_PNG-1839613.webp" alt=""
        class=" object-cover h-[100%] w-[100%] absolute z-1">
      <div
        class="card-content relative z-[3] opacity-0 h-full translate-y-[30px] transition-all duration-500 flex flex-col text-center p-[8px] gap-[15px]">
        <h3 class=" text-[35px] m-[5px] font-semibold text-[#424242]">Imprimir "Hola, mundo!"</h3>
        <p class="text-[16px] text-[#424242]">
          Este algoritmo simple consiste en mostrar el texto "Hola, mundo!" en la pantalla. Normalmente
          se utiliza para verificar que el entorno de programación esté configurado correctamente y, existen varias
          formar de
          mostrar un valor, como pueden ser console.log() que imprime en la consola del navegador o document.write() que
          muestra
          lo que desees directamente en el documento HTML. Para este ejemplo estamos usando alert("Hola, mundo!"), que
          imprime el valor en una pequeña
          ventana modal.
        </p>
        <div
          class="bg-[#424242] text-white border-none rounded-[10px] text-[20px] m-auto pt-[4px] pb-[4px] pl-[16px] pr-[16px] transition-[.5s] hover:cursor-pointer hover:bg-[#8d8d8d]">
          <button @click="firstAlgoritm()">Testear</button>
        </div>
      </div>
    </div>
  </section>

  <!-- Technical Test -->
  <!-- Technical Test -->
  <!-- Technical Test -->
  <section class="technical-test-section grid-container w-[90vw] m-auto grid grid-cols-3 gap-5 p-4">
    <div
      class="card bg-[#F5F5F5] h-[440px] w-[100%] relative rounded-[30px] border-solid border-[1px] border-[#cecece]">
      <img src="../assets/img/LogoSENA-naranja_PNG-1839613.webp" alt=""
        class=" object-cover h-[100%] w-[100%] absolute z-1">
      <div
        class="card-content relative z-[3] opacity-0 h-full translate-y-[30px] transition-all duration-500 flex flex-col text-center p-[8px] gap-[15px]">
        <h3 class=" text-[35px] m-[5px] font-semibold text-[#424242]">POKEDEX</h3>
        <p class="text-[16px] text-[#424242]">
          Este algoritmo simple consiste en mostrar el texto "Hola, mundo!" en la pantalla. Normalmente
          se utiliza para verificar que el entorno de programación esté configurado correctamente y, existen varias
          formar de
          mostrar un valor, como pueden ser console.log() que imprime en la consola del navegador o document.write() que
          muestra
          lo que desees directamente en el documento HTML. Para este ejemplo estamos usando alert("Hola, mundo!"), que
          imprime el valor en una pequeña
          ventana modal.
        </p>
        <div
          class="bg-[#424242] text-white border-none rounded-[10px] text-[20px] m-auto pt-[4px] pb-[4px] pl-[16px] pr-[16px] transition-[.5s] hover:cursor-pointer hover:bg-[#8d8d8d]">
          <a href="../components/Pokedex.vue">
            <button>Testear</button>
          </a>
        </div>
      </div>
    </div>
  </section>

</template>

<style scoped>
.card::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 100%;
  height: 100%;
  border-radius: 30px;
  z-index: 2;
  transition: .5s all;
  opacity: 0;
  background: linear-gradient(to bottom, #F5F5F5, #F5F5F5);
}

.card:hover::before {
  opacity: 1;
}

.card:hover .card-content {
  opacity: 1;
  transform: translateY(0px);
}

.hidden {
  display: none;
}
</style>