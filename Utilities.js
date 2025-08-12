/**
 *
 * @param {Sheet} лист для очистки
 * @param {number} номер последней строки заголовка
 */
function clearSheet(sheet, headersRow) {
  const last = sheet.getLastRow();
  const insertFrom = headersRow + 1;
  const remove = last - headersRow;

  remove && sheet.deleteRows(insertFrom, remove);
}
