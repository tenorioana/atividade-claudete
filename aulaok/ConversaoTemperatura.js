function calcular() {
    const celsiusToFahrenheit = (celsius) => (celsius * 9/5) + 32;
    const fahrenheitToCelsius = (fahrenheit) => (fahrenheit - 32) * 5/9;

    const celsiusFahrenheit = document.getElementById('tempCelsiusFahrenheit').checked;
    const fahrenheitCelsius = document.getElementById('tempFahrenheitCelsius').checked;
    const numero = parseFloat(document.getElementById('numero').value);
    const respostaDiv = document.getElementById('resposta');

    if (isNaN(numero)) {
        respostaDiv.textContent = 'Por favor, insira um valor válido.';
        return;
    }

    if (celsiusFahrenheit) {
        const resultado = celsiusToFahrenheit(numero);
        respostaDiv.textContent = `${numero} °C é igual a ${resultado.toFixed(2)} °F`;
    } else if (fahrenheitCelsius) {
        const resultado = fahrenheitToCelsius(numero);
        respostaDiv.textContent = `${numero} °F é igual a ${resultado.toFixed(2)} °C`;
    } else {
        respostaDiv.textContent = 'Por favor, selecione o tipo de conversão.';
    }
}

function limparCampos() {
    document.getElementById('formTemperatura').reset();
    document.getElementById('resposta').textContent = '';
}
