'use strict';
document.querySelector('button').addEventListener('click', () => {
    axios.get('https://api.chucknorris.io/jokes/random')
    .then(response => {
        document.querySelector('img').setAttribute('src', response.data.icon_url);
        document.querySelector('.joke').textContent = response.data.value;
    })
    .catch(() => {
        document.querySelector('.joke').textContent = `Произошла ошибка`; 
    })
});