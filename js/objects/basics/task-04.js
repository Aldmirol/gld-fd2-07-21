/*Создать функцию - конструктор Tune(title, artist) для создания объектов
с публичными свойствами title, artist и методом concat().
Метод должен возвращать конкатенацию значений свойств title и artist.
Создать несколько объектов.Вызвать их метод concat().*/

function Tune(title, artist) {
    this.title = title;
    this.artist = artist;

    this.concat = function concat() {
        return `${this.title} - ${this.artist}`;
    };
}

const getFirstArtistTitle = new Tune('Whole Lotta Love', 'Led Zeppelin');
const getSecondArtistTitle = new Tune('Amazing', 'Aerosmith');

console.log(getFirstArtistTitle.concat());
console.log(getSecondArtistTitle.concat());