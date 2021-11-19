// Activity 1

let films = ["Shrek", "Shrek 2", "Cars 2", "Lethal Weapon 2", "Escape from LA"];


films.push("Film1", "Film2");


for (let i = 0; i < films.length; i++) {
    console.log(films[i]);
}

// Activity 2

for (let i = 0; i < 50; i++) {
    console.log(Math.floor(Math.random() * 50 + 1));
}

// Activity 3

for (let i = 9; i > -1; i--) {
    console.log(i);
}

// Activity 4

let films = ["Shrek", "Shrek 2", "Cars 2", "Ghostbusters"];

for (let i = 0; i < films.length; i++) {
    console.log(films[i]);
}

const filmCheck = (arr) => {
    if (arr[2] == "Ghostbusters") {
        console.log("Yay Ghostbusters");
    } else {
        console.log("booo, we want Ghostbusters")
    }
}

filmCheck(films);

// Activity 5

let num = 0;

for (let i = 0; i < 6; i++) {
    num = Math.floor(Math.random() * 30 + 1);
    if (num % 7 == 0) {
        console.log(`${num} is divisible by 7!`);
    } else {
        console.log(`${num} is not divisible by 7!`);
    }
}

// Activity 6

for (let i = 1; i > 0; i--) {
    console.log("This is a for loop, it takes 3 statements. This first is executed once, the second sets the condition for executing the block and the third is executed every time the block is completed.")
}
num = 0

while (num < 1) {
    console.log("This is a while loop, it repeats the block of code while the condition is true.");
    num++
}
do {
    console.log("this is a do while loop, it executes this block of code block once before checking if the condition is true. It will then repeat until the condition is no longer true.")
} 
while (1 >10);

//Activity 7

isPrime = true

for (i = 1; i < 21; i++) {
    for (x = 2; x < i; x++) {
        if (i % x == 0) {
            isPrime = false;
            break;
        } else {
            isPrime = true;
        }
    }
    if (i == 1 || i == 2) {
        isPrime =false;
    }
    if (isPrime == true) {
        console.log(`${i} is prime`);
    } else {
        console.log(`${i} is not prime`);
    }
}