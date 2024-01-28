class Liquor {
    constructor(name, cookTime, price){
        this.name = name;
        this.cookTime = cookTime;
        this.price = price;
        this.additIngrid = new Array();
    }

    toString(){
        let output = this.name + " \nВремя приготовления: " + this.cookTime + "мин \nЦена: " + this.price + "руб.\n";
        if (this.additIngrid.length > 0){
            output += "Дополнительные ингридиенты:\n";
            for (let i = 0; i < this.additIngrid.length; i++){
                output += this.additIngrid[i].name + ", \n";
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
        let output = this.name + " \nВремя приготовления: " + this.cookTime + "мин \nЦена: " + this.price + "руб.\n";
        return output;
    }
}

function randomNumber(min, max){
    return Math.round(Math.random() * (max - min) + min);
}

const drinks = [
    new Liquor("Чай", 5, 10),
    new Liquor("Кофе", 5, 15)
];

const addIngrid = [
    new DopIngrid("Сахар", 1, 3),
    new DopIngrid("Сливки", 1, 5)
]