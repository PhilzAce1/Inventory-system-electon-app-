const renderSearch = content => {
  return console.log('something is here', content);
  // const table = document.querySelector('table');
  // var btn = document.createElement('tr');
  // btn.innerHTML = content;
  // table.appendChild(btn);
};
const closeSearchModal = selector => {
  const btn = document.querySelector(`${selector}`);
  btn.addEventListener('click', () => {
    document.querySelector('.search-form').style.display = 'none';
  });
  likeState.isOpen = false;
};
const handleSearch = () => {};
const displaySearchForm = selector => {
  const searchBtn = document.querySelector(`${selector}`);
  searchBtn.addEventListener('click', () => {
    document.querySelector('.search-form').style.display = 'flex';
  });
  likeState.isOpen = true;
};
const controlSearchBtn = () => {
  document.querySelector('#show-search').addEventListener('click', () => {
    console.log('firing 2');
    if (likeState.isOpen == false) {
      console.log('fire one');
      displaySearchForm('#show-search');
    } else {
      closeSearchModal('#show-search');
    }
  });
};
const search = input => {
  if (!input.value.length) {
    alert('please input a search parameter');
    return false;
  }
  const elementState = [];
  // return console.log(localStorage.getItem('savedState'));
  const thingsHere = [...document.querySelectorAll('tr')];
  // .map(x => x.innerHTML);
  thingsHere.shift();
  const newThings = thingsHere.filter(x => {
    console.log(`${x.children[0].children[0].innerText} = ${input.value}`);
    console.log(Number(x.children[0].children[0].innerText) == input.value);
    return Number(x.children[0].children[0].innerText) == input.value;
  });
  return renderSearch(...newThings);

  console.clear();
  // return console.log(...newThings);

  newThings
    ? thingsHere
    : alert('you search parameter does not match any data here');
};

document.querySelector('#search-btn').addEventListener('click', () => {
  search(document.querySelector('#search\\ '));
  // search();
});

controlSearchBtn();
// document.body.addEventListener('click', e => console.log(e.target));
