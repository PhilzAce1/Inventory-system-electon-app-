const allArray = [];
// this is to save the current information available
const rendering = content => {
  const table = document.querySelector('table');
  var btn = document.createElement('tr');
  btn.innerHTML = content;
  table.appendChild(btn);
};
const render = () => {
  //check if there is already data saved
  if (!localStorage.getItem('savedState')) {
    return null;
  }
  document
    .querySelector('table')
    .removeChild(document.querySelector('table').children[0]);
  // get the data and save it as a variable
  const thingsHere = localStorage.getItem('savedState');
  //render to the front page by appending to the innnerHTML
  const newArray = thingsHere.split(',');
  for (content of newArray) {
    rendering(content);
  }
};
const save = () => {
  const thingsHere = [...document.querySelectorAll('tr')].map(x => x.innerHTML);
  localStorage.clear();
  localStorage.setItem('savedState', thingsHere);
  console.log('saved');
  // render();
};
// save();
setInterval(() => {
  save();
}, 5000);
render();
