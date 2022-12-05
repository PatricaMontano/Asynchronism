function sumar(a,b,...c){
    let resultado = a+b;

    c.forEach(function(num){
        resultado += num;
    });
    return resultado;
}

console.log(sumar(1,2,3,4,5,6,7,8,9,10));
console.log(sumar(1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20));

const arr1 = [1,2,3,4,5];
const arr2 = [6,7,8,9,0];
const arr3 = [...arr1, ...arr2];
console.log(arr1,arr2);
console.log(arr3);

