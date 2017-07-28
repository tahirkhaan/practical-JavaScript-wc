var todos = ['item 1', 'item 2', 'item 3', 'item 4', 'item 5']
console.log(todos)
// it show result ['item 1', 'item 2', 'item 3', 'item 4', 'item 5']
// for deleting some data
todos.splice(0, 1) // item 1 deleted
// here 0 show the position of item and 1 show the number of deletion
todos.splice(4, 1) // item 5 deleted
