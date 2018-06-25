

function exampleConvert() {
  var userNumb = document.getElementById("inputFrom").value;
  var typeFrom = document.getElementById("selectFrom").value;
  var typeTo = document.getElementById("selectTo").value;
  var inputTo = document.getElementById("inputTo");
  var kelvinToCelcius = 273.15;
  var kelvinToFarhenheit = 459.67;
  if (typeFrom == "k") {
    if (typeTo == "k") {
      inputTo.value = userNumb;
    } else if (typeTo == "c") {
      inputTo.value = userNumb - kelvinToCelcius;
    } else if (typeTo == "f") {
      inputTo.value = userNumb * (9/5) - kelvinToFarhenheit;
    }
  } else if (typeFrom == "c") {
    if (typeTo == "k") {
      inputTo.value = parseInt(userNumb) + 273.15;
    } else if (typeTo == "c") {
      inputTo.value = userNumb;
    } else if (typeTo == "f") {
      inputTo.value = userNumb * (9/5) + 32;
    }
  }
}
