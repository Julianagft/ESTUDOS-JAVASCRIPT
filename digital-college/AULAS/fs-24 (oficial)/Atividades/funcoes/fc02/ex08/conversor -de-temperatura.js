// Converter uma temperatura de graus Celsius (°C) para Fahrenheit (°F);
//F = (1.8 * C) + 32;

function conversorDeTemperatura(c) {
    const fahrenheit = (1.8 * c) + 32;

    return fahrenheit;
}

const tempCelsius = 20;

console.log(`${tempCelsius}°C equivale a ${conversorDeTemperatura(tempCelsius)}°F!`);

