# Подсчет часов за выполненную работу

Для хранения истории выполненных задач я использую [Google Sheets](https://docs.google.com/spreadsheets/d/1EyifNjSs2JPduJzhLEWs7bvw9dqyFaV6v7e6gG0ZOkk/edit?usp=sharing)

В таблице реализованы скрипты на [Apps Script](https://developers.google.com/apps-script) для:

* Подсчета часов и общей суммы на всех видимых листах
* Создания листа с текущей датой
* Скрытия всех листов
* Скрытия листов, за исключением текущей даты

Разработка скриптов выполняется в VSCode на рабочем компьютере. Синхронизация с проектом выполняется с использованием утилиты [@google/clasp](https://www.npmjs.com/package/@google/clasp)

Подсказки в VSCode обеспечиваются пакетом [@types/google-apps-script](https://www.npmjs.com/package/@types/google-apps-script)

## Развертывание

Для корректной работы `clasp` требуется:

1. Выполнить вход в аккаунт используя `clasp login`
2. Включить [Apps Script API](https://developers.google.com/apps-script/api/concepts) в [вашем профиле](https://script.google.com/home/usersettings)

```bash
sudo npm i -g @google/clasp

mkdir project
cd project

clasp login
clasp clone <project_id>

git clone git@github.com:br4instormer/tasks-googlesheet.git .
npm i
```

## Эксплуатация

### Настройки

В файле [CONSTANTS.js](CONSTANTS.js) находяся настройки для скриптов:

* `HOURS_RANGE = "D2:D"` - Диапазон колонок в формате A1 Notation, в котором записано часы по задача
* `RATE = 2000` - Ставка за час
* `TIMEZONE = "Europe/Moscow"` - Временная зона
* `LAST_HEADING_ROW = 1` - Количество строк заголовка

### Применение изменений

```bash
clasp push
```

### Загрузка изменений из проекта

```bash
clasp pull
```

## Лицензия

[MIT](LICENSE)
