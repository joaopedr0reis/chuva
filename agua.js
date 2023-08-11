

function criaTitulo() {
    const header = document.querySelector("header");
    var h1Tag = document.createElement('H1');
    h1Tag.innerHTML = "Seu título";
    header.prepend(h1Tag);
}

function criaDiv() {
    const main = document.querySelector("main");
    var divTag = document.createElement('div');

    var h2Tag1 = document.createElement('h2');
    h2Tag1.innerHTML = "Subtitulo 1";
    divTag.append(h2Tag1);


    var h2Tag2 = document.createElement('h2');
    h2Tag2.innerHTML = "Subtitulo 2";
    divTag.append(h2Tag2);

    let p = document.createElement("p");
    p.innerText = "Este capitulo é responsavel por ..."
    divTag.append(p);

    main.append(divTag);
}