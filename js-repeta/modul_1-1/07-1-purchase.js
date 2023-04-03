//! Видео - 0:00:00...

/*
* Напиши скрипт обработки покупки в магазине.
*
*  Основные условия алгоритма работы скрипта:
*  1-е условие:
* - баланс пользователя хранится в переменной "balance";
* - сумма покупки хранится в переменной "payment";
* 
*  2-е условие:
* - перед началом операции проверки (обработки покупки), необходимо вывести пользователю сообщение - 
* "Общая стоимость заказа [число] кредитов. Проверяем кол-во доступных средств на Вашем счету..."
*
*  3-е условие:
* - если сумма покупки не превышает баланс, то нужно:
* 1) Вывести из баланса сумму покупки;
* 2) Вывести сообщение "Все хорошо, снимаем деньги с Вашего счета... Спасибо за покупку!"
* 3) Вывести сообщение "На счету осталось [число] кредитов"
* - если сумма покупки превышает баланс:
* 1) Вывести на экран сообщение "На Вашем счету недостаточно средств для проведения операции!"
*
*  4-е условие:
* - в конце работы скрипта вывести сообщение "Операция завершена"
*/

// 1-е условие
let balance = 10000;
const payment = 2000;

// 2-е условие
console.log(`Общая стоимость заказа ${payment} кредитов. Проверяем кол-во доступных средств на Вашем счету...`);

// 3-е условие (1-й вариант реализации)
if (balance >= payment) {
    balance -= payment; // balance = balance - payment
    console.log("Все хорошо, снимаем деньги с Вашего счета... Спасибо за покупку!");
    console.log(`На счету осталось ${balance} кредитов`);
} else {
    console.log("На Вашем счету недостаточно средств для проведения операции!");
}

// 4-е условие
console.log("Операция завершена");