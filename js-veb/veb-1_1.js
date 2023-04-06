//! Видео - 0:36:35...1:12:10 - Kahoot
//! Видео - 1:12:10...1:45:10 - Ответы на вопросы
//! Видео - 1:45:10...3:10:12 - Решение задач

// Задачи к занятию - (https://github.com/goitacademy/js-instructor-examples/blob/main/lesson-01/ru.md)

// Модуль 1. Занятие 1. Переменные, типы и операторы

// Example 1 - Математические операторы
// Выведи в консоль общее количество (total) яблок (apples) и винограда (grapes). Разницу (diff) яблок и винограда.
console.groupCollapsed('Example 1 - Математические операторы'); //! Название группы

const apples = 47;
const grapes = 135;
const total = apples + grapes;
console.log('"total" ->', total);
const diff = apples - grapes;;
console.log('"diff" ->', diff);

console.groupEnd(); //! Закрываем группу
console.log('-1----------------------------------------------');


// Example 2 - Комбинированные операторы
// Замени выражение переопределения комбинированным оператором +=.
console.groupCollapsed('Example 2 - Комбинированные операторы'); //! Название группы

let students = 100;
// students = students + 50; // => 150 (добавляет 50)
students += 50; // => 150 (добавляет 50)
console.log('"students" ->', students);

// Операция быстрого приведения (конвертации) текущего формата данныз к числу. Например, приведения текста (string) к числу (number).
const number = +"50";
//! Для выполнения операции приведения к числу перед конвертируемым литералом (в данном случае перед текстом) нужно поставить знак - "+".
console.log('"number" ->', number);
console.log('"typeof number" ->', typeof number);

console.groupEnd(); //! Закрываем группу
console.log('-2----------------------------------------------');


// Example 3 - Приоритет операторов
// Разбери приоритет операторов в инструкции присвоения значения константы "result".
console.groupCollapsed('Example 3 - Приоритет операторов'); //! Название группы

const result = 108 + 223 - 2 * 5; // => 321
console.log('"result" ->', result);

// Пример быстрого возведения в степен на основе использования служебного опереатора - "**".
let num = 4;
console.log('"num" =', num);
console.log('Возведение в степень - "num ** 2" ->', num ** 2);
console.log('Возведение в степень - "num ** 5" ->', num ** 5);
console.log('Берем корень через возведение в степень - "num ** 0.5" ->', num ** 0.5);

console.groupEnd(); //! Закрываем группу
console.log('-3----------------------------------------------');


// Example 4 - Класс Math
// Напиши скрипт, который выводит в консоль округленные вверх/вниз и т.д. значения константы value. Используй методы Math.floor(), Math.ceil() и Math.round(). Проверь что будет в консоли при значениях 27.3 и 27.9.
console.groupCollapsed('Example 4 - Класс Math'); //! Название группы

const value = 27.5;
console.log('"value" =', value);

// Округляем в меньшую сторону
console.log('"Math.floor(value)" ->', Math.floor(value));
// Округляем в большую сторону
console.log('"Math.ceil(value)" ->', Math.ceil(value));
// Округляем по правилам матиматики
console.log('"Math.round(value)" ->', Math.round(value));

console.groupEnd(); //! Закрываем группу
console.log('-4----------------------------------------------');

// Example 5 - Шаблонные строки
// Составь фразу с помощью шаблонных строк "A has B bots in stock", где A, B - переменные вставленные в строку.
console.groupCollapsed('Example 5 - Шаблонные строки'); //! Название группы

const companyName = 'Cyberdyne Systems';
const repairBots = 150;
const defenceBots = 50;
const message = `${companyName} has ${repairBots + defenceBots} bots in stock.`;
console.log(message); // "Cyberdyne Systems has 200 bots in stock."

console.groupEnd(); //! Закрываем группу
console.log('-5----------------------------------------------');


// Example 6 - Методы строк и чейнинг
// Напиши скрипт который рассчитывает индекс массы тела человека. Для этого необходимо разделить вес в киллограммах на квадрат высоты человека в метрах.
console.groupCollapsed('Example 6 - Методы строк и чейнинг'); //! Название группы

// Вес и высота хранятся в переменных weight и height, но не как числа, а в виде строк (специально для задачи). Нецелые числа могут быть заданы в виде 24.7 или 24,7, то есть в качестве разделителя дробной части может быть запятая.
// Индекс массы тела необходимо округлить до одной цифры после запятой.

let weight = '88,3';
let height = '1.75';

//! Вариант 1 - (bmi1)
// 1. Найти индекс ",";
// 2. Заменяем "," на ".";
// 3. Вычислить и вывести значение на экран
weight = Number(weight.replace(",", "."));
height = Number(height.replace(",", "."));
const bmi1 = +(weight / Math.pow(height, 2)).toFixed(1);
console.log('"bmi1" ->', bmi1); // => 28.8

//!=============================================================

let weight2 = '88,3';
let height2 = '1.75';

