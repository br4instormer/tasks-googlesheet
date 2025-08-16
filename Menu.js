/**
 * Создаёт кастомное меню
 * @param {string} title Заголовок меню
 * @returns {GoogleAppsScript.Base.Menu} Сущность созданного меню
 */
function createMenu(title) {
  return SpreadsheetApp.getUi().createMenu(title);
}

/**
 * Создаёт пункты меню
 * @param {GoogleAppsScript.Base.Menu} menu Сущность меню в которое будут ставлятся пункты меню
 * @param {object[]} items Объект с названием меню (title) и обработчиком (fn)
 * @returns {GoogleAppsScript.Base.Menu} Сущность обработанного меню
 */
function createMenuItems(menu, items) {
  for (const item of items) {
    const { title, fn } = item;

    menu.addItem(title, fn);
  }
  menu.addToUi();

  return menu;
}
