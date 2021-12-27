'use strict';

document.querySelector('button').addEventListener('click', () => {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'https://api.chucknorris.io/jokes/random');

    xhr.setRequestHeader('content-text', 'application/json; charset=utf-8');

    xhr.send();

    xhr.addEventListener('load', () => {
        if (xhr.status != 200) {
            document.querySelector('.joke').textContent = `Произошла ошибка ${xhr.status, xhr.statusText}`; 
        } else {
            document.querySelector('img').setAttribute('src', JSON.parse(xhr.response).icon_url);
            document.querySelector('.joke').textContent = JSON.parse(xhr.response).value;
        }
    });


});
