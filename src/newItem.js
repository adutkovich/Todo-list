import { item } from "./items";
import { items, updateLocalItems } from "./storage";
import { dailyContent } from "./daily";
import { updateItems } from "./storage";

const newItemModal = document.createElement('div');
const body = document.querySelector('body');

function newItem(){
    // greys out whole page
    
    newItemModal.classList.add('newItemModal');
    newItemModal.style.display = 'flex';

    body.appendChild(newItemModal);

    // Creates form window
    const formContainer = document.createElement('div');
    formContainer.classList.add('formContainer');
    newItemModal.appendChild(formContainer);
    
    const formHeader = document.createElement('h1');
    formHeader.textContent = 'Add New Todo';
    formHeader.classList.add('formHeader');
    formContainer.appendChild(formHeader);

    const form = document.createElement('form');
    formContainer.appendChild(form);
    form.setAttribute('method', 'post');

    const selectorHeader = document.createElement('p');
    selectorHeader.classList.add('selectorHeader');
    selectorHeader.textContent = 'Select category from list:';
    form.appendChild(selectorHeader); 
    
    // Category Selector
    const itemCategory = document.createElement('select');
    itemCategory.setAttribute('id', 'category');
    itemCategory.setAttribute('type', 'select');
    itemCategory.setAttribute('name', 'category');
    form.append(itemCategory);

    const dailyActivity = document.createElement('option');
    dailyActivity.setAttribute('value', 'dailyActivity');
    dailyActivity.setAttribute('name', 'category');
    dailyActivity.textContent = 'Daily Activity'
    itemCategory.appendChild(dailyActivity);

    const project = document.createElement('option');
    project.setAttribute('value', 'project');
    project.setAttribute('name', 'category');
    project.textContent = 'Project';
    itemCategory.appendChild(project);

    const bills = document.createElement('option');
    bills.setAttribute('value', 'bills');
    bills.setAttribute('name', 'category');
    bills.textContent = 'Bills';
    itemCategory.appendChild(bills);

    // Item/Task Name
    const itemName = document.createElement('input');
    itemName.setAttribute('id', 'itemInput');
    itemName.setAttribute('type', 'text');
    itemName.setAttribute('placeholder','Task Name');
    itemName.setAttribute('name', 'task');
    form.appendChild(itemName);

    // Short Desc
    const shortDescription = document.createElement('input');
    shortDescription.setAttribute('id', 'desc')
    shortDescription.setAttribute('type', 'text');
    shortDescription.setAttribute('placeholder', 'Short Description');
    form.appendChild(shortDescription);

    // finished radio button
    const radioContainer = document.createElement('div');
    radioContainer.classList.add('radioContainer');
    form.appendChild(radioContainer);
    const finishedText = document.createElement('p');
    finishedText.textContent = 'Finished?';
    radioContainer.appendChild(finishedText);

    // yes container
    const yesContainer = document.createElement('div');
    yesContainer.classList.add('yesContainer');
    radioContainer.appendChild(yesContainer);
    const finishedYes = document.createElement('input');
    finishedYes.setAttribute('id', 'finished');
    finishedYes.setAttribute('value', 'true');
    finishedYes.setAttribute('type', 'radio');
    finishedYes.setAttribute('name', 'finished');
    yesContainer.appendChild(finishedYes);
    const finishedTextYes = document.createElement('label');
    finishedTextYes.textContent = 'yes';
    yesContainer.appendChild(finishedTextYes);

    // noContainer
    const noContainer = document.createElement('div');
    noContainer.classList.add('noContainer');
    radioContainer.appendChild(noContainer);
    const finishedNo = document.createElement('input');
    finishedNo.setAttribute('id', 'finished');
    finishedNo.setAttribute('value', 'false');
    finishedNo.setAttribute('type', 'radio');
    finishedNo.setAttribute('name', 'finished');
    noContainer.appendChild(finishedNo);
    const finishedTextNo = document.createElement('label');
    finishedTextNo.textContent = 'no';
    noContainer.appendChild(finishedTextNo);

    // Submit Button
    const submitButton = document.createElement('button');
    submitButton.textContent = 'Add to list';
    submitButton.classList.add('submitButton');
    submitButton.setAttribute('type', 'submit');
    submitButton.setAttribute('value', 'Add to list');
    formContainer.appendChild(submitButton);

    submitButton.addEventListener('click', function(){
        const category = document.getElementById('category');
        const itemInput = document.getElementById('itemInput');
        const desc = document.getElementById('desc');
        const finished = document.getElementById('finished');

        const newItem = new item(category.value, itemInput.value, desc.value, finished.checked);
        items.push(newItem);
        updateLocalItems();
        closeModal();
        dailyContent();
    })

    window.onclick = function(e){
        if (e.target == newItemModal){
            closeModal();
        }
    }
}

function closeModal(){
    newItemModal.innerHTML = '';
    newItemModal.remove();
}

function showModal(){
    newItem();
}

export {showModal, items, newItem};