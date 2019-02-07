// For landing page

var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('manual inventory?')
    .pauseFor(1500)
    .deleteAll()
    .typeString('wasting money?')
    .pauseFor(1500)
    .deleteChars(6)
    .typeString('time?')
    .pauseFor(1500)
    .start();