/*Для браузера.Создайте литерал объекта handlePromise со следующими свойствами: 
promise, resolve, reject, onSuccess, onError.
Проинициализируйте первые три свойства null, а последние два функциями, 
которые принимают один параметр и выводят в консоль сообщения:
    первая - Promise is resolved with data: $ {
        paramName
    }
вторая - Promise is rejected with error: $ {
    paramName
}
Создайте три кнопки и три обработчика события click для этих кнопок.
Первый обработчик, создает промис, заполняет первые три свойства, описаного выше объекта:
    свойство promise получает новый созданный промис,
    свойства resolve и reject получают ссылки на соответствующие функции resolve и reject.
Следующие два обработчика запускают методы resolve и reject.*/

const createButton = document.querySelector('.legend__create__button');
const resolveButton = document.querySelector('.legend__resolve__button');
const rejectButton = document.querySelector('.legend__reject__button');

const handlePromise = {
    promise: null,
    resolve: null,
    reject: null,
    onSuccess(paramName) {
        return console.log(`Promise is resolved with data: ${paramName}`);
    },
    onError(paramName) {
        return console.log(`Promise is rejected with error: ${paramName}`);
    } 
};

function createPromise(event) {
    event.preventDefault();

    const promise = new Promise((res, rej) => {
        handlePromise.resolve = res;
        handlePromise.reject = rej;
    })
        .then(handlePromise.onSuccess)
        .catch(handlePromise.onError);

    console.log(promise);
    handlePromise.promise = promise;
}

function resolvePromise(event)  {
    event.preventDefault();

    return handlePromise.resolve('Resolved Data');
}

function rejectPromise(event) {
    event.preventDefault();

    return handlePromise.reject('Rejected Error');
}

createButton.addEventListener('click', createPromise);
resolveButton.addEventListener('click', resolvePromise);
rejectButton.addEventListener('click', rejectPromise);