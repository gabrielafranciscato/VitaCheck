function calculateBMI() {
    const weight = parseFloat(
        document.getElementById("weight").value
    );

    const height = parseFloat(
        document.getElementById("height").value
    );

    const result = document.getElementById("result");

    if (isNaN(weight) || isNaN(height)) {
        showError("Please enter your weight and height.");
        return;
    }

    if (weight <= 0 || weight > 200) {
        showError("Weight must be between 0 and 200 kg.");
        return;
    }

    // Height is entered in centimetres
    if (height <= 0 || height > 300) {
        showError("Height must be between 0 and 300 centimetres.");
        return;
    }

    // Convert centimetres to metres
    const heightInMetres = height / 100;

    // Calculate BMI
    const bmi = weight / (heightInMetres * heightInMetres);

    let category;

    if (bmi < 18.5) {
        category = "Underweight";
    } else if (bmi < 25) {
        category = "Healthy Weight";
    } else if (bmi < 30) {
        category = "Overweight";
    } else {
        category = "Obese";
    }

    result.className = "success";

    result.innerHTML =
        `Your BMI is ${bmi.toFixed(2)}.<br>
        Category: ${category}`;
}

function showError(message) {
    const result = document.getElementById("result");

    result.className = "error";
    result.textContent = message;
}