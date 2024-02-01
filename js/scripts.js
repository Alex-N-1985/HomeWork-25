const container = document.getElementById("container");

const header = document.createElement("h1");
header.className = "mainHeader";
header.innerText = "Таверна Пьяный Дракон";

container.appendChild(header);

let mins = numEmployers * workTimeHours * 60,
    sumMins = 0,
    numOrders = 0,
    numDrinks = 0,
    liqIndex = -1,
    ingrIndex = -1, 
    clients = 0;
let monthReps = null,
    _drinks = null,
    _dopIngrid = null;

let order = null;

clients = randomNumber(20, 100);
if (isClientTakeMoreDrinks()){
    numDrinks = randomNumber(2, 3);
} else {
    numDrinks = 1;
}

if (isClientTakeAdditIngrid()){
    ingrIndex = randomNumber(0, addIngrid.length - 1);
    _dopIngrid = new DopIngrid(addIngrid[ingrIndex].name, addIngrid[ingrIndex].cookTime, addIngrid[ingrIndex].price);    
}

_drinks = new Array();
for (let i = 0; i < numDrinks; i++){
    liqIndex = randomNumber(0, drinks.length);
    _drinks[i] = new Liquor(drinks[liqIndex].name, drinks[liqIndex].cookTime, drinks[liqIndex].price);
}
order = new Order(_drinks, new Array(_dopIngrid));

container += "<p>" + order.toString() + "</p>";

/* Ошибки в добавлении дополнительного ингридиента в заказ (order),
 добавляется пустой объект, когда выпадает ситуация "без дополн. ингридиентов" */