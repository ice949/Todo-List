const {
  addElement, deleteElement, List,
} = require('./add_remove.js');

describe('Add, Remove Element Test', () => {
  // mock the html
  document.body.innerHTML = '<div class="list-elements"></div>';
  // test the add to the local storage
  test('check add item in the list', () => {
    addElement('task');
    expect(List).toHaveLength(1);
    expect(JSON.parse(localStorage.getItem('List'))).toHaveLength(1);
  });

  test('check the remove from the localStorage', () => {
    const tasks = [{ description: 'text', completed: false, index: 1 },
      { description: 'two', completed: false, index: 2 },
      { description: 'three', completed: false, index: 3 }];
    localStorage.setItem('List', JSON.stringify(tasks));
    deleteElement(1);
    expect(JSON.parse(localStorage.getItem('List'))).toHaveLength(2);
  });
});