let container = document.getElementById("container");
let header = document.createElement("h1");
header.className = "mainHeader";
header.innerText = "Таверна Пьяный Дракон";
let subHeader = document.createElement("h2");
subHeader.classList = "subHeader";
subHeader.innerText = "Годовой отчет";

container.appendChild(header);
container.appendChild(subHeader);

let mins = numEmployers * workTimeHours * 60,
    sumMins = 0,
    sumOrders = 0,
    sumDrinks = 0,
    sumDops = 0,
    totalProfit = 0,
    numOrders = 0,
    numDrinks = 0,
    liqIndex = -1,
    ingrIndex = -1,
    clients = 5;
let monthReps = null,
    _drinks = null,
    order = null,
    _dopIngrid = null;

monthReps = new Array();

for (let i = 0; i < monthes.length; i++){
    monthReps[i] = new monthReport(monthes[i].name);
    for (let j = 0; j < monthes[i].days; j++){
        sumMins = 0;
        clients = randomNumber(20, 100);
        while(clients > 0 && sumMins < mins){
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
            for (let k = 0; k < numDrinks; k++){
                liqIndex = randomNumber(0, drinks.length - 1);
                _drinks[k] = new Liquor(drinks[liqIndex].name, drinks[liqIndex].cookTime, drinks[liqIndex].price);
            }
            order = new Order(_drinks, _dopIngrid);
            monthReps[i].addOrder(order);
            clients--;
            sumMins += order.calcTime();
        }
    }
    container.innerHTML += monthReps[i].printMonthReport() + "<br>";
    sumDrinks += monthReps[i].drinks.length;
    sumDops += monthReps[i].dopIngrids.length;
    sumOrders += monthReps[i].numOrders;
    totalProfit += (monthReps[i].getSumDrinksPrice() + monthReps[i].getSumDopIngridsPrice());
}

container.innerHTML += "<p><b>Число проданных напитков:</b> " + sumDrinks + "</p>";
container.innerHTML += "<p><b>Число проданных дополнительных ингридиентов:</b> " + sumDops + "</p>";
container.innerHTML += "<p><b>Число заказов:</b> " + sumOrders + "</p>";
container.innerHTML += "<p><b>Годовая выручка:</b> " + totalProfit + " рублей.</p>";