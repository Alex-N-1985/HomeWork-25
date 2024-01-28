class Liquor {
    constructor(name, cookTime, price){
        this.name = name;
        this.cookTime = cookTime;
        this.price = price;
        this.additIngrid = new Array();
    }

    toString(){
        let output = "<b>" + this.name + "</b><br>Время приготовления: " + this.cookTime + "мин<br>Цена: " + this.price + "руб.<br>";
        if (this.additIngrid.length > 0){
            output += "Дополнительные ингридиенты:";
            let num = 0;
            for (let i = 0; i < this.additIngrid.length; i++){
                output += "<br><b>" + this.additIngrid[i].name + "</b>,";
            }
        }
        return output;
    }

    addIngridient(ingridient, number){
        let index = this.additIngrid.length;
        for (let i = 0; i < number; i++){
            this.additIngrid[index] = ingridient;
            this.cookTime += ingridient.cookTime;
            this.price += ingridient.price;
            index++;
        }
    }
}

class DopIngrid {
    constructor(name, cookTime, price){
        this.name = name;
        this.cookTime = cookTime;
        this.price = price;
    }

    toString(){
        let output = "<b>"+ this.name + "</b><br>Время приготовления: " + this.cookTime + "мин <br>Цена: " + this.price + "руб.<br>";
        return output;
    }
}

class Order {

    constructor(drinks){
        this.drinks = new Array();
    }

    calcPrice(){
        let totalPrice = 0;
        for (let i = 0; i < this.drinks.length; i++) {
            this.totalPrice += this.drinks[i].price;
        }
        return totalPrice;
    }

    calcTime(){
        let totalTime = 0;
        for (let i = 0; i < this.drinks.length; i++) {
            this.totalTime += this.drinks[i].cookTime;
        }
        return totalTime;
    }
}

function randomNumber(min, max){
    return Math.round(Math.random() * (max - min) + min);
}

const drinks = [
    new Liquor("Чай черный", 5, 10),
    new Liquor("Кофе натуральный", 5, 15),
    new Liquor("Кофе растворимый", 5, 15),
    new Liquor("Вода газированная", 2, 5),
    new Liquor("Вода минеральная", 2, 8),
    new Liquor("Сок Яблочный", 2, 20),
    new Liquor("Сок Апельсиновый", 2, 25)
];

const addIngrid = [
    new DopIngrid("Сахар", 1, 3),
    new DopIngrid("Сливки", 1, 5),
    new DopIngrid("Лимон", 1, 4),
    new DopIngrid("Клубника", 1, 4),
    new DopIngrid("Cироп Вишневый", 1, 5),
    new DopIngrid("Сироп Малиновый", 1, 5),
    new DopIngrid("Сироп Лимонный", 1, 8),
    new DopIngrid("Сироп Апельсиновый", 1, 8),
    new DopIngrid("Мороженое Ванильное", 3, 15),
    new DopIngrid("Мороженое Шоколадное", 3, 15)
];

const monthes = [
    {   name: "Январь",
        days: 31},
    {   name: "Февраль",
        days: 28},
    {   name: "Март",
        days: 31},
    {   name: "Апрель",
        days: 30},
    {   name: "Май",
        days: 31},
    {   name: "Июнь",
        days: 30},
    {   name: "Июль",
        days: 31},
    {   name: "Август",
        days: 31},
    {   name: "Сентябрь",
        days: 30},
    {   name: "Октябрь",
        days: 31},
    {   name: "Ноябрь",
        days: 30}, 
    {   name: "Декабрь",
        days: 31}
];

const days = 365,
    minClients = 20,
    maxClients = 100,
    workTimeHours = 15,
    numEmployers = 10;