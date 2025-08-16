/**
 * Подсчитывает количество часов в колонке range
 * и выводит в всплывающем сообщении вместе с суммой по ставке rate
 * @param {string} range Range с колонкой часов
 * @param {number} rate ставка за час в рублях
 */
function computeTotal(range, rate) {
  const ss = SpreadsheetApp.getActive();
  const total = ss
    .getSheets()
    .filter((sheet) => !sheet.isSheetHidden())
    .reduce(
      (result, sheet) => (
        (result += sheet
          .getRange(range)
          .getValues()
          .flat()
          .filter(Boolean)
          .reduce(
            (result, value) => (Number.isNaN(Number(value)) ? result : result + Number(value)),
            0,
          )),
        result
      ),
      0,
    );

  ss.toast(`
    Общее количество часов: ${total}
    Сумма: ${total * rate}
  `);
}

/**
 * Скрывает все листы в таблице исключая except
 * @param {string[]} except массив имён листов, которые не нужно скрывать
 */
function hideSheets(except) {
  const exceptNames = except ?? [];

  SpreadsheetApp.getActive()
    .getSheets()
    .filter((sheet) => !sheet.isSheetHidden())
    .filter((sheet) => !exceptNames.includes(sheet.getName()))
    .forEach((sheet) => sheet.hideSheet());
}

/**
 * Создает новый лист, либо переключается на существующий
 * @param {string} name имя нового листа
 */
function create(name) {
  const ss = SpreadsheetApp.getActive();
  const sheets = ss.getSheets();
  const existed = ss.getSheetByName(name);
  const prev = sheets[sheets.length - 1];

  if (existed) {
    existed.activate();

    return;
  }

  prev.activate();

  const created = ss.duplicateActiveSheet();

  created.setName(name);
  clearSheet(created, LAST_HEADING_ROW);
  created.activate();
}
