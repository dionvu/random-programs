/**
 * Search top GIFs with Giphy api.
 * @date 2024 March 7
 */

const form = document.getElementById('form') as HTMLFormElement;
const input = document.getElementById('input') as HTMLInputElement;
let term: string;

form.addEventListener('submit', (event) => {
  event.preventDefault();
  term = input.value;
  search(term);
  form.reset();
});

async function search(term: string) {
  const img: HTMLImageElement | null = document.querySelector('img');
  if (!img) return;

  const response = await fetch(`https://api.giphy.com/v1/gifs/translate?api_key=47H0mK3fiGD1Jz6MXFG76sZSoHajT5Dp&s=${term}`, { mode: 'cors' });
  const data = await response.json();
  img.src = data.data.images.original.url;
};

/*
function search(term: string): void {
  const img: HTMLImageElement | null = document.querySelector('img');
  if (!img) return;

  fetch(`https://api.giphy.com/v1/gifs/translate?api_key=47H0mK3fiGD1Jz6MXFG76sZSoHajT5Dp&s=${term}`, { mode: 'cors' })
    .then(function(response) {
      return response.json();
    })
    .then(function(response) {
      img.src = response.data.images.original.url;
    })
    .catch(function(error) {
      console.error('Error fetching data:', error);
    });
};
*/
