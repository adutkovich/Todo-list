// Stores user current items array to local storage

let localItems = [];
let items =[];

// For updating items from local Storage
function updateItems(){
    if('todoList' in localStorage){
        localItems = JSON.parse(localStorage.todoList);
        items = localItems;
    }else {
        console.log('added');
        localStorage.setItem('todoList', JSON.stringify(items));
    }
}

// Update localItems, used for making the list
function updateLocalItems(){
    localStorage.setItem('todoList', JSON.stringify(items));
    localItems = JSON.parse(localStorage.todoList);
}

export {updateItems, localItems, items, updateLocalItems };