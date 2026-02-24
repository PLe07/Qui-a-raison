function tirerAuSort() {
    const text = document.getElementById('playerList').value;
    const noms = text.split('\n').filter(n => n.trim() !== "");
    const display = document.getElementById('resultat');

    if (noms.length < 2) {
        display.innerText = "Il faut au moins 2 noms, sinon c'est de la triche !";
        return;
    }

    display.innerText = "Suspense...";
    
    // Petite animation de 1 seconde avant le verdict
    setTimeout(() => {
        const indexGagnant = Math.floor(Math.random() * noms.length);
        display.innerText = "⚡ C'est tombé sur : " + noms[indexGagnant] + " !";
    }, 800);
}
