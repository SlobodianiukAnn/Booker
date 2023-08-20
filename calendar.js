function createCalendar(elem, year, month){
  elem = document.querySelector(elem);

  let mon = month -1;
  let d = new Date(year, mon)

  let table = `
  <caption>${month}.${year}</caption>
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

for(let i=1; i<d.getDay(); i++ ){
        table += '<td></td>';
  }

  while(d.getMonth()== mon) {
    table += '<td>' + d.getDate() + '</td>'

    if(getDay(d) % 7 == 6){
      table += '</tr><tr>'
    }
    d.setDate(d.getDate()+1);
  }

  if(getDay(d) != 0){
    for(let i=d.getDay(); i<8; i++ ){
        table += '<td></td>';
  }
  }

  table += '</tr></table>';
  elem.innerHTML = table;
}

function getDay(date){
  let day = date.getDay();
  if(day == 0){
    day = 7;
    return day-1;
  }
}

createCalendar('calendar', 2021, 4);