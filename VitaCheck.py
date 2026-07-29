#VitaCheck - BMI Calculator
#Author: Gabriela Franciscato


print("Welcome to VitaCheck")

# Get weight
while True:
    try:
        weight = float(input("Enter your weight (kg): "))

        if weight > 0 and weight <= 200:
            break
        else:
            print("Weight must be between 0 and 200 kg.")

    except ValueError:
        print("Invalid input. Please enter a number.")

# Get height
while True:
    try:
        height = float(input("Enter your height (m): "))

        if height > 0 and height <= 3:
            break
        else:
            print("Height must be between 0 and 3 metres.")

    except ValueError:
        print("Invalid input. Please enter a number.")

# Calculate BMI
bmi = weight / (height * height)

# Determine category
if bmi < 18.5:
    category = "Underweight"

elif bmi < 25:
    category = "Healthy Weight"

elif bmi < 30:
    category = "Overweight"

else:
    category = "Obese"

# Display result
print()
print("Your BMI is:", round(bmi, 2))
print("Category:", category)