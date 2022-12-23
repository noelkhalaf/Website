function getRandomCoin() {
    var ele = document.getElementById('coin_gif');
    var res = Math.round(Math.random());
    if (res == 1) {
        ele.src = "images/HeadsFlip.gif";
        ele.alt = "Coin Flip Heads"
    }
    else {
        ele.src = "images/TailsFlip.gif";
        ele.alt = "Coin Flip Tails"
    }
}

function getRandomDie() {
    return Math.floor(Math.random() * 6) + 1;
}

function getRandomCard() {
    return Math.floor(Math.random() * 51);
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}