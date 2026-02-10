// Задача 1
for (let i = 1; i <= 20; i++) {
    if (i % 4 !== 0) {
        console.log(i);
    }
}

// Задача 2
const number = 5;
let factorial = 1;

if (number >= 0 && number === parseInt(number)) {
    for (let i = 1; i <= number; i++) {
        factorial *= i;
    }
    console.log(`Факториал числа ${number} = ${factorial}`);
} else {
    console.log("Пожалуйста, введите неотрицательное целое число.");
}

// Задача 3
const boardSize = 8;
let board = "";

for (let row = 0; row < boardSize; row++) {
    for (let col = 0; col < boardSize; col++) {
        if ((row + col) % 2 === 0) {
            board += "#";
        } else {
            board += " ";
        }
    }
    board += "\n";
}

console.log(board);