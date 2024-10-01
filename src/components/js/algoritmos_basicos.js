// 1. Imprimir Hola mundo
export function firstAlgoritm(){
    alert("Hola, mundo!");
}

//2. Preguntar un número y mostrarlo en pantalla.
export function secondAlgoritm(){
    let number = Number(prompt("Ingresa un numero", "0"));

    while(isNaN(number)){
        alert("Solo es posible ingresar numeros");
        number = Number(prompt("Ingresa un numero"));
    }

    alert("El numero ingresado es: "+ number);
}

//3. Sumar números.
export function thirdAlgoritm(){
    var option = Number(prompt("1. Sumar dos numeros \n 2. Suma personalizada"));

    switch(option){
        case 1:
            var numberOne = Number(prompt("Ingresa el primer numero"));
            var numberTwo = Number(prompt("Ingresa el primer numero"));

            while(isNaN(numberOne) || isNaN(numberTwo)){
                alert("Solo es posible ingresar numeros");
                numberOne = Number(prompt("Ingresa el primer numero"));
                numberTwo = Number(prompt("Ingresa el primer numero"));
            }

            let addition = numberOne + numberTwo;

            alert("La suma de los dos numeros ingresados es: " + addition);
        break;
        
        case 2:
            var amount = Number(prompt("Ingresa la cantidad de numeros que deseas sumar"));

            while(isNaN(amount)){
                alert("Solo es posible ingresar numeros");
                amount = Number(prompt("Ingresa la cantidad de numeros que deseas sumar"));
            }

            let customAddition = 0;

            for(let i = 0; i < amount; i++){
                let numbers = Number(prompt("Ingresa un numero"));
                while(isNaN(numbers)){
                    alert("Debes ingresar numeros");
                    numbers = Number(prompt("Ingresa un numero"));
                }

                customAddition = customAddition + numbers;
            }

            alert("La suma de los dos numeros es "+ customAddition);
        break;

        default:
            alert("Hubo error, intentalo nuevamente");
        break;
    }
}


// 4. Restar números.
export function fourthAlgoritm(){
    var option = Number(prompt("1. Restar dos numeros \n 2. Resta personalizada"));

    switch(option){
        case 1:
            var numberOne = Number(prompt("Ingresa el primer numero"));
            var numberTwo = Number(prompt("Ingresa el primer numero"));

            while(isNaN(numberOne) || isNaN(numberTwo)){
                alert("Solo es posible ingresar numeros");
                numberOne = Number(prompt("Ingresa el primer numero"));
                numberTwo = Number(prompt("Ingresa el primer numero"));
            }

            let subtraction = numberOne - numberTwo;

            alert("La resta de los dos numeros ingresados es: " + subtraction);
        break;
        
        case 2:
            var amount = Number(prompt("Ingresa la cantidad de numeros que deseas sumar"));

            while(isNaN(amount)){
                alert("Solo es posible ingresar numeros");
                amount = Number(prompt("Ingresa la cantidad de numeros que deseas restar"));
            }

            let customSubtraction = Number(prompt("Ingresa el primer numero"));

            while(isNaN(customSubtraction)){
                alert("Solo es posible ingresar numeros");
                customSubtraction = Number(prompt("Ingresa el primer numero"));
            }


            for(let i = 1; i < amount; i++){
                let numbers = Number(prompt("Ingresa un numero"));
                while(isNaN(numbers)){
                    alert("Debes ingresar numeros");
                    numbers = Number(prompt("Ingresa un numero"));
                }

                customSubtraction = customSubtraction - numbers;
            }

            alert("La resta de los dos numeros ingresados es "+ customSubtraction);
        break;

        default:
            alert("Hubo error, intentalo nuevamente");
        break;
    }
}

