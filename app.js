const mainComp = document.querySelector('.main-component');
const mainButton = document.querySelector('.main-button');
console.log(mainButton);

mainButton.addEventListener('click', function (e) {
  e.preventDefault();
  console.log('asii');
  const version = document.createElement('p');
  version.innerText = 'version 2';

  mainComp.appendChild(version);
});
