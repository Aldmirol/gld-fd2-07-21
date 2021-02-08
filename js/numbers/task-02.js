/*Найдите квадратный корень из 999. Результат округлите до целых, до десятых, до сотых.*/

(function() {
    const num = 999;
    const numSqrt = Math.sqrt(num);

    console.log(`
    Округление:
    до целых- ${numSqrt.toFixed(0)},
    до десятых- ${numSqrt.toFixed(1)},
    до сотых- ${numSqrt.toFixed(2)}.`);
})();