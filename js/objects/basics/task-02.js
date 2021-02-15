/*Создайте объект city, укажите у него свойства name (название города, строка) со значением "Город"
и population (населенность города, число) со значением 10 млн.
Создайте у объекта city метод getCityName(), который вернет название города*/

const city = {
    name: 'City',
    population: 10e6,
    getCityName: function() {
        return this.name;
    },
};

console.log(city.getCityName());