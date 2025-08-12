/**
 * Создаёт меню при открытии таблицы
 */
function onOpen() {
  createMenuItems(createMenu("Скрипты"), [
    {
      title: "Подсчитать часы",
      fn: "computeTotalWithRate",
    },
    {
      title: "Создать лист на сегодня",
      fn: "createToday",
    },
    {
      title: "Скрыть все, кроме сегодняшней",
      fn: "hideExceptToday",
    },
    {
      title: "Скрыть все",
      fn: "hideAll",
    },
  ]);
}
