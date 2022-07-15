const {
  localStorageTasks, renderList,
} = require('./add_remove.js');

let List = JSON.parse(localStorage.getItem('List')) || [];

const editCheckBox = (ID, event) => {
  List.forEach((element) => {
    if (element.index === ID) {
      element.completed = event;
    }
    localStorageTasks(List);
  });
};

const deleteCompleted = (data) => {
  const tasks = data.filter((element) => element.completed === false);
  const ListSection = document.querySelector('.list-elements');

  List.forEach((element, index) => {
    element.index = index + 1;
  });
  localStorageTasks(List);

  // ListSection.innerHTML = '';
  // renderList(List);
  
  return data = tasks;
};

module.exports = {
  editCheckBox, deleteCompleted,
};