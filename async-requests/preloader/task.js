const loader = document.getElementById('loader');
const itemsContainer = document.getElementById('items');

const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses')
xhr.send()


xhr.onload = () => {
    if (xhr.readyState === xhr.DONE) {
        loader.classList.remove('loader_active');

        let response = JSON.parse(xhr.response).response.Valute

        for (valute in response) {
            const codeItem = response[valute].CharCode;
            const valueItem = response[valute].Value;

            const valueHTML =
                `<div class="item">
					<div class="item__code">${codeItem}</div>
					<div class="item__value">${valueItem}</div>
					<div class="item__currency">руб.</div>
				</div>`;
            itemsContainer.insertAdjacentHTML('beforeend', valueHTML);
        }
    }
}