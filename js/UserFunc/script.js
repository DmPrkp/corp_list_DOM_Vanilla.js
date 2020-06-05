'use strict'

let user = [
    {
        img: "m1.jpg",
        name: "Иван",
        lastName: "Иванов",
        bDate: new Date(1976, 23, 1),
        post: "сталевар",
        outS: false,
        addres: "г. Санкт-Петербург Невсий пр. д. 106 кв.8",
    }, {
        img: "m2.jpg",
        name: "Петр",
        lastName: "Петров",
        bDate: new Date(1986, 11, 1),
        post: "охранник",
        outS: false,
        addres: "г. Санкт-Петербург Литейный пр. д. 13 кв.88",
    }, {
        img: "m3.jpg",
        name: "Влентин",
        lastName: "Юмашев",
        bDate: new Date(1996, 1, 18),
        post: "технический писатель",
        outS: true,
        addres: "г. Тула ул. Комсомола д. 138 кв.1",
    }, {
        img: "m4.jpg",
        name: "Борис",
        lastName: "Ельцон",
        bDate: new Date(1962, 12, 13),
        post: "пономарь",
        outS: false,
        addres: "г. Санкт-Петербург ул. Красных комиссаров д. 18 кв.1/у",
    }, {
        img: "m8.jpg",
        name: "Людочка",
        lastName: "",
        bDate: new Date(1976, 1, 18),
        post: "бухгалтер",
        outS: false,
        addres: "г. Санкт-Петербург Невский проспект д. 1 кв.6",
    }, {
        img: "m5.jpg",
        name: "Арсений",
        lastName: "Геворкян",
        bDate: new Date(1993, 1, 18),
        post: "менеджер по логистике",
        outS: true,
        addres: "г. Геленджик ул. Приморская д. 3",
    }
]

let tbMain = document.getElementById("tBodyMain");

myUtils.renderUser(user)