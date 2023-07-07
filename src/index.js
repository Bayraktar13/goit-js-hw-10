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
  const breedName = cat.breeds[0].name;
  const description = cat.breeds[0].description;
  const temperament = cat.breeds[0].temperament;

  const html = `
    <img src="${cat.url}" alt="${breedName}">
    <h2>${breedName}</h2>
    <p><strong>Description:</strong> ${description}</p>
    <p><strong>Temperament:</strong> ${temperament}</p>
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
