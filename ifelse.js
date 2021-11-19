// Challenge 1
function passwordLength(password) {
    if (password.length < 8) {
        console.log("Password is too short!");
    } else {
        console.log(`Your password is: ${password}`);
    }
}

passwordLength("supersecurepssword");
passwordLength("hello");

// Challenge 2

function byFiveIfElse (num) {
    if (num % 3 == 0|| num % 5 == 0) {
        console.log("Number is divisible by 3 or 5.");
    } else {
        console.log("Number is not divisible by 3 or 5.");
    }
}

function byFiveSwitch (num) {
    switch(true) {
        case num % 3 == 0:
        case num % 5 == 0:
            console.log("Number is divisible by 3 or 5.");
            break;
        default:
            console.log("Number is not divisible by 3 or 5.");
    }
}

byFiveIfElse(5);
byFiveIfElse(3);
byFiveIfElse(6);
byFiveIfElse(17);

byFiveSwitch(3);
byFiveSwitch(7);
byFiveSwitch(21);
byFiveSwitch(50);
byFiveSwitch(8);

// Challenge 3

function fizzBuzz (num) {
    if (num % 3 == 0 && num % 5 == 0) {
        console.log("fizz buzz");
    }
    else if (num % 5 == 0) {
        console.log("buzz");
    }
    else if (num % 3 == 0) {
        console.log("fizz");
    }
    else {
        console.log(num);
    }
}

fizzBuzz(3)
fizzBuzz(5)
fizzBuzz(15)
fizzBuzz(31)

// Challenge 4

function palindrome (num) {
    num = num.toString();

    let splitNum = num.split("");
    let reverseArr = splitNum.reverse();
    let revNum = reverseArr.join("");

    if (num.length >= 2 && num == revNum) {
        console.log(`${num} is a palindrome.`);
    } else {
        console.log(`${num} is not a palindrome.`);
    }
}

palindrome(1)
palindrome(12)
palindrome(100000001)
palindrome(11112)
palindrome(1212121)

// Challenge 5

let time = 9
let placeOfWork = "Home"
let townOfHome = "Townstown"

if (time >= 9 && time <= 17) {
    console.log(`I am working at ${placeOfWork}.`);
} else if (time > 17 && time < 20) {
    console.log(`I am out at ${townOfHome}.`)
} else {
    console.log("I am sleeping at home.")
}

// Challenge 6

function lastVowel(str) {
    str = str.toLowerCase();
    let aIndex = str.lastIndexOf("a");
    let eIndex = str.lastIndexOf("e");
    let iIndex = str.lastIndexOf("i");
    let oIndex = str.lastIndexOf("o");
    let uIndex = str.lastIndexOf("u");

    let indexArray = [aIndex, eIndex, iIndex, oIndex, uIndex];
    console.log(Math.max(...indexArray))
}

lastVowel("AEIOU")
lastVowel("Hi Jordan")

//Challenge 7

function firstAndLast(word) {
    if (word.length >1 && word.charAt(0) == word.charAt(word.length -1)) {
        return true
    } else {
        return false
    }
}

console.log(firstAndLast("HHHHHH"));
console.log(firstAndLast("HHHHHHA"));
console.log(firstAndLast("A"));

// Challenge 8

function isEven(num1, num2) {
    if ((num1 + num2) % 2 == 0) {
        return num1+ num2
    } else {
        return num1 * num2
    }
}

console.log(isEven(2, 4));
console.log(isEven(1, 4));
console.log(isEven(3, 4));
console.log(isEven(10, 10));

//Coffee grinder

let onOff = true;

const pressGrindBeans = () => {
    if (onOff) {
        console.log("Grinding beans.");
        onOff = false;
    } else {
        console.log("Stop grinding.");
        onOff = true;
    }
}

pressGrindBeans()
pressGrindBeans()
pressGrindBeans()
pressGrindBeans()

const multiplyByNineFifths = (celsius) => {
    return celsius * (9/5);
};

const getFahrenheit = (celsius) => {
    return multiplyByNineFifths(celsius) +32;
};

console.log("The temperature is " + getFahrenheit(10) + "°F");

const coffeeOrder1 = (size, type) => {
    console.log(`You ordered a ${size} ${type}.`);
};

const coffeeOrder2 = function (size, type) {
    console.log(`You ordered a ${size} ${type}.`);
};

coffeeOrder1("large", "cappuccino");
coffeeOrder2("double", "espresso");

Zeller's algorithm

let f = 0;
let l = 0;
let s = 0;
let x = 0;

const zellersAlgorithm = (day, month, year) => {
    if (month < 3) {
        month += 12;
        year -= 1;
    };
    f = Math.floor(year/100);
    l = year - 100 * f;
    s = Math.floor(2.6 * month - 5.39) + Math.floor(l/4) + Math.floor(f/4) + day + l - 2 * f;
    x = s - (7 * Math.floor(s/7)) ;
    console.log(x);
}

zellersAlgorithm(21, 6, 1996);
zellersAlgorithm(22, 12, 1992);