/*Создайте масив урлов['http://a', 'http://b'].Создайте функцию sendRequest, 
которая принимает один параметр - url.
Функция в первой строке должна выводить в консоль сообщение 'sendRequest is called'
и возвращать через 2 с для первого урла объект {
    name: 'Ann'
}, а для второго урла объект {
    age: 16
}.Создайте асинхронную функцию myThirdAsyncFunction которая должна вызвать 
функцию sendRequest для каждого урла и вернуть объект {
    name: 'Ann',
    age: 16
}.
Обработайте результат работы функции myThirdAsyncFunction.*/

const urlArr = ['http://a', 'http://b'];

async function myThirdAsyncFunction(urlArr) {
    function sendRequest(url) {
        console.log('sendRequest is called');
        const resData1 = {
            name: 'Ann'
        };
        const resData2 = {
            age: 16
        };
        const resTimeoutPromise = function (resData, milliseconds) {
            return new Promise((res, rej) => {
                setTimeout(() => {
                    res(resData);
                }, milliseconds);
            });
        };

        if (url === 'http://a') {
            return resTimeoutPromise(resData1, 2000);
        } else if (url === 'http://b') {
            return resTimeoutPromise(resData2, 2000);
        } else {
            return Promise.reject('Promise rejected');
        }
    }

    const requests = urlArr.map(sendRequest);
    return await Promise.all(requests).then(data => data.reduce((acc, val) => acc = {
        ...acc,
        ...val
    }));
}

myThirdAsyncFunction(urlArr)
    .then(console.log)
    .catch(err => console.log(new Error(err)));