/**
 * Подсчитывает и выводит количество часов и сумму по ставке
 */
function computeTotalWithRate() {
  computeTotal(HOURS_RANGE, RATE);
}

/**
 * Скрывает все листы, кроме последнего
 */
function hideAll() {
  hideSheets([]);
}

/**
 * Скрывает все листы, кроме листа за текущую дату
 */
function hideExceptToday() {
  hideSheets([Utilities.formatDate(new Date(), TIMEZONE, "dd.MM.YYYY")]);
}

/**
 * Создает новый лист за текущую дату, либо переключается на существующую
 */
function createToday() {
  create([Utilities.formatDate(new Date(), TIMEZONE, "dd.MM.YYYY")]);
}
