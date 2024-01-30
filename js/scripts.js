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
let monthReps = new Array(),
    drink = null,
    dopIngrid = null;
for (let i = 0; i < monthes.length; i++){
    monthReps[i] = new monthReport(monthes[i].name);
    for (let j = 1; j <= monthes[i].days; j++){
        sumMins = 0;
        clients = randomNumber(20, 100);
        while (sumMins < mins || clients > 0){            
            if (isClientTakeMoreDrinks()){
                numDrinks = randomNumber(2, 3);
            } else {
                numDrinks = 1;
            }
            if (isClientTakeAdditIngrid()){
                ingrIndex = randomNumber(0, 9);
            }
            
        }
    }
}