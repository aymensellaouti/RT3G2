function showMyAttributes(objet) {
    for(indice in objet) {
        console.log(`
        ${indice} : ${objet[indice]}
        `);
    }
}
