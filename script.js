function wylosuj() {
    let shot = Math.random();
    dice = (parseInt(shot * 6) + 1);
    var a = dice;
    document.querySelector('#kostka').src = "img/" + a + ".jpg";
    console.log(a);
    b = prompt("Zgadnij jaka liczba zostanie wylosowana");
    if (a == b) {
        console.log(document.querySelector('#wynik').textContent = "UDAŁO CI SIĘ ZGADNAĆ ;)");
        document.querySelector('#wynik').style.color = 'green';
        document.querySelector('#wynik').style.background = 'white';
    }
    else {
        console.log(document.querySelector('#wynik').textContent = "NIESTETY NIE UDAŁO CI SIE ZGADNAC ;(")
        document.querySelector('#wynik').style.color = 'red';
        document.querySelector('#wynik').style.background = 'white';
    }
};





