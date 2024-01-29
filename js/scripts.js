const container = document.getElementById("container");

const header = document.createElement("h1");
header.className = "mainHeader";
header.innerText = "Таверна Пьяный Дракон";

container.appendChild(header);

let drinkOrders = [
    new Liquor(drinks[0].name, drinks[0].cookTime, drinks[0].price),
    new Liquor( drinks[2].name, drinks[2].cookTime,  drinks[2].price)
];

for (let i = 0; i < drinkOrders.length; i++){
    container.innerHTML += "<p>" + drinkOrders[i].toString() + "</p>";
}