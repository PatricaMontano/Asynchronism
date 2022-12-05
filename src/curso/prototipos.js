//POO
/*
Clases - Modelo a Seguir
Objetos - Es una instancia de esa clase
  Atributos
  Objeto
  Metodos
*/

const animal = {
    nombre: "Snnopy",
    sonar(){
        console.log("Hago sonidos por que estoy vivo");
    }
}
const animal2 = {
    nombre: "Lola Bunny",
    sonar(){
        console.log("Hago sonidos por que estoy vivo");
    }
}
//console.log(animal);
//console.log(animal2);

function Animal(nombre, genero){
    //Atributos
    this.nombre = nombre;
    this.genero = genero;
    /*Metodos
    this.sonar = function(){
        console.log("Hago sonidos por que estoy vivo");
    }
    this.saludar = function(){
        console.log("Hola me llamo "+this.nombre);
    }
    */
}

 //Metodos
 Animal.prototype.sonar = function(){
    console.log("Hago sonidos por que estoy vivo");
}
Animal.prototype.saludar = function(){
    console.log("Hola me llamo "+this.nombre);
}



const snoopy = new Animal("Snoopy", "Macho"),lolaBunny = new Animal("Lola Bunny", "Hembra");

console.log(snoopy);
console.log(lolaBunny);

snoopy.sonar();
snoopy.saludar();


lolaBunny.sonar();
lolaBunny.saludar();


const x=6%2;
const y=x?'One': 'Two';
console.log(y);