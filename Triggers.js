function computeTotalWithRate() {
  computeTotal(HOURS_RANGE, RATE);
}

function hideAll() {
  hideSheets([]);
}

function hideExceptToday() {
  hideSheets([Utilities.formatDate(new Date(), TIMEZONE, "dd.MM.YYYY")]);
}

function createToday() {
  create([Utilities.formatDate(new Date(), TIMEZONE, "dd.MM.YYYY")]);
}
