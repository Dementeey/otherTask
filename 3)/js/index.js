// 3) Напишите функцию для создания таблицы размером NхM. Такой, чтобы каждая ячейка заполнялась случайной буквой алфавита и случайным цветом фона (для выполнения задания, воспользуйтесь методомrandom() объекта Math; кроме того создайте массив в элементами – буквами алфавита)
// Не использовать jQuery в данном задании.
// ------------------------------------------------------------------------
const rowInput = document.querySelector('#row');
const colInput = document.querySelector('#col');

const colorTableGenerator = (row, col) => {
  const lang = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');
  const getRandom = (min = 1, max = 255) =>
    Math.round(Math.random() * (max - min) + min);
 
  const table = document.createElement('table');
  table.classList.add('color-table')
  document.body.insertBefore(table, document.body.firstChild);

  for (let i = 0; i < row; i += 1) {
    const tRow = document.createElement('tr');

    for (let i = 0; i < col; i += 1) {
      const tData = document.createElement('td');
      tData.innerText = lang[getRandom(0, 25)].toLocaleLowerCase();
      tData.style.backgroundColor =
        `rgb(${getRandom()},${getRandom()},${getRandom()})`;
      tRow.appendChild(tData);
    }

    table.appendChild(tRow);
  }
}


//                 row, col

// document.querySelector('button').addEventListener('click', () => {
//   colorTableGenerator(rowInput.value, colInput.value);
// });

colorTableGenerator(10, 10);



