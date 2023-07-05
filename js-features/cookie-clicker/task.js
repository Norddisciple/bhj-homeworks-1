const clik = document.getElementById('clicker__counter');
const image = document.getElementById("cookie");

let counter = 0;

function changeSizes() {
    counter++;
    clik.textContent = counter;
    if (counter % 2 == 0) {
        image.width = 200;
    } else {
        image.width = 250;
    }
}

image.onclick = changeSizes;
