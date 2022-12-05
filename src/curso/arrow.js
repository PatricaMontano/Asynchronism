
function saludar() {
    console.log('Hola');
}
  
saludar();

const saludar2 = function() {
  console.log('Hola');
}

saludar2();

//Arrow functions
const saludar3 =()=> console.log('Hola');
saludar3();

//Arrow functions with parameters
const saludar4 = nombre => console.log(`Hola ${nombre}`);
saludar4("Juan");

//Plus operator
const sumar = function(a,b){
    return a+b;
}
console.log(sumar(1,2));


const sumar2 = (a,b) => a+b;
console.log(sumar2(9,9));

const sumar3 = (a,b) => {
    console.log("UNO");
    console.log("DOS");
    console.log("TRES");
};
sumar3();

const array = [1,2,3,4,5,6,7,8,9,10];

//array.forEach((num,index)=>console.log("El elemento "+num+" está en la posición "+index));

function perro(){
    console.log(this);
}
//perro();

// Arrow function no respeta el contexto, se lo salta, heredan el contexto donde el
//padre ha sido declarado
const perro2 = {
    nombre: "Firulais",
    ladrar: ()=>{
        console.log(this);
    }
}
perro2.ladrar();

// Nueva forma de declarar Arrow function respeta el contexto
const perro3 = {
    nombre: "Firulais",
    ladrar(){
        console.log(this);
    }
}
perro3.ladrar();