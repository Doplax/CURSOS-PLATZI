// Cuadrado
console.group("Cuadrado") 
const ladoCuadrado = 5;
const perimetroCuadrado = ladoCuadrado * 4;
const areaCuadrado = ladoCuadrado * ladoCuadrado;

function calcularPerimetroCuadrado(lado1) {
    return {
       perimetro: lado * 4,
       area: lado * lado,
    }
};

console.log(ladoCuadrado,
            perimetroCuadrado,
            areaCuadrado);

console.groupEnd("Cuadrado") 


// Triangulo
console.group("Triangulo") 
const ladoTriangulo1 =6;
const ladoTriangulo2 =6;
const ladoTrianguloBase = 4;
const alturaTriangulo = 5.5;

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + ladoTrianguloBase;
const areaTriangulo = (ladoTrianguloBase * alturaTriangulo) / 2;

function calcularPerimetroTriangulo(lado1, lado2, base, altura) {
     return {
        perimetro: lado1 + lado2 + base,
        area: (base * altura) / 2
     }
}

console.log({
    ladoTriangulo1,
    ladoTriangulo2,
    ladoTrianguloBase,
    alturaTriangulo,
    perimetroTriangulo,
    areaTriangulo
});

console.groupEnd("Triangulo") 



//Circulo
console.group("Circulo") 

const radioCirculo =3;
const diametroCirculo = radioCirculo * 2;
const PI = 3.1415;

const circunferncia = diametroCirculo * PI;
const areaCirculo = (radioCirculo ** 2) * PI;

console.log({
    radioCirculo,
    diametroCirculo,
    PI,
    circunferncia,
    areaCirculo,

})

function calcularCirculo(radio) {
    const diametro = radio * 2;
    const radioAlCuadrado = Math.pow(radio,2)

    return {
        circunferencia:(diametro) * PI,
        area: radioAlCuadrado * PI,
    }
}
console.groupEnd("Circulo") 