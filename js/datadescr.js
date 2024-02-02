class Liquor {
    constructor(name, cookTime, price){
        this.name = name;
        this.cookTime = cookTime;
        this.price = price;
    }

    toString(){
        let output = "<b>" + this.name + "</b><br>Время приготовления: " + this.cookTime + " мин<br>Цена: " + this.price + " руб.<br>";
        return output;
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
    constructor(drinks, dopIngrid){
        this.drinks = new Array();
        if (dopIngrid !== null){
            this.dopIngrid = new DopIngrid(dopIngrid.name, dopIngrid.cookTime, dopIngrid.price);
        } else {
            this.dopIngrid = null;
        }
        if (drinks != null){
            for (let i = 0; i < drinks.length; i++) {
                this.drinks[i] = new Liquor(drinks[i].name, drinks[i].cookTime, drinks[i].price);
            } 
        }       
        
    }

    calcPrice(){
        let totalPrice = 0;
        for (let i = 0; i < this.drinks.length; i++) {
            totalPrice += this.drinks[i].price;
        }
        if (this.dopIngrid != null) {
            totalPrice += this.dopIngrids[i].price;
        }
        return totalPrice;
    }

    calcTime(){
        let totalTime = 0;
        for (let i = 0; i < this.drinks.length; i++) {
            totalTime += this.drinks[i].cookTime;
        }
        if (this.dopIngrid != null){
            totalTime += this.dopIngrid.cookTime;
        }
        return totalTime;
    }

    toString(){
        this.output = "";
        for (let i = 0; i < this.drinks.length; i++){
            this.output += this.drinks[i].toString();
        }
        if (this.dopIngrid != null) {
            this.output += this.dopIngrid.toString();
        }        
        return this.output;
    }
}

class monthReport {
    constructor(mName){
        this.monthName = mName;
        this.drinks = new Array();
        this.dopIngrids = new Array();
        this.numOrders = 0;
    }

    addOrder(order){        
        let index = this.drinks.length;
        for (let i = 0; i < order.drinks.length; i++){
            this.drinks[index] = new Liquor(order.drinks[i].name, order.drinks[i].cookTime, order.drinks[i].price);
            index++;
        }
        if (order.dopIngrid != null){
            index = this.dopIngrids.length;
            this.dopIngrids[index] = new DopIngrid(order.dopIngrid.name, order.dopIngrid.cookTime, order.dopIngrid.price);
        }
        this.numOrders += 1;
    }

    countDrinkInList(name){
        let num = 0;
        for (let i = 0; i < this.drinks.length; i++){
            if (this.drinks[i].name == name){
                num++;
            }
        }
        return num;
    }

    countDopIngridInList(name){
        let num = 0;
        for (let i = 0; i < this.dopIngrids.length; i++){
            if (this.dopIngrids[i].name == name){
                num++;
            }
        }
        return num;
    }

    getSumDrinksPrice(){
        let sumPrice = 0;
        for (let i = 0; i < this.drinks.length; i++){
            sumPrice += this.drinks[i].price;
        }
        return sumPrice;
    }

    getSumDopIngridsPrice(){
        let sumPrice = 0;
        for (let i = 0; i < this.dopIngrids.length; i++){
            sumPrice += this.dopIngrids[i].price;
        }
        return sumPrice;
    }

    getMonthReportData(){
        let reportData = {
            month: this.monthName,
            numOrders: this.numOrders
        };
        let numData = 0, drinksData = {};
        for (let i = 0; i < drinks.length; i++){
            numData = this.countDrinkInList(drinks[i].name);
            drinksData[drinks[i].name] = drinks[i].name;
            drinksData["count"] = numData;
            drinksData["totalCookTime"] = drinks[i].cookTime * numData;
            drinksData["totalPrice"] = drinks[i].price * numData;
        }
        reportData["drinks"] = drinksData;
        numData = 0;
        let dopIngrData = {};
        for (let i = 0; i < addIngrid.length; i++){
            numData = this.countDopIngridInList(addIngrid[i].name);
            dopIngrData[addIngrid[i].name] = addIngrid[i].name;
            dopIngrData["count"] = numData;
            dopIngrData["totalCookTime"] = addIngrid[i].cookTime * numData;
            dopIngrData["totalPrice"] = addIngrid[i].price * numData;
        }
        reportData["dopIngrid"] = dopIngrData;
        return reportData;
    }

    printMonthReport(){
        let output = "<h3>" + this.monthName + "</h3>";
        output += "<ul>";
        output += "<li>Число заказов: " + this.numOrders + "</li>";
        output += "<li>Число заказанных напитков: " + this.drinks.length + "</li>";
        output += "<li><ul>";
        for (let i = 0; i < drinks.length; i++){
            output += "<li>" + drinks[i].name + ": ";
            output += this.countDrinkInList(drinks[i].name);
            output += "</li>";
        }
        output +="</ul></li>";
        output += "<li>На сумму: " + this.getSumDrinksPrice() + " рублей.</li>";
        output += "<li>Число заказанных дополнительных ингридиентов: " + this.dopIngrids.length + "</li>";
        output += "<li><ul>";
        for (let i = 0; i < addIngrid.length; i++){
            output += "<li>" +addIngrid[i].name + ": ";
            output += this.countDopIngridInList(addIngrid[i].name);
            output += "</li>";
        }
        output +="</ul></li>";
        output += "<li>На суммму: " + this.getSumDopIngridsPrice() + " рублей.</li>";
        output += "<li>Общая выручка: " + (this.getSumDrinksPrice() + this.getSumDopIngridsPrice()) + " рублей.</li>"
        output += "</ul>"
        return output;
    }
}

function randomNumber(min, max){
    return Math.round(Math.random() * (max - min) + min);
}

function isClientTakeMoreDrinks(){
    let num = randomNumber(0, 10);
    if (num >= 0 && num <= 3) {
        return true;
    } else {
        return false;
    }
}

function isClientTakeAdditIngrid(){
    let num = randomNumber(0, 10);
    if (num >= 0 && num <= 2) {
        return true;
    } else {
        return false;
    }
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
    numEmployers = 1;