//5. Multiplicar números.
export function fifthAlgoritm(){
    var option = Number(prompt("1. Multiplicar dos numeros \n 2. Multiplicacion personalizada"));

    switch(option){
        case 1:
            var numberOne = Number(prompt("Ingresa el primer numero"));
            var numberTwo = Number(prompt("Ingresa el primer numero"));

            while(isNaN(numberOne) || isNaN(numberTwo)){
                alert("Solo es posible ingresar numeros");
                numberOne = Number(prompt("Ingresa el primer numero"));
                numberTwo = Number(prompt("Ingresa el primer numero"));
            }

            let multiplication = numberOne * numberTwo;

            alert("La multiplicacion de los dos numeros ingresados es: " + multiplication);
        break;
        
        case 2:
            var amount = Number(prompt("Ingresa la cantidad de numeros que deseas sumar"));

            while(isNaN(amount)){
                alert("Solo es posible ingresar numeros");
                amount = Number(prompt("Ingresa la cantidad de numeros que deseas restar"));
            }

            let customMultiplication = Number(prompt("Ingresa el primer numero"));

            while(isNaN(customMultiplication)){
                alert("Solo es posible ingresar numeros");
                customMultiplication = Number(prompt("Ingresa el primer numero"));
            }


            for(let i = 1; i < amount; i++){
                let numbers = Number(prompt("Ingresa un numero"));
                while(isNaN(numbers)){
                    alert("Debes ingresar numeros");
                    numbers = Number(prompt("Ingresa un numero"));
                }

                customMultiplication = customMultiplication * numbers;
            }

            alert("La multiplicacion de los dos numeros ingresados es "+ customMultiplication);
        break;

        default:
            alert("Hubo error, intentalo nuevamente");
        break;
    }
}

//6. Dividir números (considerando la división por cero).

export function sixthAlgoritm(){
    var option = Number(prompt("1. Dividir dos numeros \n 2. Division personalizada"));

    switch(option){
        case 1:
            var numberOne = Number(prompt("Ingresa el primer numero"));
            var numberTwo = Number(prompt("Ingresa el primer numero"));

            while(isNaN(numberOne) || isNaN(numberTwo) || numberOne <= 0 || numberTwo <= 0){
                alert("Solo es posible ingresar numeros mayores a 0");
                numberOne = Number(prompt("Ingresa el primer numero"));
                numberTwo = Number(prompt("Ingresa el primer numero"));
            }

            let division = numberOne / numberTwo;

            alert("La division de los dos numeros ingresados es: " + division);
        break;
        
        case 2:
            var amount = Number(prompt("Ingresa la cantidad de numeros que deseas sumar"));

            while(isNaN(amount) || amount <= 0){
                alert("Solo es posible ingresar numeros mayores a 0");
                amount = Number(prompt("Ingresa la cantidad de numeros que deseas restar"));
            }

            let customDivision = Number(prompt("Ingresa el primer numero"));

            while(isNaN(customDivision) || customDivision <= 0){
                alert("Solo es posible ingresar numeros mayores a 0");
                customDivision = Number(prompt("Ingresa el primer numero"));
            }


            for(let i = 1; i < amount; i++){
                let numbers = Number(prompt("Ingresa un numero"));
                while(isNaN(numbers) || numbers <= 0){
                    alert("Solo es posible ingresar numeros mayores a 0");
                    numbers = Number(prompt("Ingresa un numero"));
                }

                customDivision = customDivision / numbers;
            }

            alert("La division de los dos numeros ingresados es "+ customDivision);
        break;

        default:
            alert("Hubo error, intentalo nuevamente");
        break;
    }
}

//7. Calcular el área de un rectángulo.
export function seventhAlgoritm(){
    var base = Number(prompt("Ingresa la medida de la base del rectangulo en centimetros"));
    var height = Number(prompt("Ingresa la medida de la altura del rectangulo en centimetros"));

    while(isNaN(base) || isNaN(height) || base <= 0 || height <= 0){
        alert("Las medidas de base y altura deben ser mayores a 0");
        base = Number(prompt("Ingresa la medida de la base del rectangulo en centimetros"));
        height = Number(prompt("Ingresa la medida de la altura del rectangulo centimetros"));
    }

    var area = base * height;

    var option = confirm("¿Desea visualizar la longitud del area del rectangulo en metros tambien?");

    if(option == true){
        areaMeter = area / 100;
        alert("El area del rectangulo es de "+ areaMeter + "m");
    } else{
        alert("El area del rectangulo es de "+ area + "cm");
    }
}

// 8. Calcular el perímetro de un cuadrado.
export function eighthAlgoritm(){
    var side = Number(prompt("Ingrese una de las medidas del lado del cuadrado en centimetros"));

    while(isNaN(side) || side <= 0){
        alert("La medida debe ser mayor a 0");
        side = Number(prompt("Ingrese una de las medidas del lado del cuadrado en centimetros"));
    }

    side = side * 4;

    var option = confirm("¿Desea visualizar la longitud del area del rectangulo en metros tambien?");

    if(option == true){
        sideMeter = side / 100;
        alert("El perimetro del cuadrado es de "+ sideMeter + "m");
    } else{
        alert("El perimetro del cuadrado es de "+ side + "cm");
    }
}

