function iniciarAnimacion() {
    document.getElementById('intro-screen').classList.add('hidden');
    document.getElementById('main-screen').classList.remove('hidden');

    // Código para animar las flores y el corazón (opcional)
    animarFlores();
    animarCorazones();

    var message = document.getElementById('message');
    var textoCompleto = `
Hola mi niña, aquí estoy entregándote este regalo que desde hace mucho tiempo quería hacer, pero no tenía la experiencia. Ahora que estoy aquí, quiero agradecerte por ser mi amada mujer durante este año y dos meses. Gracias por estar en las buenas y en las malas, por ser siempre ese sol que me ilumina, así tal cual como lo puedes apreciar en las mañanas iluminando las florecitas del jardín.

Gracias por fortalecerme y hacerme amar como nunca antes lo había hecho. Eres mi vida entera, y deseo y le pido mucho a Dios que nos otorgue el amor por toda la eternidad, como tanto lo hemos soñado. También quiero decirte que me siento afortunado de tenerte, de compartir nuestros sueños y, lo más importante, entregarnos como dos almas que, a pesar de la distancia, estamos ahí, unidos espiritualmente.

Te amo con todo mi corazón, con toda mi alma, con todo mi ser. Eres mi motivo de sonreír, de ser una mejor persona cada día. Darlo todo por ti es mi mayor anhelo. Aprovecho para prometer ante Diosito siempre estar ahí cuando más me necesites, cuidarte, amarte y respetarte hasta la eternidad. Estar ahí para abrazarte, besarte, mimarte, hacerte sentir tan feliz como lo mereces, cumplir tus deseos, sorprenderte siempre con detalles, amarte y enamorarte cada día más.

Te amooo.
`;

    escribirTexto(message, textoCompleto);
}

function botonEquivocado() {
    alert('Botón equivocado 😠');
}

function animarFlores() {
    var flowersContainer = document.getElementById('flowers');
    
    for (var i = 0; i < 10; i++) {
        var flower = document.createElement('div');
        flower.classList.add('flower');
        flower.style.top = Math.random() * 100 + 'vh';
        flower.style.left = Math.random() * 100 + 'vw';
        flowersContainer.appendChild(flower);
    }
}

function animarCorazones() {
    var heartsContainer = document.getElementById('hearts');
    
    for (var i = 0; i < 5; i++) {
        var heart = document.createElement('div');
        heart.classList.add('heart');
        heart.style.top = Math.random() * 100 + 'vh';
        heart.style.left = Math.random() * 100 + 'vw';
        heartsContainer.appendChild(heart);
    }
}

function animarCorazon() {
    var heart = document.getElementById('heart');
    heart.style.animation = 'pulse 2s infinite alternate';
}

function escribirTexto(elemento, texto) {
    var indice = 0;

    function escribir() {
        if (indice < texto.length) {
            elemento.innerHTML += texto.charAt(indice);
            indice++;

            setTimeout(escribir, Math.floor(Math.random() * 50) + 10); // Ajusta la velocidad de escritura según tu preferencia

            // Añadido: Desvanecer una línea al final del texto
            if (indice === texto.length) {
                setTimeout(function () {
                    elemento.innerHTML += '<span class="desvanecer lento">' + '</span>';
                }, 500);
            }
        }
    }

    escribir();
}
