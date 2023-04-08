//! Видео - 0:06:50...0:24:50 - Kahoot
//! Видео - 0:25:00...0:33:50 & 2:10:40...2:12:19  - Ответы на вопросы
//! Видео - 0:45:10...2:10:35 - Решение задач

// Задачи к занятию - (https://github.com/goitacademy/js-instructor-examples/blob/main/lesson-02/ru.md)

// Модуль 1. Занятие 2. Ветвления. Циклы

// Example 1 - Ввод пользователя и ветвления
// Используя конструкцию if..else и prompt, напиши код, который будет спрашивать: "Какое официальное название JavaScript?". Если пользователь вводит ECMAScript, то показывай alert со строкой "Верно!", в противном случае - "Не знаете? ECMAScript!".
console.groupCollapsed('Example 1 - Ввод пользователя и ветвления'); //! Log group name

// const question = prompt('Какое официальное название JavaScript?');
// const answer = 'ECMAScript';
// if (question.toLowerCase() === answer.toLowerCase()) {
//     alert('Правильно!')
// } else {
//     alert('Не знаете? ECMAScript!')
// };

console.groupEnd(); //! Log group end
console.log('-1----------------------------------------------');


// Example 2 - Отображение времени (if...else)
// Напиши скрипт для отображения часов и минут в консоли браузера в виде строки формата "14 ч. 26 мин.". Если значение переменной minutes равно 0, то выводи строку "14 ч.", без минут.
console.groupCollapsed('Example 2 - Отображение времени (if...else)'); //! Log group name

const hours = 14;
const minutes = 26;
let message = '';

if (minutes === 0) {
    message = `${hours} ч.`;
} else {
  message = `${hours} ч. ${minutes} мин.`;
}

console.log(message);

console.groupEnd(); //! Log group end
console.log('-2----------------------------------------------');


// Example 3 - Ветвеления
// Напиши скрипт, который выводит в консоль строку "Это положительное число", если в prompt пользователь ввел число больше нуля. Если был введен ноль, выводи в консоль строку "Это ноль". Если передали отрицательное число, в консоли должна быть строка "Это отрицательное число".
console.groupCollapsed('Example 3 - Ветвеления'); //! Log group name

// const userInput = +prompt('Введите число'); // "+prompt('Введите число')" то же самое, что и "Number(prompt('Введите число'))" - оба эти выражения переводят значение в число.
// console.log('"userInput" =>', userInput);

// if (userInput > 0) {
//     console.log('Это позитивное число');
// } else if (userInput === 0) {
//     console.log('Это ноль!')
// } else if (userInput < 0) {
//     console.log('Это негативное число');
// } else if (userInput === NaN) {
//     console.log('Это НЕ число!');
// };

console.groupEnd(); //! Log group end
console.log('-3----------------------------------------------');


// Example 4 - Вложенные ветвления
// Напиши скрипт, который сравнивает числа в переменных a и b. Если оба значения больше 100, то выведи в консоль максимальное из них. В противном случае в консоли должна быть сумма значения b и числа 512.
console.groupCollapsed('Example 4 - Вложенные ветвления'); //! Log group name

const a = 120;
const b = 180;

if (a > 100 && b > 100) {
    // if (a > b) console.log(a);
    // else console.log(b);

    console.log(Math.max(a, b))
} else {
    console.log(b + 512);
}

console.groupEnd(); //! Log group end
console.log('-4----------------------------------------------');


// Example 5 - Форматирование ссылки (endsWith)
// Напиши скрипт который проверяет заканчивается ли значение переменной link символом "/". Если нет, добавь в конец значения link этот символ. Используй конструкцию if...else.
console.groupCollapsed('Example 5 - Форматирование ссылки (endsWith)'); //! Log group name

let link = 'https://my-site.com/about';
console.log('Исходная ссылка: ', link);

// Проверяем является ли символ "/" последним в строке
const exam = link.length - 1;
if (link[exam] === "/") {
    console.log('Все ок, вот ссылка: ', link);
} else {
    // Исправляем, если нужно
    link += '/';
     console.log('Ссылка исправлена на: ', link);
}

// Пишим итог, в конце скрипта
console.log('Итог: ', link);

console.groupEnd(); //! Log group end
console.log('-5----------------------------------------------');


// Example 6 - Форматирование ссылки (includes и логическое «И»)
// Напиши скрипт который проверяет заканчивается ли значение переменной link символом "/"". Если нет, добавь в конец значения link этот символ, но только в том случае, если в link есть подстрока "my-site". Используй конструкцию if...else.
console.groupCollapsed('Example 6 - Форматирование ссылки (includes и логическое «И»)'); //! Log group name

let link2 = 'https://my-site.com/about'; // 1-й вариант ссылки
// let link2 = 'https://stranger-site.com/about'; // 2-й вариант ссылки

console.log('Исходная ссылка: ', link2); // Вывод исходной ссылки в консоль

// Проверяем является ли символ "/" последним в строке
const exam1 = link2.length - 1;


if (link2[exam1] === "/") {
    console.log('Все ок, вот ссылка: ', link2);
} else {
    // Исправляем, по условию
    if (link2.includes('my-site')) {
    link2 += '/';
        console.log('Ссылка исправлена на: ', link2);
    }
};

// Пишим итог, в конце скрипта
console.log('Итог: ', link);

console.groupEnd(); //! Log group end
console.log('-6----------------------------------------------');


