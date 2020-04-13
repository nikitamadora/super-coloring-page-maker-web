'use strict';

document.addEventListener('DOMContentLoaded', function () {
  console.log('Hello Bulma!');
});

var button = document.querySelector("#test-button");
var endpoint = 'http://localhost:4000/api/v1/artboard';

// const index = (req, res) => {
//   return fetch(endpoint, {
//     method: 'GET',
//     redirect: 'follow'
//   })
//   .then((res) => {
//     console.log(res);
//     return res.json();
//   })
//   // .then(console.log('res', res))
//   .catch(err => console.log(err));
// };

var requestOptions = {
  method: 'GET',
  redirect: 'follow'
};

button.addEventListener('click', function () {
  fetch("http://localhost:4000/api/v1/artboard", requestOptions).then(function (response) {
    return response.json();
  }).then(function (result) {
    return console.log(result);
  }).catch(function (error) {
    return console.log('error', error);
  });
});