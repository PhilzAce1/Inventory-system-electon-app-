const first = document.querySelector('#first-column\\ ');
const second = document.querySelector('#second-column');
const third = document.querySelector('#third-column');
const fourth = document.querySelector('#fourth\\ column');
const serialNumbers = document.querySelectorAll('.sn');

const likeState = {
  isOpen: false
};
const removeElement = () => {
  const delBtns = document.querySelectorAll('.del');
  Array.from(delBtns).map(x => {
    x.addEventListener('click', e => {
      e.target.parentNode.parentElement.remove();
    });
  });
};

const closeForm = selector => {
  removeElement();
  const btn = document.querySelector(`${selector}`);
  btn.addEventListener('click', () => {
    document.querySelector('.form').style.display = 'none';
  });
  likeState.isOpen = false;
};
const handleSubmit = () => {
  removeElement();
  const lastSn = Array.from(serialNumbers).length;
  console.log(lastSn);
  const table = document.querySelector('table');
  var btn = document.createElement('tr');
  const newNode = `
  <td><span>${first.value} </span> <button class=" add edit-btn">edit</button></td>
  <td><span>${second.value} </span> <button class=" add edit-btn">edit</button></td>
  <td><span>${third.value} </span> <button class=" add edit-btn">edit</button></td>
  <td class="last-on-row">
    <span>${fourth.value} </span> <button class=" add edit-btn">edit</button>
  </td>
  <td
  style="display: flex;flex-flow: row;align-items: center; border: none;"
>
  <button class="del" style="background:red">X</button>
</td>
`;
  btn.innerHTML = newNode;
  table.appendChild(btn);
  document.querySelector('.form').style.display = 'none';
};
const displayForm = selector => {
  const addBtn = document.querySelector(`${selector}`);
  addBtn.addEventListener('click', () => {
    document.querySelector('.form').style.display = 'flex';
  });
  likeState.isOpen = true;
};

const controlAddBtn = () => {
  removeElement();
  document.querySelector('#add').addEventListener('click', () => {
    if (likeState.isOpen == false) {
      displayForm('#add');
    } else {
      closeForm('#add');
    }
  });
};
controlAddBtn();

const removeRow = x => {
  x.addEventListener('click', e => {
    e.parentNode.parentElement.remove();
  });
};
