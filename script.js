
const buttonConvert = document.getElementById("btn");

form.addEventListener("submit", function(e) {
    e.preventDefault();
})


buttonConvert.onclick = function() {

    let input = document.getElementById("degree").value
    const convertFrom = document.getElementById("convertFrom").value
    const convertTo = document.getElementById("convertTo").value

    const element = document.getElementById('result');
    if(element.firstElementChild){
        element.firstElementChild.remove()
    }
    
    if(input == ""){
       let result = document.createElement("p");
       result.innerText = "Por favor insira um valor de temperatura."
    
      const p = document.getElementById("result");
       p.prepend(result)
    } else if(convertFrom == "Celsius" && convertTo == "Fahrenheit"){
        celsiusToFahrenheit(input, convertTo);
    } else if(convertFrom == "Fahrenheit" && convertTo == "Celsius"){
        fahrenheitToCelsius(input,convertTo)
    } else if(convertFrom == "Celsius" && convertTo == "Kelvin"){
        celsiusToKelvin(input, convertTo)
    }else if(convertFrom == "Kelvin" && convertTo == "Celsius"){
        celsiusToKelvin(input, convertTo)
    }else if (convertFrom == "Fahrenheit" && convertTo == "Kelvin"){
        fahrenheitToKelvin(input, convertTo) 
    } else if (convertFrom == "Kelvin" && convertTo == "Fahrenheit"){
        kelvinToFahrenheit(input, convertTo)  
    } else if (convertFrom === convertTo){
        insertElement(Number(input), convertTo)
    }

      
}

function insertElement(e, nm){
    let result = document.createElement("p");
    result.innerText = "O resultado é " + e.toFixed(2) + " graus " + nm + ".";
 
    const p = document.getElementById("result");
    p.prepend(result)
}

    
function celsiusToFahrenheit(control, convertTo){
   let fah = control * 9/5 + 32
   insertElement(fah, convertTo)
   
}

    
function fahrenheitToCelsius(control, convertTo){
   let cel = (control - 32) * 5/9
   insertElement(cel, convertTo)
}

function celsiusToKelvin(control, convertTo){  
    if(document.getElementById("convertFrom").value == "Celsius" && document.getElementById("convertTo").value == "Kelvin"){
        let kel = Number(control) + 273.15
    insertElement(kel, convertTo)
    } else if(document.getElementById("convertFrom").value == "Kelvin" && document.getElementById("convertTo").value == "Celsius"){
        let kel = control - 273.15
   insertElement(kel, convertTo)
    }
    
}
function fahrenheitToKelvin(control, convertTo){
    let cel = (control - 32) * 5/9
    let kel = cel + 273.15
    insertElement(kel, convertTo)
}

function kelvinToFahrenheit(control, convertTo){
    let kel = control - 273.15
    let fah = kel * 9/5 + 32
    insertElement(fah, convertTo)
}


