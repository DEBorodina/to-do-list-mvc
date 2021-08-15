function header(){
    return `<div class='header'><h1 class='header__title'>To do list</h1><div class='header__buttons'><button class="createButton" id="addButton"><button class="deleteAllButton" id="deleteAllButton"></button></div></div>`;
}

function card(todo){
    return `<div class="card" id='${todo.id}'>
              <div class="content">
                 <buttton class="delete">
                   <img src="icons/trash_icon.png" class="h-6 w-6">
                 </buttton>
                 <h1 class="title">${todo.title}</h1>
                 <p class="time">${todo.time}</p>
                 <h2 class="text">${todo.text}</h2>
                 <label class="container-input">
                   <input type="checkbox" class="checkbox" ${todo.isDone && 'checked ="checked"'}>
                   <span class="checkmark"></span>
                 </label>
             </div>
            </div>`
}

function modal(){
  return `<div class="fixed z-10 inset-0 overflow-y-auto hidden" id="modal"><div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"><div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"><span class="hidden sm:inline-block sm:align-middle sm:h-screen"> </span><div class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"><div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4"><div class="sm:flex sm:items-start"><div class="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 sm:mx-0 sm:h-10 sm:w-10"><svg class="h-6 w-6 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
</svg></div><div class="mt-3 text-center sm:mt-2 sm:ml-4 sm:text-left"><h3 class="text-lg leading-6 font-medium text-gray-900">Create new item</h3><div class="mt-2"><div class="mt-7"><input type="text" id="inputTitle" placeholder="Enetr title"><input type="text" id="inputTime" placeholder="Enter time"><input type="text" id="inputText" placeholder="Enter text"></div></div></div></div></div><div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse"><button class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-7 py-2 bg-blue-400 text-base font-medium text-white hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-300 sm:ml-3 sm:w-auto sm:text-sm" id="okButton">Add</button><button class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-300 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm" id="cancelButton">Cancel</button></div></div></div></div></div>`
}

export {card, header, modal};








