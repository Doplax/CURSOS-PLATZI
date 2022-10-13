function fruits() {
    if (true) {
        var fruit1 = 'Apple'; // Function scope
        let fruit2 = 'Kiwi'; // Block Scope
        const fruit3 = 'Banana' // Block Scope

        // Aqui dentro, al ser function scope si que se ejecutan
        //console.log(fruit2) 
        //console.log(fruit3)
    }

    console.log(fruit1)
    console.log(fruit2)
    console.log(fruit3)
}

fruits();

// Si las pusiesemos fuera, no se imprimiria ninguna