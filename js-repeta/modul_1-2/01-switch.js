//! Видео - 00:00:40...00:23:05

/*
* "Скрипт-1"
* Напиши скрипт выбора стоимости отеля по кол-ву звезд.
* 1 - 20$, 2 - 30$, 3 - 50$, 4 - 70$, 5 - 120$.
*
* Если в переменной "stars" что-то кроме чисел 1-5, необходимо вывести строку "Такого количества звезд нет"
*
*/
console.groupCollapsed('Скрипт-1'); //! Название группы

const stars = 1;
let price = 'неизвестна ? ';
console.log('Заданное количество звезд: ', stars);

// Реализация скрипта с использованием синтаксиса оператора "else...if"
console.group('Реализация с использованием - "else...if"'); //! Название группы

if (stars === 1) {
    price = 20;
} else if (stars === 2) {
    price = 30;
} else if (stars === 3) {
    price = 50;
} else if (stars === 4) {
    price = 70;
} else if (stars === 5) {
    price = 120;
} else {
    console.log('Такого кол-ва звезд нет');
}

console.log(`Стоимость: ${price}$`);
console.groupEnd(); //! Закрываем группу


// Реализация скрипта с использованием синтаксиса оператора "switch"
console.group('Реализация с использованием - "switch"'); //! Название группы

switch (stars) {
    case 1: price = 20;
        break;
    case 2: price = 30;
        break;
    case 3: price = 50;
        break;
    case 4: price = 70;
        break;
    case 5: price = 120;
        break;
    default: console.log('Такого кол-ва звезд нет');
}

console.log(`Стоимость: ${price}$`);
console.groupEnd(); //! Закрываем группу

console.groupEnd(); //! Закрываем группу
console.log('-1----------------------------------------------');

/*
* "Скрипт-2"
* Напиши скрипт выбора стоимости отеля по кол-ву звезд.
* 1,2 - 20$; 3,4 - 30$; 5 - 120$
*/
console.groupCollapsed('Скрипт-2'); //! Название группы

const stars2 = 4;
let price2 = 'неизвестна ? ';
console.log('Заданное количество звезд: ', stars2);

// Реализация скрипта с использованием синтаксиса оператора "else...if"
console.group('Реализация с использованием - "else...if"'); //! Название группы

if (stars2 === 1 || stars2 === 2) {
    price2 = 20;
} else if (stars2 === 3 || stars2 === 4) {
    price2 = 30;
} else if (stars2 === 5) {
    price2 = 120;
} else {
    console.log('Такого кол-ва звезд нет');
}

console.log(`Стоимость: ${price2}$`);
console.groupEnd(); //! Закрываем группу

// Реализация скрипта с использованием синтаксиса оператора "switch"
console.group('Реализация с использованием - "switch"'); //! Название группы

switch (stars2) {
    case 1:
    case 2:
        price2 = 20;
        break;
    case 3:
    case 4:
        price2 = 30;
        break;
    case 5:
        price2 = 120;
        break;
    default: console.log('Такого кол-ва звезд нет');
}

console.log(`Стоимость: ${price2}$`);
console.groupEnd(); //! Закрываем группу

console.groupEnd(); //! Закрываем группу
console.log('-2----------------------------------------------');


/*
* "Скрипт-3"
* Напиши скрипт выбора опции доставки товара.
* Опция хранится в переменной "option": 1 - самовывоз; 2 - курьер; 3 - почта.
*
* В переменную "message" необходимо записать сообщение в зависимости от опции:
* - "Вы сможете забрать товар завтра с 12:00 в нашем офисе";
* - "Курьер доставит заказ завтра с 9:00 до 18:00";
* - "Посылка будет отправлена сегодня";
* - "Вам перезвонит менеджер".
*/
console.groupCollapsed('Скрипт-3'); //! Название группы

// 1. Создать переменные "option" и "message";
const option = 2;
let message = '';

// 2. Создать алгоритм выбора сообщения по условию 1 или 2 или 3
switch (option) {
    case 1:
        message = "Вы сможете забрать товар завтра с 12:00 в нашем офисе";
        break;
    case 2:
        message = "Курьер доставит заказ завтра с 9:00 до 18:00";
        break;
    case 3:
        message = "Посылка будет отправлена сегодня";
        break;
    default:
        message = "Вам перезвонит менеджер";
}

// 3. Создать вывод сообщения
console.log(message);

console.groupEnd(); //! Закрываем группу
console.log('-3----------------------------------------------');
