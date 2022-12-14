import './css/styles.css';
import debounce from 'lodash.debounce';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import fetchCountries from './fetchCountries';
import countrieHbs from './countrie-card.hbs';
import countriesHbs from './countries-cards.hbs';

const inputEl = document.querySelector('#search-box');
const countriesEl = document.querySelector('.country-info');
const countriesLestEl = document.querySelector('.country-list');

const DEBOUNCE_DELAY = 300;

inputEl.addEventListener('input', debounce(searchCountries, DEBOUNCE_DELAY));

function searchCountries(e) {
  if (!e.target.value.trim()) {
    onInnerHtmlCliner(countriesEl, countriesLestEl);
    return;
  }

  const name = e.target.value;

  fetchCountries(name)
    .then(countriesInHtml)
    .catch(error => {
      onInnerHtmlCliner(countriesEl, countriesLestEl);
      Notify.failure('Oops, there is no country with that name');
      // console.log(error);
    });
}

function onInnerHtmlCliner(...objects) {
  for (const object of objects) {
    object.innerHTML = '';
  }
}

function countriesInHtml(countries) {
      onInnerHtmlCliner(countriesEl, countriesLestEl);
      if (countries.length === 1) {
        countriesEl.innerHTML = countrieHbs(countries[0]);
        return;
      }
      if (countries.length > 10) {
        Notify.info('Too many matches found. Please enter a more specific name.');
        return;
      }
      countries
        .forEach(country =>
          countriesLestEl.insertAdjacentHTML('beforeend', countriesHbs(country))
        )
}