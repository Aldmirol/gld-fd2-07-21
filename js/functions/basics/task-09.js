/*Создайте функцию find(testString, test), которая должна возвращать позицию строки test в строке testString.
Если второй параметр не задан, используйте test = testString.Используйте Function Definition Expression(FDE).Тестовые данные:
    testString = 'abc', test = 'b', result = 1
testString = 'abc', result = 0
testString = 'abc', test = 'd', result = -1
testString = 'abc', test = 'a', test2 = 'b', result = 0*/

function find(testString, test = testString) {
    const result = testString.indexOf(test);

    return console.log(result);
}

find('abc', 'b');