/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/daily.js":
/*!**********************!*\
  !*** ./src/daily.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"dailyContent\": () => (/* binding */ dailyContent)\n/* harmony export */ });\n/* harmony import */ var _items__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./items */ \"./src/items.js\");\n/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage */ \"./src/storage.js\");\n// Loop over array to find all items marked for daily activity and display them on main content\n\n\n\n\n\nconst main = document.querySelector('.main');\n\nfunction dailyContent(){\n    main.textContent = '';\n    for (let item of _storage__WEBPACK_IMPORTED_MODULE_1__.localItems){\n        if (item.category === 'dailyActivity'){\n            const line = document.createElement('div');\n            const itemName = document.createElement('div');\n            const itemDesc = document.createElement('div');\n            const doneButton = document.createElement('button');\n            const itemRemove = document.createElement('button');\n            \n            line.classList.add('itemLine');\n            main.appendChild(line);\n\n            itemName.classList.add('itemName');\n            itemName.textContent = item.task;\n            line.appendChild(itemName);\n\n            itemDesc.classList.add('itemDesc');\n            itemDesc.textContent = item.desc;\n            line.appendChild(itemDesc);\n\n            doneButton.classList.add('doneButton');\n            if (item.finished === true){\n                doneButton.textContent = 'Done';\n            } else{\n                doneButton.textContent = 'Not Done';\n            };\n            line.appendChild(doneButton);\n\n            itemRemove.classList.add('removeItem');\n            }\n    };\n    // for (let i = 0; i < localStorage.length; i++){\n    //     main.textContent = localStorage.getItem('dailyActivity');\n    // };\n};\n\n\n\n\n//# sourceURL=webpack://todo-list/./src/daily.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui */ \"./src/ui.js\");\n/* harmony import */ var _items__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./items */ \"./src/items.js\");\n\n\n\n(0,_ui__WEBPACK_IMPORTED_MODULE_0__.uiSetup)();\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/items.js":
/*!**********************!*\
  !*** ./src/items.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"item\": () => (/* binding */ item)\n/* harmony export */ });\nclass item {\n    constructor(category, task, desc, finished){\n        this.category = category;\n        this.task = task;\n        this.desc = desc;\n        this.finished = finished;\n    }\n}\n\n\n//# sourceURL=webpack://todo-list/./src/items.js?");

/***/ }),

