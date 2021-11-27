/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять 'комедия' на 'драма'

3) Изменить задний фон постера с фильмом на изображение 'bg.jpg'. Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

document.addEventListener('DOMContentLoaded', () => {
	const movieDB = {
		movies: [
			'Логан',
			'Лига справедливости',
			'Ла-ла лэнд',
			'Одержимость',
			'Скотт Пилигрим против...'
		]
	};

	const adv = document.querySelector('.promo__adv'),
		promo = document.querySelector('.promo__content'),
		genre = document.querySelector('.promo__genre'),
		promoBg = document.querySelector('.promo__bg'),
		filmList = document.querySelector('.promo__interactive-list'),
		filmInput = document.querySelector('.adding__input'),
		favorites = document.querySelector('input[type="checkbox"]'),
		btnAdd = document.querySelector('button');


	adv.remove();
	adaptive();
	showList(movieDB.movies, filmList);
	listenersForAddFilm();

	function filmSort(array){
		array.sort();
	}

	function showList(films, filmList) {
		filmList.innerHTML = '';
		filmSort(films);
		films.forEach((item, i) => {
			if (item.length > 21) {
				item = `${item.slice(0, 21)}...`;
			}
			filmList.insertAdjacentHTML('beforeend', `<li class = 'promo__interactive-item'>${i+1}. ${item}
			<div class="delete"></div></li>`);
		});
		listenersForRemoveFilms(films, filmList);
	}

	function listenersForRemoveFilms(films, filmList) {
		let filmItems = document.querySelectorAll('.promo__interactive-item');
		filmItems.forEach((elem, i) => {
			elem.firstElementChild.addEventListener('click', e => {
				e.preventDefault();
				delete movieDB.movies[i];
				showList(films, filmList);
			});
		});
	}

	function listenersForAddFilm(films, filmList) {
		btnAdd.addEventListener('click', e => {
			e.preventDefault();
			movieDB.movies.push(filmInput.value.toUpperCase());
			filmInput.value = '';
			if (favorites.checked) {
				console.log("Добавляем в избранное");
			}
			showList(films, filmList);
		});
	}

	function adaptive() {
		promo.style.width = '100%';
		genre.textContent = 'ДРАМА';
		promoBg.style.backgroundImage = 'url("img/bg.jpg")';
	}
});