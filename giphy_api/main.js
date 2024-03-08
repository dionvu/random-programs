var form = document.getElementById('form');
var input = document.getElementById('input');
var term;
form.addEventListener('submit', function (event) {
    event.preventDefault();
    term = input.value;
    search(term);
    form.reset();
    console.log(term);
});
function search(term) {
    var img = document.querySelector('img');
    if (!img)
        return;
    fetch("https://api.giphy.com/v1/gifs/translate?api_key=47H0mK3fiGD1Jz6MXFG76sZSoHajT5Dp&s=".concat(term), { mode: 'cors' })
        .then(function (response) {
        return response.json();
    })
        .then(function (response) {
        img.src = response.data.images.original.url;
    })
        .catch(function (error) {
        console.error('Error fetching data:', error);
    });
}
;