/***/ "./src/newItem.js":
/*!************************!*\
  !*** ./src/newItem.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"items\": () => (/* reexport safe */ _storage__WEBPACK_IMPORTED_MODULE_1__.items),\n/* harmony export */   \"newItem\": () => (/* binding */ newItem),\n/* harmony export */   \"showModal\": () => (/* binding */ showModal)\n/* harmony export */ });\n/* harmony import */ var _items__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./items */ \"./src/items.js\");\n/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage */ \"./src/storage.js\");\n/* harmony import */ var _daily__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./daily */ \"./src/daily.js\");\n\n\n\n\n\nconst newItemModal = document.createElement('div');\nconst body = document.querySelector('body');\n\nfunction newItem(){\n    // greys out whole page\n    \n    newItemModal.classList.add('newItemModal');\n    newItemModal.style.display = 'flex';\n\n    body.appendChild(newItemModal);\n\n    // Creates form window\n    const formContainer = document.createElement('div');\n    formContainer.classList.add('formContainer');\n    newItemModal.appendChild(formContainer);\n    \n    const formHeader = document.createElement('h1');\n    formHeader.textContent = 'Add New Todo';\n    formHeader.classList.add('formHeader');\n    formContainer.appendChild(formHeader);\n\n    const form = document.createElement('form');\n    formContainer.appendChild(form);\n    form.setAttribute('method', 'post');\n\n    const selectorHeader = document.createElement('p');\n    selectorHeader.classList.add('selectorHeader');\n    selectorHeader.textContent = 'Select category from list:';\n    form.appendChild(selectorHeader); \n    \n    // Category Selector\n    const itemCategory = document.createElement('select');\n    itemCategory.setAttribute('id', 'category');\n    itemCategory.setAttribute('type', 'select');\n    itemCategory.setAttribute('name', 'category');\n    form.append(itemCategory);\n\n    const dailyActivity = document.createElement('option');\n    dailyActivity.setAttribute('value', 'dailyActivity');\n    dailyActivity.setAttribute('name', 'category');\n    dailyActivity.textContent = 'Daily Activity'\n    itemCategory.appendChild(dailyActivity);\n\n    const project = document.createElement('option');\n    project.setAttribute('value', 'project');\n    project.setAttribute('name', 'category');\n    project.textContent = 'Project';\n    itemCategory.appendChild(project);\n\n    const bills = document.createElement('option');\n    bills.setAttribute('value', 'bills');\n    bills.setAttribute('name', 'category');\n    bills.textContent = 'Bills';\n    itemCategory.appendChild(bills);\n\n    // Item/Task Name\n    const itemName = document.createElement('input');\n    itemName.setAttribute('id', 'itemInput');\n    itemName.setAttribute('type', 'text');\n    itemName.setAttribute('placeholder','Task Name');\n    itemName.setAttribute('name', 'task');\n    form.appendChild(itemName);\n\n    // Short Desc\n    const shortDescription = document.createElement('input');\n    shortDescription.setAttribute('id', 'desc')\n    shortDescription.setAttribute('type', 'text');\n    shortDescription.setAttribute('placeholder', 'Short Description');\n    form.appendChild(shortDescription);\n\n    // finished radio button\n    const radioContainer = document.createElement('div');\n    radioContainer.classList.add('radioContainer');\n    form.appendChild(radioContainer);\n    const finishedText = document.createElement('p');\n    finishedText.textContent = 'Finished?';\n    radioContainer.appendChild(finishedText);\n\n    // yes container\n    const yesContainer = document.createElement('div');\n    yesContainer.classList.add('yesContainer');\n    radioContainer.appendChild(yesContainer);\n    const finishedYes = document.createElement('input');\n    finishedYes.setAttribute('id', 'finished');\n    finishedYes.setAttribute('value', 'true');\n    finishedYes.setAttribute('type', 'radio');\n    finishedYes.setAttribute('name', 'finished');\n    yesContainer.appendChild(finishedYes);\n    const finishedTextYes = document.createElement('label');\n    finishedTextYes.textContent = 'yes';\n    yesContainer.appendChild(finishedTextYes);\n\n    // noContainer\n    const noContainer = document.createElement('div');\n    noContainer.classList.add('noContainer');\n    radioContainer.appendChild(noContainer);\n    const finishedNo = document.createElement('input');\n    finishedNo.setAttribute('id', 'finished');\n    finishedNo.setAttribute('value', 'false');\n    finishedNo.setAttribute('type', 'radio');\n    finishedNo.setAttribute('name', 'finished');\n    noContainer.appendChild(finishedNo);\n    const finishedTextNo = document.createElement('label');\n    finishedTextNo.textContent = 'no';\n    noContainer.appendChild(finishedTextNo);\n\n    // Submit Button\n    const submitButton = document.createElement('button');\n    submitButton.textContent = 'Add to list';\n    submitButton.classList.add('submitButton');\n    submitButton.setAttribute('type', 'submit');\n    submitButton.setAttribute('value', 'Add to list');\n    formContainer.appendChild(submitButton);\n\n    submitButton.addEventListener('click', function(){\n        const category = document.getElementById('category');\n        const itemInput = document.getElementById('itemInput');\n        const desc = document.getElementById('desc');\n        const finished = document.getElementById('finished');\n\n        const newItem = new _items__WEBPACK_IMPORTED_MODULE_0__.item(category.value, itemInput.value, desc.value, finished.checked);\n        _storage__WEBPACK_IMPORTED_MODULE_1__.items.push(newItem);\n        (0,_storage__WEBPACK_IMPORTED_MODULE_1__.updateLocalItems)();\n        closeModal();\n        (0,_daily__WEBPACK_IMPORTED_MODULE_2__.dailyContent)();\n    })\n\n    window.onclick = function(e){\n        if (e.target == newItemModal){\n            closeModal();\n        }\n    }\n}\n\nfunction closeModal(){\n    newItemModal.innerHTML = '';\n    newItemModal.remove();\n}\n\nfunction showModal(){\n    newItem();\n}\n\n\n\n//# sourceURL=webpack://todo-list/./src/newItem.js?");

