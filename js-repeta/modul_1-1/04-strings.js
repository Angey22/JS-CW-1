//! Видео - 1:23:30...

/*
* Длина строки. Свойство - 'length'
*/
console.groupCollapsed('Свойство - "length"'); //! Название группы

// 'length' - предназначено для определения количества символов и вывода количественного числа.
const message = 'В этой строке 26 символов.';
console.log('"message.length" ->', message.length); // => число 26

console.groupEnd(); //! Закрываем группу
console.log('-1----------------------------------------------');


/*
* Конкатенация строк - это "сшивка" двух или более строчных элементов
*/
console.groupCollapsed('Конкатенация строк'); //! Название группы

// Пример 'конкатенации строк' с прямым вводом строк для сшивки.
// Особенностью этого метода является то, что пробел - тоже символ, и если в "сшиваемых" строках нет символа пробела, то они "слипнутся" в один непрерывный набор символов
console.log('"Сшивка" без пробелов ->', 'qwe' + 'ads' + 'zxc');

// Добавим символы пробелов в первый и последний элементы "сшивки"
console.log('"Сшивка" c пробелами ->', 'qwe ' + 'ads' + ' zxc');

// Конкатенация строк - с использованием переменных
const firstName = 'Chelsy'; // Переменная с первой строкой
const lastName = 'Emerald'; // Переменная со второй строкой
const fullName = firstName + ' ' + lastName // Создаем переменную с "шивкой" двух строк, и отдельной третей строкой (с пробелом внутри), необходимой для визуального отделения "сшитых" строк

console.log(fullName); // => Chelsy Emerald

console.groupEnd(); //! Закрываем группу
console.log('-2----------------------------------------------');


/*
* Напиши скрипт который выведет строку в формате
* "Гость 'x' 'y' поселяется в 'z' номер 'q'"
* подставив вместо 'x', 'y', 'z' и 'q' - значения переменных
*/
console.groupCollapsed('Скрипт на основе конкатенации строк'); //! Название группы

const room = 716;
const type = 'VIP';

const welcomeMsg = 'Гость ' + firstName + ' ' + lastName + ' поселяется в ' + type + ' номер ' + room;
console.log(welcomeMsg);

console.groupEnd(); //! Закрываем группу
console.log('-3----------------------------------------------');


/*
* Шаблонные строки (template strings)
* Возвращаемся к примеру составления строки поселения гостя в отель, 
* но с использованием "шаблонной строки"
*/
console.groupCollapsed('Шаблонные строки (template strings)'); //! Название группы

// Шаблонные строки - предназначены для облегчения процедуры сшивки строк. Для их использования сшиваемую строку необходимо выдельть знакама косой кавычки "`". При этом, внутри подобных косых ковычек можно вставлять элементы используя шаблон - "${вставляемый элемент}". В указаный шаблон можно вставлять как строку так и значения или функцию.

// Пример-1 "сшивки" шаблонных строк
const quantity = 5;
const orderMsg = `Вы заказываете ${quantity} холодильников`
console.log('Пример-1 ->', orderMsg);

// Пример-2 "сшивки" шаблонных строк
const orderMsg2 = `Вы второй раз заказываете ${3 + 3} холодильников`
console.log('Пример-2 ->', orderMsg2);

// Пример-3 составления строки поселения гостя в отель, с использованием "шаблонной строки"
const welcomeMsg2 = `Гость ${firstName} ${lastName} поселяется в ${type} номер ${room}`;
console.log('Пример-3 ->', welcomeMsg2);

console.groupEnd(); //! Закрываем группу
console.log('-4----------------------------------------------');


/*
* Нормализация с помощью метода "toLowerCase()"
*/
console.groupCollapsed('Нормализация - "toLowerCase()"'); //! Название группы

// toLowerCase() - метод предназначенная для "нормализации" текста в строке, т.е. для приведения текста (символов) находящегося в строке к одному единому формату - одинаковому нижнему регистру (делает все буквы маленькими).   

let brand = 'SaMsUnG'; 
const normalizedBrand = brand.toLocaleLowerCase(); 
console.log('Бренд ->', brand);
console.log('"Нормализованный" бренд ->', normalizedBrand);

// Метод 'toLowerCase()' может быть необходимым в ряде случаев, когда наприме нужно сравнить или сопоставить введенную пользователем строку со строкой, которая находится в базе данных. Если мы знаем, что в базе данных соответствующий тип информации (соответствующие строки с которыми нужно сравнивать) приведены в нижнем регистре. Например, в базе данных некий условный бренд записан - "samsung", а пользователь ввел "SaMsUnG". Нужно провести нормализацию введенного пользователем названия бренда, и сопаставить его с имеющимся в базе.

//! Пример
// const inDb = 'samsung'; // Текст бренда находящийся в условной базе
// const brand2 = prompt('Введите бренд "Samsung"'); // Запрашиваем у пользователя ввод бренда
// console.log('Текст введенный пользователем:', `"${brand2}"`); // Выводим в консоль введенный пользователем текст
// const normalizedBrand2 = brand.toLocaleLowerCase(); // Проводим нормализацию введенного пользователем текста
// console.log(`"Нормализованный" текст введенного пользователем бренда - "${normalizedBrand2}", сравниваем с текстом бренда в базе - "${inDb}"`);

console.groupEnd(); //! Закрываем группу
console.log('-5----------------------------------------------');


/*
* Способ выбора отдельного символа из строки, который основан 
* на использовании регистрового номера символа в строке
*/
console.groupCollapsed('Выбора символа из строки'); //! Название группы

// Для использования этого способа нужно рядом с переменной в которой есть строка (напримар, "brand3") поставить квадратные скобки, и в них указать регистровый номер символа строки, который Вам нужен (например, нужен первый символ строки, которая находится в нашей переменной - brand3[0]).