//9. Determinar si un número es par o impar.
export function ninthAlgoritm(){

    var number = Number(prompt("Ingresa un numero"));

    while(isNaN(number)){
        alert("Solo se pueden ingresar numeros");
        number = Number(prompt("Ingresa un numero"));
    }

    if(number % 2 == 0){
        alert("El numero " + number + " es un numero par");
    } else {
        alert("El numero " + number + " es un numero impar");
    }
}

//10. Convertir de Celsius a Fahrenheit.
export function tenthAlgoritm(){
    var celsius = Number(prompt("Ingrese la cantidad de grados Celsius a convertir en grados Fahrenheit"));

    while(isNaN(celsius)){
        alert("Solo se pueden ingresar numeros");
        celsius = Number(prompt("Ingrese la cantidad de grados Celsius a convertir en Fahrenheit"));
    }

    var fahrenheit = (celsius * 9 / 5) + 32

    alert(celsius+"°C en grados Fahrenheit son "+ fahrenheit+"°F");
}

// 11. Leer tres números y encontrar el mayor.

export function eleventhAlgoritm(){
    var numberOne = Number(prompt("Ingresa el primer numero"));
    var numberTwo = Number(prompt("Ingresa el segundo numero"));
    var numberThree = Number(prompt("Ingresa el tercer numero"));

    while(isNaN(numberOne) || isNaN(numberTwo) || isNaN(numberThree)){
        alert("Solo es posible ingresar numeros");
        numberOne = Number(prompt("Ingresa el primer numero"));
        numberTwo = Number(prompt("Ingresa el segundo numero"));
        numberThree = Number(prompt("Ingresa el tercer numero"));
    }

    if(numberOne > numberTwo && numberOne > numberThree){
        alert("El numero mayor es "+numberOne);
    } else if (numberTwo > numberOne && numberTwo > numberThree){
        alert("El numero mayor es "+numberTwo);
    } else if(numberThree > numberTwo && numberThree > numberTwo){
        alert("El numero mayor es "+numberThree);
    } else{
        alert("Los valores tres valores ingresados fueron "+numberOne);
    }
}

//12. Leer un número y determinar si es positivo, negativo o cero.
export function twelfthAlgoritm(){
    var numberOne = Number(prompt("Ingresa un numero"));

    while(isNaN(numberOne)){
        alert("Solo es posible ingresar numeros");
        numberOne = Number(prompt("Ingresa un numero"));
    }

    if(numberOne < 0){
        alert("El numero "+numberOne+" es negativo");
    } else if(numberOne > 0){
        alert("El numero "+numberOne+" es positivo");
    } else {
        alert("El numero es cero")
    }
}

//13. Generar numeros
export function thirteenthAlgoritm(){
    var min = Number(prompt("Ingrese desde el cual desea generar la lista"));
    var max = Number(prompt("Ingrese hasta el cual desea generar la lista"));

    var numbers = "";
    
    while(isNaN(min) || isNaN(max)){
        alert("Solo es posible ingresar numeros");
        min = Number(prompt("Ingrese desde el cual desea generar la lista"));
        max = Number(prompt("Ingrese hasta el cual desea generar la lista"));
    }

    for(min; min <= max; min++){
        numbers += min +"\n"
    }

    alert(numbers);
}

//14. Imprimir la tabla de multiplicar de un número.
export function fourteenthAlgoritm(){
    var number = Number(prompt("Ingrese el numero del cual desea generar la tabla de multiplicar"));

    var min = Number(prompt("Ingrese el numero desde el cual desea generar la tabla de multiplicar"));
    var max = Number(prompt("Ingrese el numero hasta el cual desea generar la tabla de multiplicar"));

    var table = "";
    while(isNaN(number) || isNaN(min) || isNaN(max)){
        alert("Solo es posible ingresar numeros");

        number = Number(prompt("Ingrese el numero del cual desea generar la tabla de multiplicar"));
        min = Number(prompt("Ingrese el numero desde el cual desea generar la tabla de multiplicar"));
        max = Number(prompt("Ingrese el numero hasta el cual desea generar la tabla de multiplicar"));
    }

    for(min; min <= max; min++){
        table += number + " x " + min + " = " + number * min + "\n";
    }

    alert(table);
}

