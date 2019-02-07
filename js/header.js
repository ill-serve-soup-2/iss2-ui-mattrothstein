

var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('manual inventory?')
    .pauseFor(2500)
    .deleteAll()
    .typeString('wasting money?')
    .pauseFor(2500)
    .deleteChars(6)
    .typeString('time?')
    .pauseFor(2500)
    .start();