//! Вариант 2 - (bmi2)
// 1. Найти индекс ",";
// 2. Скопировать число, которое находится после запятой
// 3. Склеить целую часть с дробной частью и поставить правильно разделитель "."
const commaIndex = weight2.indexOf(",");
const valueAfterComma = weight2.slice(commaIndex + 1);
const valueBeforComma = Number.parseInt(weight2);
weight2 = `${valueBeforComma}.${valueAfterComma}`;
const bmi2 = +(weight / Math.pow(height, 2)).toFixed(1);
console.log('"bmi2" ->', bmi2); // => 28.8

console.groupEnd(); //! Закрываем группу
console.log('-6----------------------------------------------');


// Example 7 - Операторы сравнения и приведение типов
// Каким будет результат выражений?
console.groupCollapsed('Example 7 - Операторы сравнения и приведение типов'); //! Название группы

console.log(`5 > 4 =>`, 5 > 4); // => true
console.log(`10 >= '7' =>`, 10 >= '7'); // => true

console.log(`'2' > '12' =>`, '2' > '12'); // => true
//! Строки сравниваются между собой по значениям Юникод-шифров

console.log(`'2' < '12' =>`, '2' < '12'); // => false
//! Строки сравниваются между собой по значениям Юникод-шифров

console.log(`'4' == 4 =>`, '4' == 4); // => true
console.log(`'6' === 6 =>`, '6' === 6); // => false
console.log(`'false' === false =>`, 'false' === false); // => false
console.log(`1 == true =>`, 1 == true); // => true
console.log(`1 === true =>`, 1 === true); // => false
console.log(`'0' == false =>`, '0' == false); // => true
console.log(`'0' === false =>`, '0' === false); // => true

console.log(`'Papaya' < 'papaya' =>`, 'Papaya' < 'papaya'); // => true
//! Строки сравниваются между собой по значениям Юникод-шифров

console.log(`'Papaya' === 'papaya' =>`, 'Papaya' === 'papaya'); // => false
console.log(`undefined == null =>`, undefined == null); // => true
console.log(`undefined === null =>`, undefined === null); // => false

//! Метод "charCodeAt()" предназначен для определения кода символа в Юникоде. При сравнении строк - сравниваются значения их Юникод-шифров.
console.log('-----------------------------------------');
console.log('"a".charCodeAt() =>', "a".charCodeAt()); // => '97', код в Юникоде

console.groupEnd(); //! Закрываем группу
console.log('-7----------------------------------------------');

// Example 8 - Логические операторы
// Каким будет результат выражений?
console.groupCollapsed('Example 8 - Логические операторы'); //! Название группы

console.log('true && 3 =>', true && 3); // => 3
console.log('false && 3 =>', false && 3); // => false
console.log(`true && 4 && 'kiwi' =>`, true && 4 && 'kiwi'); // => kivi
console.log(`true && 0 && 'kiwi' =>`, true && 0 && 'kiwi'); // => 0
console.log('true || 3 =>', true || 3); // => true
console.log('true || 3 || 4 =>', true || 3 || 4); // => true
console.log('true || false || 7 =>', true || false || 7); // => true
console.log('null || 2 || undefined =>', null || 2 || undefined); // => 2
console.log('(1 && null && 2) > 0 =>', (1 && null && 2) > 0); // => false
console.log('null || (2 && 3) || 4 =>', null || (2 && 3) || 4); // => 3

console.groupEnd(); //! Закрываем группу
console.log('-8----------------------------------------------');


// Example 9 - Значение по умолчанию и оператор нулевого слияния
// Отрефактори код так, чтобы в переменную value присваивалось значение переменной incomingValue, если оно не равно undefined или null. В противном случае должно присваиваться значение defaultValue. Проверь работу скрипта для слепдующих значений переменной incomingValue: null, undefined, 0, false. Используй оператор ?? (nullish coalescing operator).
console.groupCollapsed('Example 9 - Значение по умолчанию и оператор нулевого слияния'); //! Название группы

// const incomingValue = 5;
// const defaultValue = 10;
// const value = incomingValue || defaultValue;
// console.log(value);

console.groupEnd(); //! Закрываем группу
console.log('-9----------------------------------------------');


// Example 10 - Опертор % и методы строк
// Напиши скрипт который переведёт значение totalMinutes (количество минут) в строку в формате часов и минут HH:MM.
console.groupCollapsed('Example 10 - Опертор % и методы строк'); //! Название группы

// 70 покажет 01:10
// 450 покажет 07:30
// 1441 покажет 24:01

const totalMinutes = 70;

const hours = Math.floor(totalMinutes / 60);
const minutes = totalMinutes % 60;
console.log(hours);
console.log(minutes);

const doubleDigitHours = String(hours).padStart(2, 0);
const doubleDigitMinutes = String(minutes).padStart(2, 0);
console.log(`${doubleDigitHours}:${doubleDigitMinutes}`);

console.groupEnd(); //! Закрываем группу
console.log('-10---------------------------------------------');