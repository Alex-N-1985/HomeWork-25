const container = document.getElementById("container");

const header = document.createElement("h1");
header.className = "mainHeader";
header.innerText = "Таверна Пьяный Дракон";

container.appendChild(header);

let drinkOrders = [
    new Liquor(drinks[0].name, drinks[0].cookTime, drinks[0].price),
    new Liquor( drinks[2].name, drinks[2].cookTime,  drinks[2].price)
];

drinkOrders[0].addIngridient(new DopIngrid(addIngrid[0].name, addIngrid[0].cookTime, addIngrid[0].price), 2);
drinkOrders[1].addIngridient(new DopIngrid(addIngrid[0].name, addIngrid[0].cookTime, addIngrid[0].price), 1);
drinkOrders[1].addIngridient(new DopIngrid(addIngrid[1].name, addIngrid[1].cookTime, addIngrid[1].price), 1);

for (let i = 0; i < drinkOrders.length; i++){
    container.innerHTML += "<p>" + drinkOrders[i].toString() + "</p>";
}