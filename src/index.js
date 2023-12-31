import { fetchBreeds, fetchCatByBreed } from './cat-api';

const breedSelect = document.querySelector('.breed-select');
const loader = document.querySelector('.loader');
const error = document.querySelector('.error');
const catInfo = document.querySelector('.cat-info');

function showLoader() {
  loader.style.display = 'block';
}

function hideLoader() {
  loader.style.display = 'none';
}

function showError() {
  error.style.display = 'block';
}

function hideError() {
  error.style.display = 'none';
}

function showCatInfo(cat) {
  const breedName = cat.breed.name;
  const description = cat.breed.description;
  const temperament = cat.breed.temperament;

  const html = `
    <img src="${cat.url}" alt="${breedName}">
    <h2 class="title">${breedName}</h2>
    <p class="descriptions"><strong>Description:</strong> ${description}</p>
    <p class="temperament"><strong>Temperament:</strong> ${temperament}</p>
  `;

  catInfo.innerHTML = html;
  catInfo.style.display = 'block';
}

function hideCatInfo() {
  catInfo.style.display = 'none';
}

function populateBreedSelect(breeds) {
  breeds.forEach(breed => {
    const option = document.createElement('option');
    option.value = breed.id;
    option.textContent = breed.name;
    breedSelect.appendChild(option);
  });
}

function handleBreedSelectChange() {
  const selectedBreedId = breedSelect.value;

  if (selectedBreedId) {
    hideError();
    hideCatInfo();
    showLoader();

    fetchCatByBreed(selectedBreedId)
      .then(cat => {
        hideLoader();
        showCatInfo(cat);
      })
      .catch(error => {
        hideLoader();
        showError();
      });
  } else {
    hideCatInfo();
  }
}

document.addEventListener('DOMContentLoaded', () => {
  hideError();
  hideCatInfo();
  showLoader();

  fetchBreeds()
    .then(breeds => {
      hideLoader();
      populateBreedSelect(breeds);
      breedSelect.addEventListener('change', handleBreedSelectChange);
    })
    .catch(error => {
      hideLoader();
      showError();
    });
});
