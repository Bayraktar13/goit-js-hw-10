import axios from 'axios';

export function fetchBreeds() {
  return axios
    .get('https://api.thecatapi.com/v1/breeds')
    .then(response => {
      if (response.status !== 200) {
        throw new Error(`Error fetching breeds: ${response.status}`);
      }
      return response.data;
    })
    .catch(error => {
      console.error(error);
      throw error;
    });
}

export function fetchCatByBreed(breedId) {
  const apiKey =
    'live_xhSYbj6QACiNCoszN67oJyqI6HT5SvHbnnFkxFemSGWD6tfgYZN3JL2neBE3tthK';
  const url = `https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}&api_key=${apiKey}`;
  //   return axios
  //     .get(url)
  //     .then(response => {
  //       if (response.status !== 200) {
  //         throw new Error(`Error fetching cat: ${response.status}`);
  //       }
  //       return response.data;
  //     })
  //     .catch(error => {
  //       console.error(error);
  //       throw error;
  //     });
  // }
  return axios
    .get(url)
    .then(response => {
      if (response.status !== 200) {
        throw new Error(`Error fetching cat: ${response.status}`);
      }
      const catData = response.data[0];
      const breedData = catData.breeds.length > 0 ? catData.breeds[0] : null;
      return {
        url: catData.url,
        breed: {
          name: breedData ? breedData.name : 'Unknown Breed',
          description: breedData
            ? breedData.description
            : 'No description available',
          temperament: breedData
            ? breedData.temperament
            : 'Unknown temperament',
        },
      };
    })
    .catch(error => {
      console.error(error);
      throw error;
    });
}