//15. Calcular el factorial de un número.

export function fifteenthAlgoritm() {
    var number = Number(prompt("Ingrese el número del cual desea generar su factorial"));

    while (isNaN(number)) {
        alert("Solo es posible ingresar números");
        number = Number(prompt("Ingrese el número del cual desea generar su factorial"));
    }

    let factorial = 1;
    let factorialString = number + "! = ";

    for (let i = number; i > 0; i--) {
        factorial *= i;
        if (i === 1) {
            factorialString += i;
        } else {
            factorialString += i + " × ";
        }
    }

    factorialString += " = " + factorial;
    alert(factorialString);
}

//16. Invertir una cadena.

export function sixteenthAlgoritm(){
    var word = prompt("Ingrese palabras o numeros");

    var array = [];
       
    for (let letra of word) {
        array.push(letra);
    }

    array.reverse();

    alert(array.join(""));

}


//17. Calcular el promedio de un conjunto de números.
export function seventeenthAlgoritm(){
    var amount = Number(prompt("Ingrese la cantidad de numeros que desea ingresar"));

    while(isNaN(amount)){
        alert("Solo es posible ingresar numeros");
        amount = Number(prompt("Ingrese la cantidad de numeros que desea ingresar"));
    }

    var output = 0;

    for(let i = 1; i <= amount; i++){
        var numbers = Number(prompt("Ingrese un numero"));

        while(isNaN(numbers)){
            alert("Solo es posible ingresar numeros");
            numbers = Number(prompt("Ingrese un numero"));
        }

        output += numbers;
    }

    alert("El promedio de los numeros ingresados es " + output / amount);
}


//18. Leer una cadena y contar el número de vocales.
export function eighteenthAlgoritm(){
    var word = String(prompt("Ingrese una palabra"));

    while (!/^[a-zA-Z]+$/.test(word)) {
        alert("Solo es posible ingresar letras");
        word = prompt("Ingrese una palabra");
    }

    word = word.toLowerCase();
    var  letters = "";

    var counter = 0;

    for (let letra of word) {
        letters += letra + "";
        
        switch(letra){
            case "a":
                counter += 1;
            break;
            case "e":
                counter += 1;
            break;
            case "i":
                counter += 1;
            break;
            case "o":
                counter += 1;
            break;
            case "u":
                counter += 1;
            break;
            default:
            break;
        }
    }
    alert("La palabra " + letters + " tiene " + counter + " vocales");
}

// 19. Verificar si una cadena es un palíndromo.

export function nineteenthAlgoritm(){
    var word = prompt("Ingrese palabras o numeros");

    var array = [];
       
    for (let letra of word) {
        array.push(letra);
    }

    var arrayReversed = array.reverse();
    arrayReversed = array.join("");

    if(arrayReversed === word){
        alert("La palabra " + word + " es un palindromo");
    } else{
        alert("La palabra " + word + " no es palindromo");
    }
}

// 20. Generar números aleatorios.

export function twentiethAlgortim() {
    var amount = Number(prompt("Ingresa la cantidad de números a generar"));

    var min = Number(prompt("Ingresa el valor mínimo"));
    var max = Number(prompt("Ingresa el valor máximo"));

    //Validacion para los numeros
    while(isNaN(amount) || isNaN(min) || isNaN(max)){
        alert("los valores ingresados deben ser numeros");
        amount = Number(prompt("Ingresa la cantidad de números a generar"));
        
        min = Number(prompt("Ingresa el valor mínimo"));
        max = Number(prompt("Ingresa el valor máximo"));
    }

    //Validacion para que la cantidad de los numeros no sea mayor al rango de numeros
    while(amount > max - min){
        alert("la cantidad de numeros debe ser coherente con el rango minimo y maximo");
        amount = Number(prompt("Ingresa la cantidad de números a generar"));
        
        min = Number(prompt("Ingresa el valor mínimo"));
        max = Number(prompt("Ingresa el valor máximo"));
    }


    if (min >= max) {
        alert("El valor mínimo debe ser menor que el valor máximo.");
        return;
    }


    var numbers = "";
    for (let i = 0; i < amount; i++) {
        let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        numbers += randomNumber + "\n";
    }


    alert(numbers);
}
