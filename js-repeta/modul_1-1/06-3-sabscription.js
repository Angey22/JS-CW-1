//! Видео - 2:24:00...2:28:15

/*
* Напиши скрипт проверки подписки пользователя для предоставления доступа к определенному контенту
* Условия:
* - есть три типа подписки: free, pro и vip;
* - получить доступ к контенту могут только пользователи с подпиской "pro" и "vip".
*/

const sub = 'free';

// Если пользователь "pro" или "vip", тогда есть доступ
const canAccessContent = sub === 'pro' || sub === 'vip';
// sub = "free" -> false || false => false
//  sub = "pro" ->  true || false => true
//  sub = "vip" -> false ||  true => true
console.log(`Есть доступ к контенту? -`, canAccessContent);
