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



//     5. Дане деяке число. Визначити, чи можна одержати це число шляхом зведення числа 3 у деякий ступінь. (Наприклад, числа 9, 81 можна отримати, а 13 - не можна).
