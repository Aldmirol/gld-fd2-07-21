/*Cоздайте функцию makeRequest, используя FD(Function Declaration).
Функция должна принимать один параметр - url и возвращать промис, 
который перейдет в состояние resolved через 2 с.и вернет значение параметра.
Первой строкой в функции выведите сообщение 'makeRequest is called'.
Cоздайте функцию mySecondAsyncFunction, используя FD(Function Declaration).
Функция должна вызвать функцию makeRequest, получить результат ее работы и вывести в консоль.*/

async function mySecondAsyncFunction(url) {
    function makeRequest(url) {
        console.log('MakeRequest is called');

        return new Promise((res, rej) => {
            setTimeout(() => {
                res(url);
            }, 2000);
        });
    }

    return await makeRequest(url);
}

mySecondAsyncFunction("https://google.com")
    .then(console.log);
