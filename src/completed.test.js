/** 
* @jest-environment jsdom
*/
const {
        editCheckBox, deleteCompleted,
  } = require('./completed.js');

describe("Completed tests", () => {
    test("Test completed", () => {
        let tasks = { description: 'text', completed: false, index: 1 };
    
        const comp = true
        tasks.completed = comp
        editCheckBox(1, comp)
        expect(tasks.completed).toBe(true);
    });
});