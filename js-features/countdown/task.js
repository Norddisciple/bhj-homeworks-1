const countDown = function () {
    const timer = document.getElementById('timer');
    timer.textContent -= 1;
    if (timer.textContent <= 0) {
        alert('Вы победили в конкурсе!');
        clearInterval(counter);
    }
}
let counter = setInterval(countDown, 1000);