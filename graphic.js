var song;
var button;
var fft;


function toggleSong() {
    if (song.isPlaying()) {
        song.pause();
    } else {
        song.play();
    }
}

function preload() {
    song = loadSound('teste.mp3');
}

function setup() {
    createCanvas(360, 360);
    colorMode(HSB);
    angleMode(DEGREES);
    button = createButton('play');
    button.mousePressed(toggleSong);
    song.play();
    fft = new p5.FFT(0.9, 256);
}

function draw() {
    background(0);
    var spectrum = fft.analyze();
    // stroke(255);
    noStroke();
    translate(width/2, height/2);
    // beginShape();
    for (var i=0; i < spectrum.length; i++) {
        var angle = map(i, 0, spectrum.length, 0, 360);
        var amp = spectrum[i];
        var r = map(amp, 0, 256, 30, 190);
        var x = r * cos(angle);
        var y = r *sin(angle);
        stroke(i, 255, 255);
        line(0, 0, x, y);
        // vertex(x, y);
        // var y = map(amp, 0, 512, height, 0);
        // fill(i, 255, 255);
        // rect(i*w, y, w - 2, height - y);
    }
    // endShape();

    
}