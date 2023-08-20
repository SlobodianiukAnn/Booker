function createCalendar(elem, year, month) {

  elem = document.querySelector(elem);

  let mon = month - 1;
  let d = new Date(year, mon)

  let table = `
  
  <table>
    <tr>
      <th>пн</th>
      <th>вт</th>
      <th>ср</th>
      <th>чт</th>
      <th>пя</th>
      <th>сб</th>
      <th>вс</th>
    </tr>
    <tr>
  `;

  for (let i = 1; i < d.getDay(); i++) {
    table += '<td></td>';
  }

  while (d.getMonth() == mon) {
    table += '<td>' + d.getDate() + '</td>'

    if (getDay(d) % 7 == 6) {
      table += '</tr><tr>'
    }
    d.setDate(d.getDate() + 1);
  }

  if (getDay(d) != 0) {
    for (let i = d.getDay(); i < 8; i++) {
      table += '<td></td>';
    }
  }

  table += '</tr></table>';
  elem.innerHTML = table;
}

function getDay(date) {
  let day = date.getDay();
  if (day == 0) {
    day = 7;
    return day - 1;
  }
}

let yearr, montth; // Объявляем переменные на уровне блока

function getValue() {
  var inputValue = document.getElementById("myInput").value;
  var inputArray = inputValue.split(",");
  console.log(inputArray);
  var dateArray = inputArray;
  var dateString = dateArray[0];
  var dateParts = dateString.split("-");

  yearr = dateParts[0]; // Присваиваем значение года переменной на уровне блока
  montth = dateParts[1]; // Присваиваем значение месяца переменной на уровне блока



  createCalendar('#calendar', parseInt(yearr), parseInt(montth));
}

window.addEventListener('DOMContentLoaded', () => {
  createCalendar('#calendar', 2023, 3); // Создаем начальный календарь при загрузке страницы
});