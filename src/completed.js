const {
  localStorageTasks,
} = require('./add_remove.js');

const List = JSON.parse(localStorage.getItem('List')) || [];

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

  List.forEach((element, index) => {
    element.index = index + 1;
  });
  localStorageTasks(List);

  // ListSection.innerHTML = '';
  // renderList(List);
  data = tasks;
  return data;
};

module.exports = {
  editCheckBox, deleteCompleted,
};