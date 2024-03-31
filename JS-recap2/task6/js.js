'use strict';

const body = document.querySelector('body');

const ratings = [];
promptUser();
const ol = document.createElement('ol');
ratings.sort((a, b) => a.rating - b.rating);
for (let rating of ratings) {
  const li = document.createElement('li');
  li.innerText = `Title : ${rating.title} Rating: ${rating.rating}`;
  ol.appendChild(li);
}
body.appendChild(ol);
const h1 = document.createElement('h1');
h1.innerText = `Highest rated movie : ${ratings[ratings.length - 1].title}`;
body.appendChild(h1);

function promptUser() {
  for (let i = 0; i < 5; i++) {
    const title = prompt('Give the title of the movie');
    let rate;
    do {
      rate = parseInt(prompt('Rate the movie between 1-5'));
    } while (isNaN(rate) || rate < 1 || rate > 5);
    ratings.push(rateMovie(title, rate));
  }
}

function rateMovie(title, rating) {
  const movieRating = {
    title: title,
    rating: rating,
  };
  return movieRating;
}

