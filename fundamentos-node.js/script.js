function soyAsincrona(miCallback) {
    setTimeout(() => {
        console.log("hola soy una fucnion asincrona");
        miCallback()
    }, 1000)
}


console.log("Iniciando proceso...");
soyAsincrona(() => {
    console.log("Terminando proceso...");
});
