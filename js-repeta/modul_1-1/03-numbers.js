/*
* - Парсинг числа с Namber.parsInt() и Namber.parsFloat()
*/

// Namber.parsInt() - с лева на прово 'парсит' переменную и возвращает значение целого числа, если целые числа присутствуют в соответствующей переменной. Если целых чисел нет, или в начале значения переменной стоит не число, а символ - то выдает "NaN" (символ точки "." - не воспринимает, и считает его НЕ числом)

// Простой парсинг значения переменной
let elementWidth = '50px';
// const result = Number.parseInt(elementWidth);
// console.log(typeof result, result); // => number 50

// Парсинг значения переменной "elementWidth" с последующим переопределением значения этой переменной с текстового формата '50px' на число '50px'
// elementWidth = Number.parseInt(elementWidth);
// console.log('elementWidth:', elementWidth);

// Namber.parsFloat() - работает так же, как и Namber.parsInt(), но при этом - включает в поиск символ точки - ".", и все цыфры стоящие после нее.
let elementHeight = '200.74px';
// elementHeight = Number.parseFloat(elementHeight);
// console.log('elementHeight:', elementHeight);

/*
* - Метод для "отсекания" от числа - 'число.toFixed()'
*/

// Предназначен для "отсекания" (НЕ округления) "ненужного" остатка числа, после точки в десятичной дроби. Позволяет указать - сколько знаков после точки остается.

// Пример использования
let salary = 1300.16472;
// console.log('Перед отсечением "ненужного":', salary);
// salary = salary.toFixed(2);
// console.log('После отсечением "ненужного" (строка):', salary);
// Важной особенностью использования данного метода является то, что он возвращает - стороку, т.е. берет число, переводит его в строку и уже от строки - отсекает соответствующее количество символов "ненужного".

// Для перевода значения строки в число - используем метод 'Number()'
// salary = Number(salary);
// console.log('Преобразование в число:', salary);

// Пример записи выше написаных 2-х строк кода, в одну строку - по методу "Матрешки"
// console.log('Преобразование в число (матрешка):', Number(salary.toFixed(2)));

/*
* - Приведение (преобразование) к числу с "Namber(value)"
* - Значение NaN (Nat a Number) и метод Number.isNaN(valur)
*/
let quantiti = '30';
let value = 'Эту строку невозможно привести к числу';

// Примеры приобразования строчных численных символов и булемских значений в число, с помощью метода "Namber(value)"
// console.log(Number('5')); // => чисо 5
// console.log(Number(true)); // => чисо 1
// console.log(Number(false)); // => чисо 0
// console.log(Number('hgrdtjrxyrx')); // => NaN

// console.log(Number(quantiti)); // => число 30
// console.log(Number(value)); // => NaN

// В JS 'МОЖНО' выполнять операцию деления на "0", НО - при этом, результат такого деления будет всегда служебное значение - 'infinity' (бесконечность).
// console.log(Number(5 / 0)); // => infinity

// Метод "Number.isNaN(valur)" предназначен для определения значения "NaN". При его использовании возвращается булевское значение: 'true' - если проверяемое значение в переменной или введенное является "NaN"; 'false' - если проверяемое значение - НЕ "NaN".
let ImNaN = NaN;

// Примеры 'false'
// console.log(Number.isNaN(quantiti)); // => false
// console.log(Number.isNaN(value)); // => false
// console.log(Number.isNaN('xfgxfgnfgn')); // => false
// console.log(Number.isNaN(7)); // => false
// console.log(Number.isNaN(5 / 0)); // => false

// Примеры 'true'
// console.log(Number.isNaN(NaN)); // => true
// console.log(Number.isNaN(ImNaN)); // => true

/*
* Объект 'Math' - набор свойств, методов и функций для выполнения матиматических операций и специальных матиматических вычислений
* - Возведение в степень
* - Exponent operator
*/

// Команда, которая выводит в консоль - перечень всех возможных свойств, методов и функций, которые заложены в функционал объекта 'Math'
// console.log(Math);

// Пример вывода числи "Пи"
// console.log(Math.PI); // => 3.141592653589793

// Пример извлечения квадратного корня c помощью функции 'Math.sqrt()'.
const base1 = 144;

