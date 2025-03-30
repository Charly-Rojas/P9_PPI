const units = {
    temperature: ['Celsius', 'Fahrenheit', 'Kelvin'],
    distance: ['Metros', 'Kilometros', 'Millas', 'Pies', 'Pulgadas'],
    time: ['Años', 'Dias', 'Minutos', 'Segundos'],
    currency: ['MXN', 'USD', 'EUR']
};

function unidades() {
    const category = document.getElementById('category').value;
    const inputUnit = document.getElementById('inputUnit');
    const outputUnit = document.getElementById('outputUnit');

    inputUnit.innerHTML = '';
    outputUnit.innerHTML = '';

    units[category].forEach(unit => {
        const option1 = document.createElement('option');
        option1.value = unit;
        option1.textContent = unit;
        inputUnit.appendChild(option1);

        const option2 = document.createElement('option');
        option2.value = unit;
        option2.textContent = unit;
        outputUnit.appendChild(option2);
    });
}

function convert() {
    const category = document.getElementById('category').value;
    const inputValue = parseFloat(document.getElementById('inputValue').value);
    const inputUnit = document.getElementById('inputUnit').value;
    const outputUnit = document.getElementById('outputUnit').value;
    let outputValue;

    switch (category) {
        case 'temperature':
            if (inputUnit === 'Celsius') {
                if (outputUnit === 'Fahrenheit') {
                    outputValue = (inputValue * 9 / 5) + 32;
                } else if (outputUnit === 'Kelvin') {
                    outputValue = inputValue + 273.15;
                } else {
                    outputValue = inputValue;
                }
            } else if (inputUnit === 'Fahrenheit') {
                if (outputUnit === 'Celsius') {
                    outputValue = (inputValue - 32) * 5 / 9;
                } else if (outputUnit === 'Kelvin') {
                    outputValue = (inputValue - 32) * 5 / 9 + 273.15;
                } else {
                    outputValue = inputValue;
                }
            } else if (inputUnit === 'Kelvin') {
                if (outputUnit === 'Celsius') {
                    outputValue = inputValue - 273.15;
                } else if (outputUnit === 'Fahrenheit') {
                    outputValue = (inputValue - 273.15) * 9 / 5 + 32;
                } else {
                    outputValue = inputValue;
                }
            }
            break;
        case 'distance':
            if (inputUnit === 'Metros') {
                if (outputUnit === 'Kilometros') {
                    outputValue = inputValue / 1000;
                } else if (outputUnit === 'Millas') {
                    outputValue = inputValue * 0.000621371;
                } else if (outputUnit === 'Pies') {
                    outputValue = inputValue * 3.28084;
                } else if (outputUnit === 'Pulgadas') {
                    outputValue = inputValue * 39.3701;
                } else {
                    outputValue = inputValue;
                }
            } else if (inputUnit === 'Kilometros') {
                if (outputUnit === 'Metros') {
                    outputValue = inputValue * 1000;
                } else if (outputUnit === 'Millas') {
                    outputValue = inputValue * 0.621371;
                } else if (outputUnit === 'Pies') {
                    outputValue = inputValue * 3280.84;
                } else if (outputUnit === 'Pulgadas') {
                    outputValue = inputValue * 39370.1;
                } else {
                    outputValue = inputValue;
                }
            } else if (inputUnit === 'Millas') {
                if (outputUnit === 'Metros') {
                    outputValue = inputValue / 0.000621371;
                } else if (outputUnit === 'Kilometros') {
                    outputValue = inputValue / 0.621371;
                } else if (outputUnit === 'Pies') {
                    outputValue = inputValue * 5280;
                } else if (outputUnit === 'Pulgadas') {
                    outputValue = inputValue * 63360;
                } else {
                    outputValue = inputValue;
                }
            } else if (inputUnit === 'Pies') {
                if (outputUnit === 'Metros') {
                    outputValue = inputValue / 3.28084;
                } else if (outputUnit === 'Kilometros') {
                    outputValue = inputValue / 3280.84;
                } else if (outputUnit === 'Millas') {
                    outputValue = inputValue / 5280;
                } else if (outputUnit === 'Pulgadas') {
                    outputValue = inputValue * 12;
                } else {
                    outputValue = inputValue;
                }
            } else if (inputUnit === 'Pulgadas') {
                if (outputUnit === 'Metros') {
                    outputValue = inputValue / 39.3701;
                } else if (outputUnit === 'Kilometros') {
                    outputValue = inputValue / 39370.1;
                } else if (outputUnit === 'Millas') {
                    outputValue = inputValue / 63360;
                } else if (outputUnit === 'Pies') {
                    outputValue = inputValue / 12;
                } else {
                    outputValue = inputValue;
                }
            }
            break;
        case 'time':
            if (inputUnit === 'Años') {
                if (outputUnit === 'Dias') {
                    outputValue = inputValue * 365;
                } else if (outputUnit === 'Minutos') {
                    outputValue = inputValue * 525600;
                } else if (outputUnit === 'Segundos') {
                    outputValue = inputValue * 31536000;
                } else {
                    outputValue = inputValue;
                }
            } else if (inputUnit === 'Dias') {
                if (outputUnit === 'Años') {
                    outputValue = inputValue / 365;
                } else if (outputUnit === 'Minutos') {
                    outputValue = inputValue * 1440;
                } else if (outputUnit === 'Segundos') {
                    outputValue = inputValue * 86400;
                } else {
                    outputValue = inputValue;
                }
            } else if (inputUnit === 'Minutos') {
                if (outputUnit === 'Años') {
                    outputValue = inputValue / 525600;
                } else if (outputUnit === 'Dias') {
                    outputValue = inputValue / 1440;
                } else if (outputUnit === 'Segundos') {
                    outputValue = inputValue * 60;
                } else {
                    outputValue = inputValue;
                }
            } else if (inputUnit === 'Segundos') {
                if (outputUnit === 'Años') {
                    outputValue = inputValue / 31536000;
                } else if (outputUnit === 'Dias') {
                    outputValue = inputValue / 86400;
                } else if (outputUnit === 'Minutos') {
                    outputValue = inputValue / 60;
                } else {
                    outputValue = inputValue;
                }
            }
            break;
        case 'currency':
            if (inputUnit === 'MXN') {
                if (outputUnit === 'USD') {
                    outputValue = inputValue / 20;
                } else if (outputUnit === 'EUR') {
                    outputValue = inputValue / 24;
                } else {
                    outputValue = inputValue;
                }
            } else if (inputUnit === 'USD') {
                if (outputUnit === 'MXN') {
                    outputValue = inputValue * 20;
                } else if (outputUnit === 'EUR') {
                    outputValue = inputValue * 0.84;
                } else {
                    outputValue = inputValue;
                }
            } else if (inputUnit === 'EUR') {
                if (outputUnit === 'MXN') {
                    outputValue = inputValue * 24;
                } else if (outputUnit === 'USD') {
                    outputValue = inputValue * 1.19;
                } else {
                    outputValue = inputValue;
                }
            }
            break;
    }

    document.getElementById('outputValue').value = outputValue;
}

window.onload = function () {
    let select = document.getElementById("category");

    select.value = "temperature";
    select.dispatchEvent(new Event("change"));
};
// window.onload =  unidades();