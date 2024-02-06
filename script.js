function getOrarioCorrente() {
    const oggi = new Date();
    const ora = oggi.getHours();

    return ora;
}

function cambiaImmagine() {
    const orario = getOrarioCorrente();
    const imgElement = document.getElementById('image');

    let nuovaImmagine;

    if (orario >= 6 && orario < 12) {
        nuovaImmagine = './img/mattina.jpg';
    } else if (orario >= 12 && orario < 18) {
        nuovaImmagine = './img/pomeriggio.jpg';
    } else {
        nuovaImmagine = './img/sera.jpg';
    }

    imgElement.src = nuovaImmagine;
}

cambiaImmagine();