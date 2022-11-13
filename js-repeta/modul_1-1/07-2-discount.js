/*
* Напиши скрипт подсчета суммы покупки со скидкой в зависимости от потраченой суммы за все время (партнерская программа).
*
* 1-е условие:
* - общая сумма потраченного хранится в переменной "totalSpent";
* - сумма текущего платежа хранится в переменной "payment";
* - скидка хранится в переменной "discount".
*
* 2-е условие:
* - если потрачено от 100 до 1000 - бронзовый партнер, скидка 2%;
* - если потрачено от 1000 до 5000 - серебрянный партнер, скидка 5%
* - если потрачено больше 5000 - золотой партнер, скидка 10%;
* - если потрачеоне меньше 100 - не партнер, скидка 0%.
*
* 3-е условие:
* - в результате работы скрипта вывести сообщение "Оформляем заказ на сумму [число] со скидкой [скидка]%"
*/

// 1-е условие
let totalSpent = 2000;
let payment = 500;
let discount = 0;

// 2-е условие
if (totalSpent < 100) {
console.log('У Вас еще нет партнерской скидки.');
}
else if (totalSpent >= 100 && totalSpent < 1000) {
    discount = 0.02;
    console.log('Бронзовый партнер, скидка 2%');
} else if (totalSpent >= 1000 && totalSpent < 5000) {
    discount = 0.05;
    console.log('Серебрянный партнер, скидка 5%');
} else {
    discount = 0.1;
    console.log('Золотой партнер, скидка 10%');
}

// 3-е условие
payment -= payment * discount; // payment = payment - payment * discount;
console.log(`Оформляем заказ на сумму ${payment} со скидкой ${discount * 100}%`);

// Дополнительные операции
totalSpent += payment;
console.log(`Общая сумма потраченых средств в магазине: ${totalSpent}`);
