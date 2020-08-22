let input;
const numbers = [];
let total = 0;
let message;

do {
  input = prompt('Введите число');
  if (isNaN(input)) {
    alert('Было введено не число, попробуйте еще раз');
  } else if (Number(input)) {
    numbers.push(Number(input));
    console.log(numbers);
  }
} while (input !== null);
for (const number of numbers) {
  total += number;
}
console.log(`Общая сумма чисел равна ${total}`);
message = `Общая сумма чисел равна ${total}`;
alert(message);
