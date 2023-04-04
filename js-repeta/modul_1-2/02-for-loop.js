//! Видео - 0:23:05...1:03:30

/*
* Цыкл "for"
*/
console.groupCollapsed('Цыкл "for"'); //! Название группы

// Цыклы - это специальный "кусочек" кода, который позволяет один и тот-же фрагмент кода, повтарять бесконечное количество раз с минимальными изменениями.
// Цыкл "for" записывается - "for(инициализация; условие; пост-выражение)".
// Инициализация - производится с помощью ввода (создания) изменяемой (let) переменной, которой присваивается какое-то значение (например, "let i = 0;"). Хорошим тоном считается использовать в качестве переменной использовать латинскую букву "i" (сокращенно от "iteraciya").
// Условие - это условие прекращение цикла, которое проверяется перед выполнением каждой итерации цыкла. Оно определяет граничные условия работы цыкла (например, "i < 5;"). Важным в условии является то, что проверяется оно на наличие булевого значения, где "true" - указывает цыклу, что нужно выполнять итерацию, а "false" - закончить выполнение цыкла.
// Пост-выражение - логическая или математическая конструкция, которая предназначена для того, чтобы задать изменение ключевой переменной цыкла - "i", после каждого выполнения итерации цыкла, т.е. правило, на основании которого "i" будет изменятся после каждой итерации цыкла (например, "i + = 1" => "i = i + 1" => "i++").

for (let i = 0; i < 5; i += 1) {
    console.log(i);
}
console.log('1-й цыкл "for" - закончил свою работу.');

// Особенностью цыкла "for" является то, что его невозможно использовать для перебора строчного литерала (строки). Для перебора строк, необходимо использовать другой цыкл, например - "for off".

// Дополнительной возможностью цыкла "for" является то, что внутри скобок с условием, можно указать бесконечное количество переменных, и присвоить им разные типы значений. При этом, следует учитывать то, что данные переменные будут видны только внутри "тела" этого цыкла, и, соответственно, использовать их можно только внутри цыкла "for". Изменения значений дополнительных переменных, так-же как и основной переменной счетчика "i", можна задавать для каждой последующей итерации цикла. Все дополнительные переменные и правила их изменения записываются через "," в соответствующих местах условия цыкла.
for (let i = 0, v1 = 35, v2 = 'текст', v3 = true; i < 5; i += 1, v1 -= 1, v2 += ' + что-то', v3 = !v3 ) {
    console.log('--------------------------------------------');
    console.log('Переменная "i" ->', i);
    console.log('Переменная "v1" ->', v1);
    console.log('Переменная "v2" ->', v2);
    console.log('Переменная "v3" ->', v3);
}
console.log('2-й цыкл "for" - закончил свою работу.');

console.groupEnd(); //! Закрываем группу
console.log('-1----------------------------------------------');


/*
* "Pre-increment" и "Post-increment"
*/
console.groupCollapsed('"Pre-increment" и "Post-increment"'); //! Название группы

// "Pre-increment" - возвращает исходное значение.
// "Pre-increment" записывается так -> "i++", что означает "добавь еденицу в переменную 'i', но не добавляй ее в другие переменные, в которых фигурирует переменная 'i' - сразу"
// "Post-increment" - возвращает увеличенное значение.
// "Post-increment" записывается так -> "++i", отличается от "Pre-increment-а" тем, что значение записывается сразу.

//! Пример "Pre-increment"
let a = 10; // Есть некая переменная "а" с заданым значением - "10".
console.log(`Исходная переменная "а" = `, a);

const b = ++a; // Задаем значение переменной "b" с помощью "Pre-increment-а" переменной "а", который указывает на то, что сначала нужно увеличить переменную "a" на "1-у", после чего - задать значение переменной "b", с учетом прирощенной в "a" единице.

console.log(`Pre-increment переменной "а" = `, a);
console.log(`Переменная "b" = `, b);

//! Пример "Post-increment"
let x = 10; // Есть некая переменная "x" с заданым значением - "10"
console.log(`Исходная переменная "x" = `, a);

const y = x++; // Задаем значение переменной "y" с помощью "Post-increment-а" переменной "x", который указывает на то, что сначала нужно задать переменной "y" значение, и только после этого - прирастить переменную "x" на единицу.
console.log(`Post-increment переменной "x" = `, x);
console.log(`Переменная "y" = `, y);

