// Example 1 - Ввод пользователя и ветвления
// Используя конструкцию if..else и prompt, напиши код, который будет спрашивать: "Какое официальное название JavaScript?". Если пользователь вводит ECMAScript, то показывай alert со строкой "Верно!", в противном случае - "Не знаете? ECMAScript!"

// const question = prompt('Какое официальное название JavaScript?');
// const answer = 'ECMAScript';
// if (question.toLowerCase() === answer.toLowerCase()) {
//     alert('Правильно!')
// } else {
//     alert('Не знаете? ECMAScript!')
// }


// Example 2 - Отображение времени (if...else)
// Напиши скрипт для отображения часов и минут в консоли браузера в виде строки формата "14 ч. 26 мин.". Если значение переменной minutes равно 0, то выводи строку "14 ч.", без минут.

// const hours = 14;
// const minutes = 26;
// let message = 0;

// if (minutes === 0) {
//     message = `${hours} ч.`;
// } else {
//   message = `${hours} ч. ${minutes} мин.`;
// }

// console.log(message);


// Example 3 - Ветвеления
// Напиши скрипт, который выводит в консоль строку "Это положительное число", если в prompt пользователь ввел число больше нуля. Если был введен ноль, выводи в консоль строку "Это ноль". Если передали отрицательное число, в консоли должна быть строка "Это отрицательное число".

// const userInput = +prompt('Введите число'); // "+prompt('Введите число')" то же самое, что и "Number(prompt('Введите число'))" - оба эти выражения переводят значение в число
// console.log("🚀 ~ file: veb-1_2.js ~ line 33 ~ userInput", userInput);

// if (userInput > 0) {
//     console.log('Это позитивное число');
// } else if (userInput === 0) {
//     console.log('Это ноль!')
// } else if (userInput < 0) {
//     console.log('Это негативное число');
// } else if (userInput === NaN) {
//     console.log('Это НЕ число!');
// }


// Example 4 - Вложенные ветвления
// Напиши скрипт, который сравнивает числа в переменных a и b. Если оба значения больше 100, то выведи в консоль максимальное из них. В противном случае в консоли должна быть сумма значения b и числа 512.

// const a = 120;
// const b = 180;

// if (a > 100 && b > 100) {
//     // if (a > b) console.log(a);
//     // else console.log(b);

//     console.log(Math.max(a, b))
// } else {
//     console.log(b + 512);
// }