/*
* Напиши скрипт проверки подписки пользователя для предоставления доступа к определенному контенту
* Условия:
* - есть три типа подписки: free, pro и vip;
* - получить доступ к контенту могут только пользователи с подпиской "pro" и "vip".
*/

const sub = 'free';

// Если пользователь "pro" или "vip", тогда есть доступ
const canAccessContent = sub === 'pro' || sub === 'vip';
// "free" -> false || false => false
//  "pro" ->  true || false => true
//  "vip" -> false ||  true => true
console.log(`Есть доступ к контенту? -`, canAccessContent);