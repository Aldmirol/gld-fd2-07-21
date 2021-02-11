/*Напишите код, который из строки $100 получит число и выведите его в консоль.*/

function numFromStr(str) {
    return console.log(+str.slice(1));
} 

numFromStr('$100');