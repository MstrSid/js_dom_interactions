/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
	movies: [
		"Логан",
		"Лига справедливости",
		"Ла-ла лэнд",
		"Одержимость",
		"Скотт Пилигрим против..."
	]
};

const adv = document.querySelector(".promo__adv"),
	promo = document.querySelector(".promo__content"),
	genre = document.querySelector(".promo__genre"),
	promoBg = document.querySelector(".promo__bg"),
	films = document.querySelector(".promo__interactive-list");

adv.remove();
promo.style.width = "100%";
genre.textContent = "ДРАМА";
promoBg.style.backgroundImage = "url('img/bg.jpg')";

films.innerHTML = "";

movieDB.movies.sort();

movieDB.movies.forEach((item, i) => {
	films.insertAdjacentHTML("beforeend", `<li class = "promo__interactive-item">${i+1}. ${item}</li>`);
});