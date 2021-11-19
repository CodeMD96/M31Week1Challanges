const drinks = {
    pepsi : [10, 2],
    coke : [0, 3],
    water : [3, 1],
    bigWater : [2, 4]
};


const drinksStock = (choice) => {
    if (drinks[choice][0] > 0) {
        return true;
    } else {
        return false;
    };
};

const drinksCost = (balance, choice) => {
    if (balance >= drinks[choice][1]) {
        return true;
    } else {
        return false;
    };
};

const drinksChoice = (balance, choice) => {
    if (drinksStock(choice) && drinksCost(balance, choice)) {
        console.log("You've got good taste!");
    } else if (drinksStock(choice) && drinksCost(balance, choice) == false) {
        console.log("You don't have enough money!");
    } else {
        console.log(`${choice} is not in stock.`);
    };
}



drinksChoice(1, "water")
drinksChoice(1, "pepsi")
drinksChoice(1, "coke")
drinksChoice(0, "water")

// Activity : Alarm

const alarm = {
    weekendAlarm : "no alarm needed",
    weekdayAlarm : "get up at 7am",
    setAlarm : function(day) {
        if (day == "Saturday" || day == "Sunday") {
            return this.weekendAlarm;
        } else {
            return this.weekdayAlarm;
        }
    },
}

console.log(alarm.setAlarm("Saturday"));
console.log(alarm.setAlarm("Wednesday"));

// Activity : Person

const person = {
    name : "Mike",
    age : 25,
    sayHi : function() {
        return `Hello, my name is ${this.name}.`;
    }
};

console.log(person.sayHi());

// Activity : Pet

const pet = {
    name : "Steve",
    typeOfPet : "Scorpion",
    age : 32,
    colour : "Green",
    eat : function() {
        return `${this.name} the ${this.typeOfPet} is eating.`;
    },
    drink : function() {
        return `${this.name} the ${this.typeOfPet} is drinking.`;
    },
};

console.log(pet.eat());
console.log(pet.drink());

// Activity : Coffee Shop

const coffeeShop = {
    branch : "Oak",
    drinks : [
        ["Coffee", "Water", "Tea"],
        [3, 1, 2]
    ],
    food : [
        ["Sandwich", "Cake", "Salad"],
        [1, 3, 2]
    ],
    drinksOrder : function(order) {
        let yourOrder = "";
        let cost = 0;
        for (let i in order) {
            for (let y in this.drinks[0]) {
                if (order[i] == this.drinks[0][y]) {
                    yourOrder += ` ${this.drinks[0][y]},`;
                    cost += this.drinks[1][y];
                } else {
                    continue;
                }
            }
        };
        if (yourOrder == "") {
            yourOrder += " nothing,";
        };
        console.log(`You have orderered:${yourOrder} that will be £${cost}.`);
    },
    drinksOrder : function(order) {
        let yourOrder = "";
        let cost = 0;
        for (let i in order) {
            for (let y in this.drinks[0]) {
                if (order[i] == this.drinks[0][y]) {
                    yourOrder += ` ${this.drinks[0][y]},`;
                    cost += this.drinks[1][y];
                } else {
                    continue;
                }
            }
        };
        if (yourOrder == "") {
            yourOrder += " nothing,";
        };
        console.log(`You have orderered:${yourOrder} that will be £${cost}.`);
    },
    foodOrder : function(order) {
        let yourOrder = "";
        let cost = 0;
        for (let i in order) {
            for (let y in this.food[0]) {
                if (order[i] == this.food[0][y]) {
                    yourOrder += ` ${this.food[0][y]},`;
                    cost += this.food[1][y];
                } else {
                    continue;
                }
            }
        };
        if (yourOrder == "") {
            yourOrder += " nothing,";
        };
        console.log(`You have orderered:${yourOrder} that will be £${cost}.`);
    },
}

coffeeShop.drinksOrder(["Coffee", "Water", "Tea", "Water"]);
coffeeShop.drinksOrder(["Coffee", "Juice", "Orange", "Water"]);
coffeeShop.drinksOrder([]);
coffeeShop.foodOrder(["Cake", "Cake", "Salad"]);

Activity ATM

class account {
    constructor(accNum, pin, balance) {
      this.accNum = accNum;
      this.pin = pin;
      this.balance = balance;
    }
  };

let atm = {
    acc1 : new account(
        12345678,
        1234,
        300
    ),
    acc2 : new account(
        87654321,
        4567,
        10
    ),
    acc3 : new account(
        99999999,
        6789,
        1000
    ),
    insertCard : function(yourAccNum, yourPin, transaction, amount) {
        let num = 0
        for (i in this) {
            if (yourAccNum == this[i]["accNum"]) {
                num = i
                console.log("Please enter your PIN.")
            } else {
                continue;
            }
        }
        if (this.checkPin(yourPin, this[num]["pin"])) {
            console.log(`Correct pin, you have £${this[num]["balance"]} in your account. Choose your transaction.`);
        } else {
            console.log("Incorrect pin.");
            return
        }
        if (transaction == "payIn") {
            this[num]["balance"] = this.payIn(this[num]["balance"], amount);
            console.log(`You have paid £${amount}, your new balance is ${this[num]["balance"]}.`);
        }
        if (transaction == "withdraw" && this[num]["balance"] >= amount) {
            this[num]["balance"] = this.withdraw(this[num]["balance"], amount);
            console.log(`You have withdrawn £${amount}, your new balance is ${this[num]["balance"]}.`);
        } else if (transaction = "withdraw" && this[num]["balance"] < amount) {
            console.log("You can't withdraw that much.")
        }
    },
    checkPin : function(yourPin, pin) {
        if (yourPin = pin) {
            return true;
        } else {
            return false;
        }
    },
    withdraw : function(balance, amount) {
        balance -= amount;
        return balance;
    },
    payIn : function(balance, amount) {
        balance += amount;
        return balance;
    },
    acc4 : new account(
        11111111,
        1234,
        1000
    ),
}


atm.insertCard(11111111, 1234, "withdraw", 400);
atm.insertCard(11111111, 1234, "withdraw", 700);
atm.insertCard(11111111, 1234, "payIn", 400);