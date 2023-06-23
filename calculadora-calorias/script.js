function calculate() {
	// Obtener los valores del formulario
	var gender = document.getElementById("gender").value;
	var weight = document.getElementById("weight").value;
	var height = document.getElementById("height").value;
	var age = document.getElementById("age").value;
	var activity_level = document.getElementById("activity_level").value;
	var goal = document.getElementById("goal").value;

	// Calcular la tasa metabólica basal (BMR)
	var bmr;
	if (gender === "male") {
		bmr = 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age);
	} else {
		bmr = 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);
	}

	// Multiplicar la BMR por el nivel de actividad y el factor de objetivo
	var factor;
	if (activity_level === "1.2") {
		factor = 1.2;
	} else if (activity_level === "1.375") {
		factor = 1.375;
	} else if (activity_level === "1.55") {
		factor = 1.55;
	} else if (activity_level === "1.725") {
		factor = 1.725;
	} else {
		factor = 1.9;
	}

	if (goal === "maintain") {
		// Mantener el mismo peso
		var calories = bmr * factor;
		var result = "Necesitas consumir " + calories.toFixed(0) + " calorías diarias para mantener tu peso actual.";
	} else if (goal === "lose") {
		// Perder peso
		var calories = bmr * factor - 500;
		var result = "Necesitas consumir " + calories.toFixed(0) + " calorías diarias para perder 0.5 kg por semana.";
	} else {
		// Ganar peso
		var calories = bmr * factor + 500;
		var result = "Necesitas consumir " + calories.toFixed(0) + " calorías diarias para ganar 0.5 kg por semana.";
	}

	// Mostrar el resultado en la página
	document.getElementById("result").innerHTML = result;
}