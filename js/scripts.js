const container = document.getElementById("container");

const header = document.createElement("h1");
header.className = "mainHeader";
header.innerText = "Таверна Пьяный Дракон";

container.appendChild(header);

let drinkOrders = [drinks[0], drinks[1]];
drinkOrders[0].addIngridient[addIngrid[0], 2];
drinkOrders[1].addIngridient[addIngrid[0], 1];
drinkOrders[1].addIngridient[addIngrid[1], 1];

for (let i = 0; i < drinkOrders.length; i++){
    container.innerHTML += "<p>" + drinkOrders[i].toString() + "</p>";
}
