document.addEventListener('DOMContentLoaded', () => {
  console.log('Hello Bulma!');
});

const button = document.querySelector("#test-button");
const endpoint = 'http://localhost:4000/api/v1/artboard'

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

const requestOptions = {
  method: 'GET',
  redirect: 'follow'
};

button.addEventListener('click', () => {
  fetch("http://localhost:4000/api/v1/artboard", requestOptions)
    .then(response => response.json())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
});