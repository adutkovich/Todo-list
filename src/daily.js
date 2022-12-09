// Loop over array to find all items marked for daily activity and display them on main content

import { localItems } from "./storage";

const main = document.querySelector('.main');

function dailyContent(){
    main.textContent = '';
    for (let item of localItems){
        if (item.category === 'dailyActivity'){
            const line = document.createElement('div');
            const itemName = document.createElement('div');
            const itemDesc = document.createElement('div');
            const doneButton = document.createElement('button');
            const itemRemove = document.createElement('button');
            
            line.classList.add('itemLine');
            main.appendChild(line);

            itemName.classList.add('itemName');
            itemName.textContent = item.task;
            line.appendChild(itemName);

            itemDesc.classList.add('itemDesc');
            itemDesc.textContent = item.desc;
            line.appendChild(itemDesc);

            doneButton.classList.add('doneButton');
            if (item.finished === true){
                doneButton.textContent = 'Done';
            } else{
                doneButton.textContent = 'Not Done';
            };
            line.appendChild(doneButton);

            itemRemove.classList.add('removeItem');
            }
    };
};


export {dailyContent};