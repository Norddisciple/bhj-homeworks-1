const countDown = function () {
    const timer = document.getElementById('timer');
    timer.textContent -= 1;
    if (timer.textContent == 0) {
        alert('Вы победили в конкурсе!');
        clearInterval(counter);
    }
}
let counter = setInterval(countDown, 1000);


// const countDownDate = new Date().setSeconds(new Date().getSeconds() + Number(timer.textContent));

// function startTimer() {
//     const currentDate = new Date().getTime();
//     const countDown = new Date(countDownDate).getTime();
//     const diff = (countDown - currentDate) / 1000;

//     if (diff < 0) {
//         alert("Вы победили в конкурсе!");
//         clearInterval(timerId);
//     } else {
//         const hours = String(Math.floor((diff % (60 * 60 * 24)) / (60 * 60))).padStart(2, "0");
//         const minutes = String(Math.floor((diff % (60 * 60)) / 60)).padStart(2, "0");
//         const seconds = String(Math.floor(diff % 60)).padStart(2, "0");

//         timer.textContent = hours + ":" + minutes + ":" + seconds;
//     }
// }

// startTimer();
// let timerId = setInterval(startTimer, 1000);