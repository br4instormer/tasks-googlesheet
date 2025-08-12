/**
* Создаёт кастомное меню
* @param {string} Заголовок меню
* @returns {Menu} Сущность созданного меню
*/
function createMenu(title) {
  return SpreadsheetApp.getUi().createMenu(title);
}

/**
* Создаёт пункты меню
* @param {Menu} Сущность меню в которое будут ставлятся пункты меню
* @param {Object[]} Объект с названием меню (title) и обработчиком (fn)
* @returns {Menu} Сущность обработанного меню
*/
function createMenuItems(menu, items) {
  for (const item of items) {
    const { title, fn } = item;

    menu.addItem(title, fn);
  }
  menu.addToUi();

  return menu;
}