// Example 7 - Форматирование ссылки (тернарный оператор)
// Выполни рефакторинг ниже описанного кода оператора "if", используя тернарный оператор.
console.groupCollapsed('Example 7 - Форматирование ссылки (тернарный оператор)'); //! Log group name

let link3 = 'https://my-site.com/about'; // 1-й вариант ссылки
// let link3 = 'https://stranger-site.com/about'; // 2-й вариант ссылки

// Исходный код подлежащий рефакторингу
// if (link3.includes('my-site') && !link3.endsWith('/')) {
//   link3 += '/';
// }

// Рефакторинг
link3.includes('my-site') && !link3.endsWith('/') ? link3 += '/' : link3 = link3;

// Пишим итог, в конце скрипта
console.log('Итог: ', link3);

console.groupEnd(); //! Log group end
console.log('-7----------------------------------------------');


// Example 8 - if...else и логические операторы
// Напиши скрипт который будет выводить в консоль браузера строку в зависимости от значения переменной hours.
console.groupCollapsed('Example 8 - if...else и логические операторы'); //! Log group name

// Если значение переменной hours:
// - меньше 17, выводи строку "Pending";
// - больше либо равно 17 и меньше либо равно 24, выводи строку "Expires";
// - больше 24 , выводи строку "Overdue".

const hours2 = 10;
console.log(`Исходное значение переменной "hours" = ${hours}`);
let message2 = '';


if (hours2 < 17) {
    message2 = "Pending";
} else if (hours2 >= 17 && hours2 <= 24) {
    message2 = "Expires";
} else {
    message2 = "Overdue";
}

console.log(message2);

console.groupEnd(); //! Log group end
console.log('-8----------------------------------------------');


// Example 9 - Дедлайн сдачи проекта (if...else)
// Напиши скрипт для отображения времени дедлайна сдачи проекта. Используй конструкцию if...else.
console.groupCollapsed('Example 9 - Дедлайн сдачи проекта (if...else)'); //! Log group name

// Условия и сообщения по условиям:
// - если до дедлайна 0 дней - выведи строку "Сегодня!";
// - если до дедлайна 1 день - выведи строку "Завтра/";
// - если до дедлайна 2 дня - выведи строку "Послезавтра)";
// - если до дедлайна 3 + дней - выведи строку "Дата в будущем ;)".

const daysUntilDeadline = 5;
console.log('Введенное количество дней до "дедлайна": ', daysUntilDeadline);


if (daysUntilDeadline === 0) {
    console.log("Сегодня!");
} else if (daysUntilDeadline === 1) {
    console.log("Завтра/");
} else if (daysUntilDeadline === 2) {
    console.log("Послезавтра)");
} else {
    console.log("Дата в будущем ;)");
};

console.groupEnd(); //! Log group end
console.log('-9----------------------------------------------');


// Example 10 - Дедлайн сдачи проекта (switch)
// Выполни рефакторинг кода предыдущей задачи (9), используя "switch".
console.groupCollapsed('Example 10 - Дедлайн сдачи проекта (switch)'); //! Log group name

const daysUntilDeadline2 = 0;
console.log('Введенное количество дней до "дедлайна": ', daysUntilDeadline2);

switch (daysUntilDeadline2) {
    case 0: console.log("Сегодня!");
        break;
    case 1: console.log("Завтра/");
        break;
    case 2: console.log("Послезавтра)");
        break;
    default: console.log("Дата в будущем ;)");
};

console.groupEnd(); //! Log group end
console.log('-10---------------------------------------------');


// Example 11 - Цикл for
// Напиши цикл for который выводит в консоль браузера числа по возрастанию от min до max, но только если число кратное 5.
console.groupCollapsed('Example 11 - Цикл for'); //! Log group name

const max = 100;
const min = 20;

// 1-й вариант (выражение "i=i+1" можно записать несколькими способами: "i+=1" и "i++")
// for (let i = min; i <= max; i += 1) {
//     if (i % 5 === 0) {
//         console.log("i = ", i);
//     }
// };

// 2-й вариант
for (let i = min; i <= max; i += 5) {
    if (i % 5 === 0) {
        console.log("i = ", i);
    }
};

console.groupEnd(); //! Log group end
console.log('-11---------------------------------------------');


// Example 12 - Ввод пользователя и ветвления
// Напиши скрипт, который будет спрашивать логин с помощью prompt и логировать результат в консоль браузера.
console.groupCollapsed('Example 12 - Ввод пользователя и ветвления'); //! Log group name

// 1-е условие:
// - если посетитель вводит "Админ", то prompt запрашивает пароль;
// - если ничего не введено или нажата клавиша "Esc" - вывести строку "Отменено";
// - если вводится любой другой логин - вывести строку "Я Вас не знаю".

// 2-е условие, проверка пароля должна осуществлятся так:
// - если введён пароль "Я админ", то вывести строку - "Здравствуйте!";
// - если вводится любой другой текст, то необходимо вывести - "Неверный пароль".

// 1-е условие
// const userLogin = prompt('Введите логин:');
// console.log('Введен логин: ', userLogin);

// if (userLogin === 'Админ') {
//     const password = prompt('Введите пароль:');
//         // 2-е правило
//         if (password === 'Я админ') {
//             console.log('Здравствуйте!');
//         } else {
//             console.log('Неверный пароль');
//         }
// } else if (!userLogin) {
//     // !null -> !false -> true || !"" -> false -> true
//     // else if (userLogin === "" || userLogin === null)
//     console.log('Отменено');
// } else {
//     console.log('Я Вас не знаю');
// }

console.groupEnd(); //! Log group end
console.log('-12---------------------------------------------');