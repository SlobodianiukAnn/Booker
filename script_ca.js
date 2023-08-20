function getValue() {
  var inputValue = document.getElementById("myInput").value;
  // var inputValue = inputElement.value;

  var inputArray = inputValue.split(",");
  console.log(inputArray);
  // alert("Вы ввели: " + inputArray);
  var dateArray = inputArray;

// Получаем первую дату из массива
var dateString = dateArray[0];

// Разбиваем строку даты по символу "-"
var dateParts = dateString.split("-");

// Получаем год и месяц
var yearr = dateParts[0];
var montth = dateParts[1];

console.log("Год:", yearr);
console.log("Месяц:", montth);
}
