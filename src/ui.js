import {showModal} from "./newItem";
import { dailyContent } from "./daily";
import { updateItems } from "./storage";


const sidebar = document.querySelector('.sidebar');

function uiSetup(){
    const todoText = document.createElement('h1');
    todoText.textContent = 'Todo';
    todoText.classList.add('todoText');
    sidebar.appendChild(todoText);

    const dailies = document.createElement('button');
    dailies.textContent = 'Daily Activities';
    dailies.classList.add('dailies');
    dailies.addEventListener('click', function(){
        dailyContent();
    });
    sidebar.appendChild(dailies);
    

    const projects = document.createElement('button');
    projects.textContent = 'Projects';
    projects.classList.add('projects');
    sidebar.appendChild(projects);

    const bills = document.createElement('button');
    bills.textContent = 'Bills';
    bills.classList.add('bills');
    sidebar.appendChild(bills);

    const unfinished = document.createElement('button');
    unfinished.textContent = 'Yet To Be Completed Tasks';
    unfinished.classList.add('unfinished');
    sidebar.appendChild(unfinished);
    

    const clearAll = document.createElement('button');
    clearAll.textContent = 'Clear All Items';
    clearAll.classList.add('clearAll');
    sidebar.appendChild(clearAll);
    clearAll.addEventListener('click', function(){
        localStorage.clear();
    });

    const createItem = document.createElement('button');
    createItem.textContent = 'New Item';
    createItem.classList.add('createItem');
    sidebar.appendChild(createItem);

    createItem.addEventListener('click', function(){
        showModal();
    });
    updateItems();
    dailyContent();
}

export {uiSetup}; 