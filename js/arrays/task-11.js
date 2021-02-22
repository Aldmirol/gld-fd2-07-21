/*Создать массив любых элементов.Получить случайный элемент из массива и вывести его в консоль.*/

const arrOfRandomEl = ['London', 'is', 'the', 'capital', 'of', 'Great', 'Britain'];

console.log(arrOfRandomEl[Math.floor(Math.random() * arrOfRandomEl.length)]);
