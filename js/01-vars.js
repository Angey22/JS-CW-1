/*
* - Переменные и типы примитивов
* - const и let
* - Логирование с методом console.log()
* - Уникальность идентификатора
*/

// Неизменяемые переменные объявляются через "const"
const age = 10;
const totalPrice = 200.74;
const userName = 'Chelsy';
const message = 'Добро пожаловать!'
const isOpen = true;
const shouldConfirm = false;

// Изменяемые переменные объявляются через "Let"
let x;
let y = 17;
let NoTicets = 'Нет билетов!';
let theLiar = false;


// Для вывода в консоли значения переменной, функции или результата операции нужно использовать - "console.log()"

// console.log(5); -> 5
// console.log(age); -> 10
// console.log('Абра-Кадабра'); -> Абра-Кадабра
// console.log(userName); -> Chelsy
// console.log(isOpen); -> true

// console.log(x); -> undefined
// console.log(y); -> 17
// console.log(NoTicets); -> Нет билетов!
// console.log(theLiar); -> false

/*
* - Оператор typeof
*/

// Предназначен для определения типа переменной (number, string, boolean)
// const typePer1 = typeof 'sdughsiuggeig';
// console.log(typePer1); -> string

// const typePer2 = typeof 5;
// console.log(typePer2); -> number

// const typePer3 = typeof true;
// console.log(typePer3);  -> boolean;

// const typePer1 = typeof NoTicets;
// console.log(typePer1); -> string

// const typePer2 = typeof isOpen;
// console.log(typePer2); -> boolean;

// const typePer3 = typeof totalPrice;
// console.log(typePer3); -> number



/*
* - Как window.alert() блокирует интерпретацию
*/
// Предназначен для остановки последовательной интерпритации кода скрипта и ввода пользователю служебного окна с предложением продолжить работу скрипта. Если пользователь нажимает в этом окне "Ок", то скрипт продолжает работу.

// console.log('Начало работы скрипта до активации ф-ии "alert"');
// alert('Вы хотите продолжить работу скрипта?');
// console.log('Продолжение работы скрипта, после одобрения пользователя');