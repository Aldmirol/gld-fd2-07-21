/*Нарисуйте в консоле пирамиду на 9 уровней как показано ниже
1
22
333
4444
...*/

(function() {
    for (let i = 1; i < 10; i++) {
         let conc = '';

        for (j = 0; j < i; j++) {
            conc = conc + i;
        }
        
        console.log(conc);
    }
})();