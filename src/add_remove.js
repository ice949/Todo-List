const List = JSON.parse(localStorage.getItem('List')) || [];

const createElement = (element) => {
  const ListSection = document.querySelector('.list-elements');
  const elementDiv = document.createElement('div');
  const checkBox = document.createElement('input');
  const task = document.createElement('input');
  const deleteButton = document.createElement('button');

  deleteButton.classList.add('delete-icon');
  deleteButton.innerHTML = 'X';

  elementDiv.classList.add('the-elements');

  checkBox.type = 'checkbox';
  checkBox.classList.add('the-checkbox');
  checkBox.checked = element.complete;

  task.value = element.description;
  task.placeholder = 'please dont leave empty';
  task.classList.add('task-layout');

  elementDiv.setAttribute('div_id', element.index);
  elementDiv.append(checkBox, task, deleteButton);

  ListSection.appendChild(elementDiv);
};

const renderList = (List) => {
  List.forEach((element) => {
    createElement(element);
  });
};

const localStorageTasks = (List) => {
  window.localStorage.setItem('List', JSON.stringify(List));
};

const localStorageGet = () => {
  const theList = window.localStorage.getItem('List');

  if (theList !== null) {
    renderList(JSON.parse(theList));
  }

  return theList;
};

// add element

const addElement = (value) => {
  const task = {
    description: value,
    completed: false,
    index: List.length + 1,
  };

  List.push(task);
  localStorageTasks(List);
  // return task;
  // createElement(task);
};

// delete element

const deleteElement = (ID) => {
  const theList = JSON.parse(localStorage.getItem('List'));
  theList.splice(ID - 1, 1);
  theList.forEach((element, index) => {
    element.index = index + 1;
  });
  localStorageTasks(theList);

  return theList;
};

const deletetask = (item) => {
  item.parentElement.remove();
};

// edit elements

const editElement = (ID, value) => {
  const theList = JSON.parse(localStorage.getItem('List'));

  theList.forEach((element) => {
    if (element.index === ID) {
      element.description = value;
    }
    localStorageTasks(theList);
  });
};

module.exports = {
  localStorageGet,
  addElement,
  deleteElement,
  editElement,
  localStorageTasks,
  renderList,
  deletetask,
  List,
};