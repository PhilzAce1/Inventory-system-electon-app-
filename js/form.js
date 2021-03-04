const state = {
  clicked: false
};
const editBtnController = () => {
  const editBtns = document.querySelectorAll('.edit-btn');
  // console.log(editBtns);
  Array.from(editBtns).map(x => {
    x.addEventListener('click', e => {
      if (!state.clicked) {
        e.target.parentNode.children[0].innerHTML = `<input type="text" name="newText" value='' class="semi-input" autofocus="true" id="newText"/>`;
        x.innerText = 'done';
      } else if (state.clicked) {
        e.target.parentNode.children[0].innerHTML = `<span>${e.target.parentNode.children[0].children[0].value}</span>`;
        x.innerText = 'edit';
      }
      state.clicked = !state.clicked;
    });
  });
};
editBtnController();
document.getElementById('add').addEventListener('click', () => {
  editBtnController();
});
document.getElementById('btn-done').addEventListener('click', () => {
  editBtnController();
});