/*
export function createCard(todo){
    const card = document.createElement('div');
    const cardContent = document.createElement('div');
    const deleteButton = document.createElement('buttton');
    const rubbishIcon = document.createElement('img');
    const cardTitle = document.createElement('h1');
    const cardTime = document.createElement('p');
    const cardText = document.createElement('h2');
    const inputContainer = document.createElement('label');
    const checkbox = document.createElement('input');
    const checkmark = document.createElement('span');

    checkbox.type = 'checkbox';
    rubbishIcon.src = "trash_icon.png";

    card.className = `card`;
    cardContent.className = `content`;
    deleteButton.className = `delete`;
    cardTitle.className = `title`;
    rubbishIcon.className = "h-6 w-6";
    cardTime.className = `time`;
    cardText.className = 'text';
    inputContainer.className = `container-input`;
    checkbox.className = `checkbox`;
    checkmark.className =`checkmark`;
    
    cardTitle.textContent = todo.title;
    cardText.textContent = todo.text;
    cardTime.textContent = todo.time;

    deleteButton.append(rubbishIcon);
    inputContainer.append(checkbox,checkmark);
    cardContent.append(deleteButton, cardTitle, cardTime, cardText, inputContainer);
    card.append(cardContent);
    root.append(card);

}

export function createModal() {
    const modal = document.createElement('div');
    modal.className = 'fixed z-10 inset-0 overflow-y-auto hidden';
    modal.id = "modal";
    root.append(modal);

    const owerlay = document.createElement('div');
    owerlay.className = "flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0";
    modal.append(owerlay);

    const back = document.createElement('div');
    back.className = 'fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity';
    owerlay.append(back);

    const content = document.createElement('span');
    content.className = 'hidden sm:inline-block sm:align-middle sm:h-screen';
    content.textContent = ' ';
    back.append(content);

    const align = document.createElement('div');
    align.className = 'inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full'
    back.append(align);

    const backgroundWhite = document.createElement('div');
    backgroundWhite.className = "bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4";
    align.append(backgroundWhite);

    const flex = document.createElement('div');
    flex.className = "sm:flex sm:items-start";
    backgroundWhite.append(flex);

    const img = document.createElement('div');
    img.className = "mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10";
    img.innerHTML = `<svg class="h-6 w-6 text-red-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
  </svg>`
    flex.append(img);

    const text = document.createElement('div');
    text.className = "mt-3 text-center sm:mt-2 sm:ml-4 sm:text-left";
    flex.append(text);

    const header = document.createElement('h3');
    header.className = "text-lg leading-6 font-medium text-gray-900";
    header.textContent = "Create new item";
    text.append(header);

    const article = document.createElement('div');
    article.className = "mt-2";
    text.append(article);

    const input = document.createElement('div');
    input.className = "mt-7";
    article.append(input);

    const inputTitle = document.createElement('input');
    const inputTime = document.createElement('input');
    const inputText = document.createElement('input');

    inputText.type = 'text';
    inputTime.type = 'text';
    inputTitle.type = 'text';

    inputText.id = 'inputText';
    inputTime.id = 'inputTime';
    inputTitle.id = 'inputTitle';

    inputTime.placeholder = 'Enter time';
    inputTitle.placeholder = 'Enetr title';
    inputText.placeholder = "Enter text";

    input.append(inputTitle, inputTime, inputText);

    const buttons = document.createElement('div');
    buttons.className = "bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse";
    align.append(buttons);

    const okButton = document.createElement('button');
    okButton.className = "w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-500 text-base font-medium text-white hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-300 sm:ml-3 sm:w-auto sm:text-sm";
    okButton.textContent = "Done";
    okButton.id = "okButton"
    buttons.append(okButton);

    const cancelButton = document.createElement('button');
    cancelButton.className = "mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-300 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm";
    cancelButton.textContent = "Cancel";
    cancelButton.id = 'cancelButton';
    buttons.append(cancelButton);
}

/*
export function createModal(){
    const overlay1 = document.createElement('div');
    const overlay2 = document.createElement('div');
    const overlay3 = document.createElement('div');
    const card = document.createElement('div');
    const cardContent = document.createElement('div');
    const cardTitle = document.createElement('h1');
    const inputTitle = document.createElement('input');
    const inputTime = document.createElement('input');
    const inputText = document.createElement('textarea');
    const buttonsContainer = document.createElement('div')
    const doneButton = document.createElement('button');
    const cancelButton = document.createElement('button');

    buttonsContainer.className = 'buttonsContainer';
    doneButton.className ='doneButton';
    cancelButton.className ='cancelButton';

    doneButton.id = 'okButton';
    cancelButton.id = 'cancelButton';
    inputTitle.id = 'inputTitle';
    inputTime.id = 'inputTime';
    inputText.id = 'inputText';

    inputTitle.type = 'text';
    inputTitle.placeholder="Введите название";
    inputTime.type = 'text';
    inputTime.placeholder="Введите время";
    inputText.placeholder="Введите описание";

    card.className = 'card shadow-none';
    cardContent.className = 'content';
    cardTitle.className = 'creating-input-title';
    inputTitle.className = 'input_title';
    inputTime.className = 'input_time';
    inputText.className = 'input_text';
    cardTitle.textContent = 'Создание задачи'; 

    overlay1.className = "fixed z-10 inset-0 overflow-y-auto hidden";
    overlay1.id = 'modal';
    overlay2.className = "flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0";
    overlay3.className = "fixed inset-0 bg-gray-900 bg-opacity-70 transition-opacity flex justify-center";

    buttonsContainer.append(doneButton,cancelButton);
    cardContent.append(cardTitle, inputTitle, inputTime, inputText, buttonsContainer);
    card.append(cardContent);
    overlay3.append(card);
    overlay2.append(overlay3);
    overlay1.append(overlay2);
    root.append(overlay1);
}

export function createAddButton(){
    const createButton = document.createElement('button');
    createButton.className ='createButton';
    createButton.textContent = 'Create new card';
    createButton.id = 'addButton';
    root.append(createButton);
}
*/

