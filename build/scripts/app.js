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
            inputTo.value = userNumb * (9 / 5) - kelvinToFarhenheit;
        }
    } else if (typeFrom == "c") {
        if (typeTo == "k") {
            inputTo.value = parseInt(userNumb) + 273.15;
        } else if (typeTo == "c") {
            inputTo.value = userNumb;
        } else if (typeTo == "f") {
            inputTo.value = userNumb * (9 / 5) + 32;
        }
    }
}


function lengthCalculate(source, val) {
    var mmBox, cmBox, mBox, kmBox, inchBox, feetBox, yardBox, mileBox;
    var inputBox = source;
    var value = val;
    mmBox = document.querySelector("#millimetresBox");
    cmBox = document.querySelector("#centimetresBox");
    mBox = document.querySelector("#metresBox");
    kmBox = document.querySelector("#kilometresBox");
    inchBox = document.querySelector("#inchesBox");
    feetBox = document.querySelector("#feetBox");
    yardBox = document.querySelector("#yardsBox");
    mileBox = document.querySelector("#milesBox");
    if (inputBox == "millimetresBox") {
        cmBox.value = String(val * 0.1) + " cm";
        mBox.value = String(val * 0.001) + " m";
        kmBox.value = String(val / 1000000) + " km";
        inchBox.value = String(val * 0.03937) + " in";
        feetBox.value = String(val * 0.003281) + " ft";
        yardBox.value = String(val * 0.001094) + " yd";
        milesBox.value = String(val * 0.0000006214) + " mi";
    }
}