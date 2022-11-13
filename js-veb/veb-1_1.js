// Example 1 - Математические операторы
// Выведи на экран общее количество яблок и винограда. Разницу яблок и винограда.

// const apples = 47;
// const grapes = 135;
// const total = apples + grapes;
// console.log(total);
// const diff = apples - grapes;;
// console.log(diff);


// Example 2 - Комбинированные операторы
// Замени выражение переопределения комбинированным оператором +=.

// let students = 100;
// students = students + 50; // => 150 (добавляет 50)
// students += 50; // => 150 (добавляет 50)
// students =+ 50; // => 50 (отнимает 50)
// console.log(students);


// Example 3 - Приоритет операторов
// Разбери приоритет операторов в инструкции присвоения значения константы result.

// const result = 108 + 223 - 2 * 5; // => 321
// console.log(result);

// let num = 5;
// console.log(num ** 2); // => 25
// console.log(num ** 5); // => 3125
// console.log(num ** 0.5); // => 2.23606797749979


// Example 4 - Класс Math
// Напиши скрипт, который выводит в консоль округленные вверх/вниз и т.д. значения константы value. Используй методы Math.floor(), Math.ceil() и Math.round(). Проверь что будет в консоли при значениях 27.3 и 27.9.

// const value = 27.5;
// console.log(Math.floor(value)); // => 27
// console.log(Math.ceil(value)); // => 28
// console.log(Math.round(value)); // => 28


// Example 5 - Шаблонные строки
// Составь фразу с помощью шаблонных строк A has B bots in stock, где A, B - переменные вставленные в строку.

// const companyName = 'Cyberdyne Systems';
// const repairBots = 150;
// const defenceBots = 50;
// const message = `${companyName} has ${repairBots + defenceBots} bots in stock`;
// console.log(message); // "Cyberdyne Systems has 200 bots in stock"


// Example 6 - Методы строк и чейнинг
// Напиши скрипт который рассчитывает индекс массы тела человека. Для этого необходимо разделить вес в киллограммах на квадрат высоты человека в метрах.

// Вес и высота хранятся в переменных weight и height, но не как числа, а в виде строк (специально для задачи). Нецелые числа могут быть заданы в виде 24.7 или 24,7, то есть в качестве разделителя дробной части может быть запятая.

// Индекс массы тела необходимо округлить до одной цифры после запятой;

// let weight = '88,3';
// let height = '1.75';



// Вариант 1
// 1. Найти индекс ",";
// 2. Заменяем "," на ".";
// 3. Вычислить и вывести значение на экран
// weight = Number(weight.replace(",", "."));
// height = Number(height.replace(",", "."));
// const bmi = +(weight / Math.pow(height, 2)).toFixed(1);
// console.log(bmi); // => 28.8

// Вариант 2
// 1. Найти индекс ",";
// 2. Скопировать число, которое находится после запятой
// 3. Склеить целую часть с дробной частью и поставить правильно разделитель "."
// const commaIndex = weight.indexOf(",");
// const valueAfterComma = weight.slice(commaIndex + 1);
// const valueBeforComma = Number.parseInt(weight);
// weight = `${valueBeforComma}.${valueAfterComma}`;
// const bmi = +(weight / Math.pow(height, 2)).toFixed(1);
// console.log(bmi); // => 28.8


// Example 7 - Операторы сравнения и приведение типов
// Каким будет результат выражений?
// console.log(5 > 4); // => true

// console.log(10 >= '7'); // => true

// console.log('2' > '12'); // => true

// Метод "charCodeAt()" предназначен для определения кода символа в Юникоде. При сравнении строк - сравниваются значения юникода.
// console.log("a".charCodeAt()); // => '97', код в Юникоде

// console.log('2' < '12'); // => false

// console.log('4' == 4); // => true

// console.log('6' === 6); // => false

// console.log('false' === false); // => false

// console.log(1 == true); // => true

// console.log(1 === true); // => false

// console.log('0' == false); // => true

// console.log('0' === false); // => true

// console.log('Papaya' < 'papaya'); // => true

// console.log('Papaya' === 'papaya'); // => false

// console.log(undefined == null); // => true

// console.log(undefined === null); // => false


// Example 8 - Логические операторы
// Каким будет результат выражений?

// console.log(true && 3); // => 3

// console.log(false && 3); // => false

// console.log(true && 4 && 'kiwi'); // => kivi

// console.log(true && 0 && 'kiwi'); // => 0

// console.log(true || 3); // => true

// console.log(true || 3 || 4); // => true

// console.log(true || false || 7); // => true

// console.log(null || 2 || undefined); // => 2

// console.log((1 && null && 2) > 0); // => false

// console.log(null || (2 && 3) || 4); // => 3


// Example 9 - Значение по умолчанию и оператор нулевого слияния
// Отрефактори код так, чтобы в переменную value присваивалось значение переменной incomingValue, если оно не равно undefined или null. В противном случае должно присваиваться значение defaultValue. Проверь работу скрипта для слепдующих значений переменной incomingValue: null, undefined, 0, false. Используй оператор ?? (nullish coalescing operator).

// const incomingValue = 5;
// const defaultValue = 10;
// const value = incomingValue || defaultValue;
// console.log(value);

// Example 10 - Опертор % и методы строк
// Напиши скрипт который переведёт значение totalMinutes (количество минут) в строку в формате часов и минут HH:MM.

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