// logo's speed
let leftImage = 2;
let topImage = 2;

// logo's tag
let img = Array.from(document.getElementsByTagName("img"))[0];

// Return random number with minimum and maximum value
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function setupScreen() {
    // place the img in a random location inside window
    img.style.position = 'absolute';
    img.style.left = `${getRndInteger(0, window.innerWidth - img.width)}px`;
    img.style.top = `${getRndInteger(0, window.innerHeight - img.height)}px`;

    setupMovements();
}

// Command to run 60 times per second to animate the logo
function setupMovements() {
    setInterval(() => {
        img.style.left = `${getIntegerFromPixels(img.style.left) + leftImage}px`;
        img.style.top = `${getIntegerFromPixels(img.style.top) + topImage}px`;
        this.verifyBounce();
    }, 12.6 /* ~60 frames per second */)
}

// converts pixel's string to a number
function getIntegerFromPixels(pixels) {
    return parseInt(pixels.replace('px', ''));
}

// Verifies logo's position to bounce
function verifyBounce() {
    if(getIntegerFromPixels(img.style.left) >= window.innerWidth - img.width || getIntegerFromPixels(img.style.left) <= 0) {
        leftImage = leftImage * -1;
    } else if(getIntegerFromPixels(img.style.top) >= window.innerHeight - img.height || getIntegerFromPixels(img.style.top) <= 0) {
        topImage = topImage * -1;
    }
}

setupScreen()