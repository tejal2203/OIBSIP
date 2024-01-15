const celciusEle = document.querySelector("#celcius");
const degree = document.querySelector("#degree");
const Btn = document.querySelector("#btn");
const tempType = document.querySelector("#temp-type");

window.addEventListener("load", () => {
	degree.value = "";
	celciusEle.innerHTML = "";
})

Btn.addEventListener("click", (e) => {
	e.preventDefault();
	convertToCelcius();
})

function convertToCelcius() {
	let inputValue = degree.value;

	if(tempType.value === "fahrenheit") 
	{
		const FahrenheitToCelsius = inputValue * (9/5) + 32;
		celciusEle.innerHTML = `${FahrenheitToCelsius.toFixed(3)} &deg;c`;
	}
	else if(tempType.value === "kelvin")
	{
		const KelvinToCelcius = inputValue - 273.15;
		celciusEle.innerHTML = `${KelvinToCelcius.toFixed(3)} &deg;c`;
	}
}


