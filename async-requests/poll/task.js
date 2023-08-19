const pollTitle = document.getElementById('poll__title');
const pollAnswer = document.getElementsByClassName('poll__answer');

let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll');
xhr.send();

xhr.onload = () => {
    if (xhr.readyState === xhr.DONE) {
        const jsonXhr = JSON.parse(xhr.response);
        const answers = jsonXhr.data.answers;

        pollTitle.textContent = jsonXhr.data.title;

        answers.forEach(element => {
            document.getElementById('poll__answers').insertAdjacentHTML(
                'beforeEnd',
                `<button class="poll__answer">${element}</button>`
            );
        });

        Array.from(pollAnswer).forEach(element => {
            element.addEventListener('click', () => {
                alert('Спасибо, ваш голос засчитан!');
            })
        })
    }
};