// Пример с прямым вводом одного числа (144), из которого нужно извлечь корень
// const result1 = Math.sqrt(144);
// console.log(result1); // => число 12

// Пример с вводом переменной с числом, из которого нужно извлечь корень
// console.log(Math.sqrt(base1)); // => число 12



// Пример возведения числа в степень c помощью функции 'Math.pow()'. Внутри которой первое число или переменна - базовое значение, а второе - значение степени Math.pow('базовое значение', 'значение степени')
const base2 = 2;
const power2 = 5;

// Пример с прямым вводом чисел
// const result1 = Math.pow(2, 3);
// console.log(result1); // => число 8

// Пример с использованием переменных
// const result2 = Math.pow(base2, power2);
// console.log(result2); // => число 32

// Пример возведения числа в экспаненту с помощь служебного символьного значения "**" (двух звездочек)
// console.log(2 ** 5); // => число 32

/*
* Напиши скрипт который попросит пользователя ввести число и степень,
* возводит число в эту степень и выводит результат в консоль
*/

// Состовляем общее описание алгоритма скрипта:
// 1. Нужно попросить пользователя ввести число, а введенное им число сохранить в переменную;
// 2. Нужно попросить пользователя ввести степень, в которую необходимо возвести ранее введенное им число, и сохранить значение этой степени в переменную;
// 3. Осуществить операцию возведения в нужную степень соответствующего числа и вывести результат в консоль

// Код скрипта
// 1-й шаг
// let base = prompt('Введите число'); // Просим у пользователя ввести число
// base = Number(base); // Преобразовываем введенное пользователем значение из строки в число
// console.log('Число:', base); // Проверяем преобразования полученного значения в число

// 2-й шаг
// let power = prompt('Введите степень'); // Просим у пользователя ввести степень
// power = Number(power); // Преобразовываем введенное пользователем значение из строки в число
// console.log('Степень:', power); // Проверяем преобразования полученного значения в число

// 3-й шаг
// const result3 = base ** power; // Проводим операцию возведения в степень
// console.log('Результат:', result3); // Выводим результат вычисления в консоль

/*
* Генерим псевдо-случайные числа
* - Math.random()
* - Math.round()
*/

// Метод 'Math.random()' - генерирует произвольное число в диапазоне от "0" до "1"
// console.log(Math.random());

// Для того, чтобы задать 'Math.random()' диапазон чисел, в рамках которого необходимо выполнять генерацию случайного числа, необходимо использовать формулу:
// 'Math.random() * (max - min) + min',
// 'Math.random() * ([максимальное значение заданного диапазона] - [минимальное значение заданного диапазона]) + [минимальное значение заданного диапазона]'

// Пример задачи диапозона генерации случайных чисел от 30 до 50, с прямым вводом значений
// console.log(Math.random() * (50 - 30) + 30);

// Пример задачи диапозона генерации случайных чисел от 10 до 80, с использованием переменных
const min = 10;
const max = 80;
// console.log(Math.random() * (max - min) + min);

// 'Math.round()' - предназначен для округления
// console.log(Math.round(0.3)); // => 0
// console.log(Math.round(0.5)); // => 1
// console.log(Math.round(1.4)); // => 1
// console.log(Math.round(1.7)); // => 2

// Совместное использование 'Math.random()' и 'Math.round()'
// const result = Math.round(Math.random() * (max - min) + min);
// console.log(result); // => целое число в заданом диапазоне


// Пример скрипта с использованием вышеописанных методов:

const colors = ['tomato', 'teal', 'orange', 'deeppink', 'skyblue']; // Объявляем переменную 'colors' - масив, с перечнем служебных слов значений цвета

// const max1 = colors.length - 1; // Задаем максимальное значение
// const min1 = 0; // Задаем минимальное значение

// const index = Math.round(Math.random() * (max1 - min1) + min1); // Генерируем случайное число из заданого диапазона

// const color = colors[index]; // Записываем в новую переменную цвет из указанного масива - набора цветов

// console.log(color); // Выводим в консоль полученный цвет

// Пишим инструкцию для присвоения "body" сайта - инлайнового стиля 'background-color', в котором цвет, должен соответствовать полученному и выведенному в консоле цвету
// document.body.style.backgroundColor = color;
