/**
* @jest-environment jsdom
*/
const {
  editCheckBox, deleteCompleted,
} = require('./completed.js');

describe('Completed tests', () => {
  test('Test completed', () => {
    const tasks = { description: 'text', completed: false, index: 1 };

    const comp = true;
    tasks.completed = comp;
    editCheckBox(1, comp);
    expect(tasks.completed).toBe(true);
  });
});
test('Test for delete completed', () => {
  let List = [{ description: 'text', completed: true, index: 1 },
    { description: 'two', completed: false, index: 2 },
    { description: 'three', completed: true, index: 3 }];
  List = deleteCompleted(List);
  expect(List.length).toBe(1);
});
