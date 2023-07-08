const dead = document.getElementById('dead');
const lost = document.getElementById('lost');

function getHole(index) {
    return document.getElementById(`hole${index}`);
}

for (let index = 1; index <= 9; index++) {

    const hole = getHole(index);

    hole.onclick = function () {
        if (hole.className.includes('hole_has-mole')) {
            dead.textContent++;
        } else lost.textContent++;

        if (+lost.textContent === 5) {
            alert('Вы проиграли:(');
            dead.textContent = 0;
            lost.textContent = 0;
        }

        if (+dead.textContent === 10) {
            alert('Вы выиграли!');
            dead.textContent = 0;
            lost.textContent = 0;
        }
    }
}