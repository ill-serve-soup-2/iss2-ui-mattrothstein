// for volunteer page

var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('volunteer?')
    .pauseFor(1500)
    .deleteAll()
    .typeString('help people?')
    .pauseFor(1500)
    .deleteChars(7)
    .typeString('your community?')
    .pauseFor(1500)
    .start();