// Помимо синтаксических конструкций приращивания значения "++i" и "i++", существуют конструкции уменьшения значения - "--i" и "i--", с помощью "Pre-increment" и "Post-increment".
// Таким образом, различия использования "Pre-increment" и "Post-increment" заключаются в том, что оба они позволяют прирастить или уменьшить значение соответствующей переменной на "1-у", но в первом случае (Pre-increment) - это происходит сразу, а во втором (Post-increment) - в конце соответствующей операции обработки данных присваивания.
// Ввиду вышеуказанных особенностей, и того, что в них легко запутаться - НЕ рекомендуется использовать синктаксис "Pre-increment" и "Post-increment" в коде. Вместо него, лучше использовать конструкцию упрощенной записи сложения - "+=" ("i = i + 1" => "i += 1") или вычитания "-=" ("i = i - 1" => "i -= 1").

console.groupEnd(); //! Закрываем группу
console.log('-2----------------------------------------------');


/*
* Напиши скрипт который подсчитывает общую сумму зарплат работников.
* Количество работников хранится в переменной "employees".
* Зарплата каждого работника это случайное число от 500 до 5000.
* Записать сумму в переменную "totalSalary" и вывести в консоль.
*/
console.groupCollapsed('Скрипт подсчета ЗП'); //! Название группы

// 1. Создать переменные, в том числе "employees" и "totalSalary"
const minSalary = 500;
const maxSalary = 5000;
const employees = 4;
let totalSalary = 0;

// 2. Создать цыкл для "перебора" заданного переменной "employees" количества работников, такой, чтобы при каждой итерации цыкла - генерировалось случайное число (размер ЗП работника) в заданом диапазоне 500-5000.
for (let i = 1; i <= employees; i += 1) {

    // 2.1. Генерируем ЗП работников в заданом диапазоне.
    const salary = Math.round(Math.random() * (maxSalary - minSalary) + minSalary);

    // 2.2. Выводим в консоль сообщение с ЗП работника "i-ой" итерации.
    console.log(`ЗП работника № ${i} -> ${salary}`);

    // 2.3. Сгенерированную на итерации ЗП работника суммируем с текущим значением переменной "totalSalary".
    totalSalary += salary;
};

// 3. Выводим итоговое значение суммы ЗП всех работников
console.log("Сумма ЗП всех работников: ", totalSalary);

console.groupEnd(); //! Закрываем группу
console.log('-3----------------------------------------------');


/*
* Напиши скрипт который подсчитывает сумму всех четных чисел,
* которые входят в диапазон чисел, в переменных от "min" до "max".
* Например, если "min = 0" и "max = 5", то диапазон 0-5, и в нем два четных числа - 2 и 4, их сумма 6.
*/
console.groupCollapsed('Скрипт подсчета четных чисел'); //! Название группы

// 1. Объявляем переменные
const min = 0;
const max = 5;
let total = 0;

// 2. Создаем цикл "for" для перебора значений в диапазоне от "min" до "max" с шагом в 1-у
for (let i = min; i <= max; i += 1) {
    console.log('Текущее значение "i" на итерации ->', i);

    // 3. Задаем правило для нахождения четных значений (1-й вариант)
    // if (i % 2 === 0) {
    //     console.log('Четное: ', i);
    //     total += i;
    // }

    // 3. Задаем правило для нахождения четных значений (2-й вариант)
    if (i % 2 !== 0) {
        console.log('Не четное:', i);
        continue;
    } else if (i !== 0) {
    console.log('Четное:', i);
        total += i;
    }
};
//! Директива (служебное слово) - "continue" предназначена для прерывания итерации цыкла. В вышеописанном коде "continue" указывает на необходимость прервать выполнение текущего цыкла (так как число НЕ четное), и перейти к выполнению следующей итерации цыкла.
//! Директива - "break" предназначена для прерывания работы всего цыкла, а не его одной итерации.

// 4. Выводим сумму всех четных значений
console.log('Сумма всех четных чисел из заданного диапазона:', total);

console.groupEnd(); //! Закрываем группу
console.log('-4----------------------------------------------');