// Пример
let brand3 = 'SaMsUnG'; // У нас есть некая строка из 7-и символов
console.log('Исходная строка "brand3" ->', brand3);
console.log('"brand3[0]" ->', brand3[0]); // Выводим 1-й символ строки, который имеет регистровый номер "0" => S
console.log('"brand3[3]" ->', brand3[3]); // Выводим 4-й символ строки, который имеет регистровый номер "3" => s
console.log('"brand3[6]" ->', brand3[6]); // Выводим 7-й символ строки, который имеет регистровый номер "3" => G

console.groupEnd(); //! Закрываем группу
console.log('-6----------------------------------------------');


/*
* Метод slice()
*/
console.groupCollapsed('Метод "slice()"'); //! Название группы

// Предназначен для копирования строки (например, находящейся в некой переменной) - с определенного места, и до ее конца,
// т.е. в данном методе можно указать значение регистра строки, начиная с которого необходимо скопировать строку, и он ее скопирует - начиная с указанного символа и до конца

//! Пример
let brand4 = 'SaMsUnG'; // У нас есть некая строка из 7-и символов
console.log('Исходная строка "brand4" ->', brand4);
console.log('"brand4.slice(1)" ->', brand4.slice(1)); // Копируем строку начиная со 2-го символа и выводим ее в консоль => aMsUnG
console.log('"brand4.slice(3)" ->', brand4.slice(3)); // Выводим 4-й символ строки, который имеет регистровый номер "3" => sUnG
console.log('"brand4.slice(6)" ->', brand4.slice(6)); // Выводим 7-й символ строки, который имеет регистровый номер "3" => G

console.groupEnd(); //! Закрываем группу
console.log('-7----------------------------------------------');


/*
* Комбинирование методов "slice()", "toLowerCase()" и 
* конкатенации строк для вывода "нормализованной" строки с 
* заглавной буквой в верхнем регистре.  
*/
console.groupCollapsed('Комбинируем "slice()", "toLowerCase()" и конкатенацию строк'); //! Название группы

//! Пример
console.log('Исходная строка "brand4" ->', brand4);

const brandCombin = brand4[0] + brand4.slice(1).toLowerCase();

console.log('"brandCombin" ->', brandCombin);

console.groupEnd(); //! Закрываем группу
console.log('-8----------------------------------------------');


/*
* Поиск в строке с помощью метода "includes()"
*/
console.groupCollapsed('Метод "includes()"'); //! Название группы

// Метод "includes()" предназначен для выполнения операции поиска в строк определенного фрагмента текста или ключевого слова. В результате своей работы он возвращает булевое значение: "true", если было найдено совподение и "false" - если совпадений нет.

//! Пример
const blacklistedWord1 = 'спам'; // 1-е ключевое слово для поиска
const blacklistedWord2 = 'распродажа'; // 2-е ключевое слово для поиска

const string1 = 'Привет, я принц Абдул, это не спам, предлагаю тебе миллион $' // Переменная с 1-й строкой для проверки

console.log(`1-я строка для проверки: "${string1}"`); // Выводим в консоль 1-ю проверяемую строку
console.log('Проверка на совпадение с ключевым словом "спам" ->', string1.includes(blacklistedWord1)); // Проверяем 1-ю стоку по 1-у ключевому слову
console.log('Проверка на совпадение с ключевым словом "распродажа" ->', string1.includes(blacklistedWord2)); // Проверяем 1-ю стоку по 2-у ключевому слову

const string2 = 'Самая большая РАСПРОДАЖА этой недели, не пропустите!' // Переменная со 2-й строкой для проверки
console.log(`2-я строка для проверки: "${string2}"`); // Выводим в консоль 2-ю проверяемую строку
console.log('Проверка на совпадение с ключевым словом "спам" ->', string2.includes(blacklistedWord1)); // Проверяем 2-ю стоку по 1-у ключевому слову
console.log('Проверка на совпадение с ключевым словом "распродажа" ->', string2.includes(blacklistedWord2)); // Проверяем 2-ю стоку по 2-у ключевому слову

// По ключевому слову 'распродажа', поиск-проверка второй строки выдал "false", т.е. поиск - не нашел совпадения с ключевым словом, хотя подобное слово во второй строке присутствует - "РАСПРОДАЖА", правда все буквы-символы в нем находятся в верхнем регистре. Для того, чтобы более корректно провести операцию поиска по данном ключевому слову - необходимо провести операцию нормализации текста проверяемой строки с помощью метода "toLowerCase()":

let strigNormalaze = string2.toLowerCase(); // Проводим нормализацию 2-й строки
console.log(`Нормализованый текст 2-й строки: "${strigNormalaze}"`); // Выводим в консоль нормализованный текст второй строки
console.log('ПОВТОРНАЯ проверка на совпадение с ключевым словом "распродажа" ->', strigNormalaze.includes(blacklistedWord2)); // Повторно проверяем 2-ю стоку по 2-у ключевому слову

const string3 = 'Рекламная компания #fatlivesmatter' // Переменная с 3-й строкой для проверки
console.log(`3-я строка для проверки: "${string3}"`); // Выводим в консоль 2-ю проверяемую строку
console.log('Проверка на совпадение с ключевым словом "спам" ->', string3.includes(blacklistedWord1)); // Проверяем 3-ю стоку по 1-у ключевому слову
console.log('Проверка на совпадение с ключевым словом "распродажа" ->', string3.includes(blacklistedWord2)); // Проверяем 3-ю стоку по 2-у ключевому слову

console.groupEnd(); //! Закрываем группу
console.log('-9----------------------------------------------');