const value = document.querySelector('.dropdown__value');
const list = document.querySelector('.dropdown__list');
const dropdown = document.querySelector('.dropdown');

dropdown.addEventListener ('click' , () => {
    list.classList.toggle('dropdown__list_active');
});

const link = Array.from(document.querySelectorAll('.dropdown__link'));


for (let i = 0; i < link.length; i++) {
	link[i].onclick = () => {
		value.closest('div').textContent = link[i].textContent;
		return false;
	}
}

