/*Выведите в консоль пирамиду на 9 уровней как показано ниже.
Используйте String.prototype.repeat().
1
22
333
4444
...*/

let num = 0;

for (let i = 0; i <= 9; i++) {
    console.log((num + '').repeat(i));

    num++;
}