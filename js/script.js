//Calculadora de raices de un polinomio de segundo grado
alert("Bienvenido.");
//Valida que el dato de entrada sea un numero.
function validarNumero(letra) {             //¡Error: Admite espacios como entrada!!!
    let num = prompt ("Ingrese " + letra);
    while (isNaN(num)) {
        alert("Por favor ingrese un tipo de datos valido(NUMERO)");
        num = prompt ("Ingrese " + letra);
    }
    return num
}

//Inicializo array de historial
const funcionesCalculadas = []; 
//Objeto que guarda las raices calculadas
class Funcion {
    constructor (a,b,c,tipo, raiz1, raiz2) {
        this.a = a;
        this.b = b;
        this.c = c;
        this.tipo = tipo;
        this.raiz1 = raiz1;
        this.raiz2 = raiz2;
    }
}

//Calculos precargados.
//funcionesCalculadas.push(new Funcion (1,2,3,"Imaginaria",1,2);  
const Funcion = new Funcion (1,2,3,"Real",1,2);
const Funcion = new Funcion (1,2,3,"RealDoble",1,2);
const Funcion = new Funcion (1,2,3,"Imaginaria",1,2);

//Programa principal.
let salir = true;
while (salir) {    
    let opcion = prompt ("¿Que accion desea realizar?")
    //Menu
    switch (opcion) {
        //1:Calcular nueva raiz.
        //:BOrrar solo los Reales?????s
        //Borrar imaginaros??????
        case 1:
            alert("Calculadora de raices de un polinomio de 2do grado de la forma ax^2 +/- bx +/- c");
            let a = validarNumero("a");
            let b = validarNumero("b");
            let c = validarNumero("c");

            //Calculo discriminante
            let disc = b * b - 4 * a * c;
            console.log (disc); // Comprobrar calculos

            //Inicializo
            let x1 = 0;
            let x2 = 0;
            let tipoFuncion = "";


            switch (true) {
                //Caso en el que hay dos raices reales 
                case 0 < disc  :
                    x1 = (-b + Math.sqrt(disc)) / (2 * a);
                    x2 = (-b - Math.sqrt(disc)) / (2 * a); 
                    tipoFuncion = "Real";
                    alert("Dos raices reales diferentes x1:" + x1.toFixed(2) + " y x2:" + x2.toFixed(2));            
                    break;
                //Caso en el que hay solo una raiz real (raiz doble)
                case disc == 0 :  
                    tipoFuncion = "Real Unico";
                    x1 = (-b / (2 * a));
                    x2 = x1;
                    alert("Dos raices reales iguales: " + x1.toFixed(2));  
                    break;

                case disc < 0 : // discriminante negativo
                // Caso en el que hay dos raices complejas.
                    //Disc es negativo asi que se cambia el signo asi se puede calcular su raiz
                    disc = -disc;
                    x1 = -b / (2 * a);
                    x2 = (Math.sqrt(disc) / (2 * a));
                    tipoFuncion = "Imaginario";
                    alert("Dos raices complejas diferentes: " + x1.toFixed(2) + " (+/-) i " + x2.toFixed(2));
                    break;
                default: 
                    alert("Error");
                    break;
            }

            //Guardo funcion recien calculada
            const Funcion = new Funcion (a,b,c,tipoFuncion,x1,x2);
            // y la envio al historial.
            funcionesCalculadas.push(Funcion)

            // isNAN(valor) devuelve true si valor es no numerico
            //isNaN() - if the value is a number, false is returned.
            //The Math.sqrt() static method returns the square root of a number. 
            break;
            
        //2: Display historial.
        case 2:
            //Recorro el array haciendo display en cada subindice.
            for (let index = 0; index < funcionesCalculadas.length; index++) {
                console.log(funcion)     
            }
            funcionesCalculadas.forEach(Funcion => {
                console.log(funcion)
            });
            for (const funcion of funcionesCalculadas) {
                console.log(funcion.a);
                console.log(funcion.b);
                console.log(funcion.c);
                console.log(funcion.tipo);
                console.log(funcion.raiz1);
                console.log(funcion.raiz2);                
            }
            break;
            
        //3: Borrar 1 item del historial.
        case 3:
            let borrarIndice = prompt ("Seleccione el subindice del item a borrar.");
            funcionesCalculadas.splice(borrarIndice,1)            
            break;
        
        //4: Salir. Tal vez en default
        case 4:
            salir = false
            break;
    }    
}









