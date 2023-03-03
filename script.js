//     1. Вивести числа від 20 до 30 через пропуск, використовуючи крок 0,5 (20 20,5 21 21,5….).

let task1 = [];
for (i = 20; i <= 30; i += 0.5) {
  task1.push(i);
}
console.log(`1. ${task1}`);

//     2. Один долар коштує 27 гривень. Вивести дані з розрахунком вартості 10, 20, 30... 100 доларів.

let task2 = [];
for (i = 10; i <= 100; i += 10) {
  task2.push(i * 27);
}
console.log(`2. ${task2}`);

//     3. Дане ціле число. Вивести всі цілі числа від 1 до 100, квадрат яких не перевищує числа N.

let N = 60;
let arr = [];
for(i = 1; i <= 100; i++) {
    let square = i * i;
    if (square <= N) {
        arr.push(i);
    }
}

console.log(`3. ${arr}`);


//     4. Дане ціле число. З'ясувати, чи є воно простим (простим називається число, більше 1, які не мають інших дільників крім 1 і себе).

let task4 = Number(prompt('Завдання 4 - Введіть ціле число:'));
let number = 2;
while (number < task4) {
    if (task4 % number === 0) {
      console.log(`4. Число ${task4} не просте`);
        break;
    } else if (
        task4 % number > 0 && number === task4 - 1
    ) { 
      console.log(`4. Число ${task4} просте`);
    }
    number++
}

//     5. Дане деяке число. Визначити, чи можна одержати це число шляхом зведення числа 3 у деякий ступінь. (Наприклад, числа 9, 81 можна отримати, а 13 - не можна).

let task5 = Number(prompt("Введіть число:"));
let power;
for (power = 0, result = 1; result < task5; power++) {
  result *= 3;
}
if (result === task5) {
  console.log(`5. Число ${task5} можна одержати шляхом зведення числа 3 у ${power} ступінь`);
} else {
  console.log(`5. Число ${task5} не можна одержати шляхом зведення числа 3 у ступінь`);
}




