/*Нарисуйте в консоле пирамиду на 10 уровней как показано ниже
    x
   xxx
  xxxxx
 xxxxxxx
xxxxxxxxx
    ...*/

(function () {
    const rows = 10;

    for (let i = 0; i < rows; i++) {
        let str = '';

        for (let k = 0; k <= i; k++) {
            str = str + 'x';

            if (k >= 1) {
                str = str + 'x';
            }
        }

        for (let j = 0; j < rows - i; j++) {
            str = ' ' + str;
        }

        console.log(str);
    }
})();