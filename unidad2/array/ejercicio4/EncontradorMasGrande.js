function encontrarNumeroGrande(array) {
    let nMasGrande = Number.MIN_VALUE;
    for (let i = 0; i < array.length; i++) {
        if(array[i] > nMasGrande) nMasGrande = array[i];
    }
    return nMasGrande;
}

document.write(encontrarNumeroGrande([5,14,1]));