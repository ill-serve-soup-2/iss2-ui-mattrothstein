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

    // P Animation
let pTags = document.querySelectorAll('p'); //select all p tags
const pTagsArray = Array.from(pTags); // turn nodelist into array

pTagsArray.map(p => {
    p.addEventListener('mouseover', p => {
        TweenMax.to(p.currentTarget, 1, {scale: 1.1, ease:AudioBufferSourceNode.easeOut})
    })
})

pTagsArray.map(p => {
    p.addEventListener('mouseout', p => {
        TweenMax.to(p.currentTarget, 1, {scale: 1, ease:AudioBufferSourceNode.easeOut})
    })
})