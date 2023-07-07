import axios from 'axios';

export function fetchBreeds() {
  return axios
    .get('https://api.thecatapi.com/v1/breeds')
    .then(response => response.data)
    .catch(error => {
      console.error('Error fetching breeds:', error);
      throw error;
    });
}

export function fetchCatByBreed(breedId) {
  const apiKey =
    'live_xhSYbj6QACiNCoszN67oJyqI6HT5SvHbnnFkxFemSGWD6tfgYZN3JL2neBE3tthK';
    const url = `https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}&api_key=${apiKey}`;
    
  return axios
    .get(url)
    .then(response => response.data)
    .catch(error => {
      console.log('Error fetching cat:', error.message);
      throw error;
    });
}
