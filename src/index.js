import './css/styles.css';
import debounce from 'lodash.debounce';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import fetchCountries from './fetchCountries';

const inputEl = document.querySelector('#search-box');
const countriesEl = document.querySelector('.country-info');

const DEBOUNCE_DELAY = 300;

inputEl.addEventListener('input', debounce(searchCountries, DEBOUNCE_DELAY));

function searchCountries(e) {
  if (!e.target.value.trim()) {
    insertsHtmlText('');
    return;
  }

  const name = e.target.value;
  console.log(name);

  fetchCountries(name)
    .then(convertToArr)
    .then(convertToHtml)
    .then(insertsHtmlText)
    .catch(() => {
      insertsHtmlText('');
      Notify.failure('Oops, there is no country with that name');
    });
}

function objectInLine(object) {
  const objectText = [];
  for (const key in object) {
    objectText.push(object[key]);
  }
  return objectText.join(', ');
}

function convertToArr(cantry) {
  const cantryArr = [];
  cantry.map(cantry => {
    cantryArr.push({
      name: cantry.name.official,
      capital: cantry.capital,
      population: cantry.population,
      flags: cantry.flags.svg,
      languages: cantry.languages,
    });
  });
  console.log(cantryArr);
  return cantryArr;
}

function convertToHtml(cantryArr) {
  if (cantryArr.length === 1) {
    return cantryArr
      .map(({ flags, name, capital, population, languages }) => {
        return `<img src="${flags}" alt="${name}" width="20">
    <span>${name}</span>
    <p>capital: ${capital}</p>
    <p>population: ${population}</p>
    <p>languages: ${objectInLine(languages)}</p>`;
      })
      .join('');
  }

  return cantryArr
    .map(({ flags, name }) => {
      return `<img src="${flags}" alt="${name}" width="20">
    <span>${name}</span>`;
    })
    .slice(0, 10)
    .join('');
}

function insertsHtmlText(text) {
  countriesEl.innerHTML = text;
}
