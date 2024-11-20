# Formula Calculator

## Overview
This formula calculator allows users to enter mathematical formulas using basic math operations such as addition, subtraction, multiplication, division, and exponentiation. The user can input formulas containing variables (e.g., `x`, `y`, etc.), dynamically adjust their values using text fields, and calculate the result in real-time.

## Features

### 1. **Formula Input & Display**
- The user can enter a mathematical formula using basic operations:
  - Addition (`+`)
  - Subtraction (`-`)
  - Multiplication (`*`)
  - Division (`/`)
  - Exponentiation (`^`)
- The calculator displays the **LaTeX** version of the formula above the input box in real-time.
- The LaTeX formula is updated dynamically as the user types.

### 2. **Variable Detection & Input Generation**
- The calculator detects variables (letters `a-z`, `A-Z`) within the formula.
- For each unique variable in the formula, a corresponding input field is generated dynamically:
  - **Text Inputs** for variables where the user can directly type a value.
- Users can adjust the values of these variables, and the formula is recalculated in real-time based on the adjusted values.

### 3. **Real-time Calculation**
- As the user enters values for the variables, the calculator computes the result of the formula in real-time.
- The result is displayed below the input box and updates immediately after any changes to the formula or variable values.

### 4. **Math Calculations (No External Libraries or `eval()`)**
- The formula calculator is implemented **without external libraries** for parsing or evaluating expressions. All logic for parsing and calculation is self-implemented.
- The calculator **does not** use `eval()` or other dangerous JavaScript functions to evaluate the formula. Instead, a custom parsing and evaluation engine is built to ensure safety and security.
- The calculator can handle **complex nested formulas** and respects the order of operations.
- The calculator can handle **basic mathematical functions** with single function only like `sin`, `cos`, `log`, etc.

#### Error Handling:
- The system detects invalid formulas (e.g., missing operators, mismatched parentheses) and provides error messages.
- Undefined variables are handled with appropriate error messages.
  
### 5. **Responsiveness & UI**
- The calculator UI is designed to be **responsive** and **user-friendly**. It ensures a seamless experience across various screen sizes, from mobile phones to desktops.
- The UI layout adjusts dynamically based on the screen size to optimize usability.
- All input fields, buttons, and displays are properly aligned and scaled for readability and ease of use.

#### UI Features:
- **Input Field**: A text input box for entering the formula.
- **Real-time Display**: The LaTeX version of the formula displayed above the input box.
- **Variable Inputs**: Text fields corresponding to the detected variables.
- **Result Display**: The calculated result is displayed below the input fields once the variables are entered.

#### Handling Invalid Inputs:
- Invalid formulas (e.g., unbalanced parentheses, unsupported operations) trigger error messages to guide users in correcting their inputs.
- The app also displays warnings if variables are not defined or if the user enters a formula with invalid characters.

### 6. **Additional Features (Optional)**
- **Save Formulas**: Users can save their formulas for future use. This is implemented using local storage.
  - **Save Formula**: A button to save the current formula and its variable values.
  - **Load Saved Formulas**: A feature to load saved formulas list.
- **Advanced Math Functions**: Users can evaluate basic mathematical functions such as trigonometric functions (`sin`, `cos`, `tan`), logarithmic functions (`log`), and other advanced mathematical operations.
  - Example: `sin(x)`, `log(x)`, `tan(x + y)` etc.
  - These complex functions are handled using the `math.js` library.

---

## Getting Started

### Prerequisites
To use the formula calculator, you'll need the following:
- A modern web browser.
- JavaScript enabled in your browser (most browsers support JavaScript by default).
- Basic understanding of mathematical operations and formulas.

### Installation & Setup

1. **Clone the Repository**:
   - If you're using Git, clone the repository:
     ```bash
     git clone https://github.com/mhkapoor/Formula-Calculator.git
     cd formula-calculator
     ```

2. **Install Dependencies**:
   - Install the necessary dependencies using `npm` or `yarn`:
     ```bash
     npm install
     ```

3. **Run the Application**:
   - Start the development server to launch the app in your browser:
     ```bash
     npm start
     ```

   - Visit `http://localhost:3000` in your browser to access the calculator.

### Usage

1. **Entering Formulas**: 
   - Simply type your formula in the input box (e.g., `x^2 + y^2` or `sin(x)`,`log(y)`).
   - The LaTeX version of the formula will be displayed above the input box in real-time.

2. **Adjusting Variable Values**:
   - If your formula contains variables (e.g., `x`, `y`), corresponding input fields will be generated.
   - Adjust the values of the variables and see the formula result update in real-time.

3. **View Result**: 
   - The result of the formula is displayed below the input fields once the variables are entered.

4. **Error Handling**:
   - If there is an error in your formula (e.g., missing operator, mismatched parentheses), an error message will be shown, guiding you on how to fix the formula.

---

## Contribution

If you'd like to contribute to this project, follow these steps:
1. Fork the repository.
2. Create a new branch for your feature (`git checkout -b feature-name`).
3. Commit your changes (`git commit -am 'Add feature'`).
4. Push your changes (`git push origin feature-name`).
5. Create a pull request.

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## Conclusion

This Formula Calculator allows users to easily input and calculate mathematical formulas, handle variables dynamically, and display real-time results. It includes basic and advanced mathematical operations, error handling, and responsive UI design. With additional features like saving formulas, syntax highlighting, and support for complex math functions, it is a robust tool for both casual and advanced users.