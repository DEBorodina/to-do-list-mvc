function header(todos){
  let completed = todos.filter(function(item) {
    return item.isDone;
  }).length;
  let inProgress = todos.length-completed;
  return `
  <header id='header' class='header'>
   <h1 class='header__title'>To do list</h1>
   <div class="header__content">
    <svg class="diagram" height="120" width="120">
        <circle class='diagram__inprogress' cy="60" cx="60" r="50"></circle>
        <circle class='diagram__completed' cy="60" cx="60" r="50" stroke-dasharray="${completed === 0?0:(completed / (completed + inProgress) * 314)} ${completed === 0?314:(1 - (completed / (completed + inProgress))) * 314}" stroke-dashoffset="78.5" stroke-width="${completed?20:0}px"></circle>
        <text class='diagram__text' x="${(completed / (completed + inProgress) * 100 === 100)?30:45 - (completed/(completed+inProgress)* 100 > 9 && 7)}" y="70"> ${(Math.round(completed / (completed + inProgress) * 100))?(Math.round(completed / (completed + inProgress) * 100)):0}% </text>
    </svg>
    <div class="header__description">
       <p class='header__text'>${completed} - is completed</p>
       <p class='header__text'>${inProgress} - in progress</p>
    </div>
    <div class='header__buttons'>
    <button class="header__button" id="add-todo">Create</button>
    <button class="header__button" id="delete-all-todos">Delete all</button>
    <button class="header__button" id="delete-last-todo">Delete last</button>
  </div>
   </div>
</header>`
}

function modal(){
  return`
  <div class="fixed z-10 inset-0 overflow-y-auto pt-28 hidden" id="modal">
  <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0 mt-90">
    <div class="fixed inset-0 bg-gray-900 bg-opacity-70 transition-opacity"><span class="hidden sm:inline-block sm:align-middle sm:h-screen"> </span>
      <div class="inline-block align-bottom rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
        <div class="modal px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
          <div class="sm:flex sm:items-start">
            <div class="mt-3 text-center sm:mt-2 sm:ml-4 sm:text-left">
              <h3 class="text-xl leading-6 font-medium text-white">Create new item</h3>
              <div class="mt-2">
                <div class="mt-7">
                  <input class="modal__input" type="text" id="inputTitle" placeholder="Enter title">
                  <input class="modal__input" type="text" id="inputText" placeholder="Enter text">
                </div>
              </div>
            </div>
          </div>
          <div class="modal__buttons">
            <button class="header__button mr-7" id="okButton">Done</button>
            <button class="header__button mr-7" id="cancelButton">Cancel</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
  `
}

function todoList(){
  return `<div id='todoList' class="to-do-list"> </div>`;
}

function card(todo,i){
  return`
  <div class="card">
    <div class="card__content">
      <button class="card__delete-button" id="delete-button-${i}"><img class="card__delete-icon" src="../icons/white-trash-icon.png"></button>
      <h1 class="card__title">${todo.title}</h1>
      <h2 class="card__time">${todo.time}</h2>
      <p class="card__text">${todo.text}</p>
      <label class="label">
         <input type="checkbox" class="card__checkbox" ${todo.isDone?"checked":""} id="checkbox-${i}">
         <div class="checkbox__text"></div>
      </label>
    </div>
  </div>
  `
}

export {header, todoList, card, modal};