/***/ }),

/***/ "./src/storage.js":
/*!************************!*\
  !*** ./src/storage.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"items\": () => (/* binding */ items),\n/* harmony export */   \"localItems\": () => (/* binding */ localItems),\n/* harmony export */   \"updateItems\": () => (/* binding */ updateItems),\n/* harmony export */   \"updateLocalItems\": () => (/* binding */ updateLocalItems)\n/* harmony export */ });\n// Stores user current items array to local storage\n\nlet localItems = [];\nlet items =[];\n\n// For updating items from local Storage\nfunction updateItems(){\n    if('todoList' in localStorage){\n        localItems = JSON.parse(localStorage.todoList);\n        items = localItems;\n    }else {\n        console.log('added');\n        localStorage.setItem('todoList', JSON.stringify(items));\n    }\n}\n\n// Update localItems, used for making the list\nfunction updateLocalItems(){\n    localStorage.setItem('todoList', JSON.stringify(items));\n    localItems = JSON.parse(localStorage.todoList);\n}\n\n\n\n//# sourceURL=webpack://todo-list/./src/storage.js?");

/***/ }),

/***/ "./src/ui.js":
/*!*******************!*\
  !*** ./src/ui.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"uiSetup\": () => (/* binding */ uiSetup)\n/* harmony export */ });\n/* harmony import */ var _newItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./newItem */ \"./src/newItem.js\");\n/* harmony import */ var _items__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./items */ \"./src/items.js\");\n/* harmony import */ var _daily__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./daily */ \"./src/daily.js\");\n/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./storage */ \"./src/storage.js\");\n\n\n\n\n\n\n\nconst sidebar = document.querySelector('.sidebar');\n\nfunction uiSetup(){\n    const todoText = document.createElement('h1');\n    todoText.textContent = 'Todo';\n    todoText.classList.add('todoText');\n    sidebar.appendChild(todoText);\n\n    const dailies = document.createElement('button');\n    dailies.textContent = 'Daily Activities';\n    dailies.classList.add('dailies');\n    dailies.addEventListener('click', function(){\n        (0,_daily__WEBPACK_IMPORTED_MODULE_2__.dailyContent)();\n    });\n    sidebar.appendChild(dailies);\n    \n\n    const projects = document.createElement('button');\n    projects.textContent = 'Projects';\n    projects.classList.add('projects');\n    sidebar.appendChild(projects);\n\n    const bills = document.createElement('button');\n    bills.textContent = 'Bills';\n    bills.classList.add('bills');\n    sidebar.appendChild(bills);\n\n    const unfinished = document.createElement('button');\n    unfinished.textContent = 'Yet To Be Completed Tasks/clear local storage';\n    unfinished.classList.add('unfinished');\n    sidebar.appendChild(unfinished);\n    unfinished.addEventListener('click', function(){\n        localStorage.clear();\n    })\n\n    const createItem = document.createElement('button');\n    createItem.textContent = 'New Item';\n    createItem.classList.add('createItem');\n    sidebar.appendChild(createItem);\n    \n    // const newItemOne = new item('dailyActivity', 'run', 'run', false);\n    // items.push(newItemOne);\n    createItem.addEventListener('click', function(){\n        (0,_newItem__WEBPACK_IMPORTED_MODULE_0__.showModal)();\n    });\n    (0,_storage__WEBPACK_IMPORTED_MODULE_3__.updateItems)();\n    (0,_daily__WEBPACK_IMPORTED_MODULE_2__.dailyContent)();\n}\n\n \n\n//# sourceURL=webpack://todo-list/./src/ui.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;