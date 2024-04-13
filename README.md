# Tax Calculator

This is a simple tax calculator web application that helps users estimate their overall income tax based on their gross annual income, extra income, age group, and deductions. The application follows specific tax rules and guidelines outlined below:

## References & Requirements

- **Tax Calculation Formula**: 
    - Overall income (after deductions) under 8 (≤) Lakhs is not taxed.
    - Income over 8 (>) Lakhs is taxed based on age groups:
        - 30% for people with age < 40
        - 40% for people with age ≥ 40 but < 60
        - 10% for people with age ≥ 60

### Features

- **Error Handling**: 
    - The application does not restrict users from entering incorrect values like characters in number fields.
    - Error icons are displayed to the right of the input field when incorrect values are entered. Hovering over the icon shows an error tooltip.
    - Error icons are only visible if errors are present in the input fields.

- **Age Dropdown Field**:
    - The age dropdown field provides three values:
        - <40
        - ≥ 40 & < 60
        - ≥ 60
    - If the user has not selected an age group and clicks on submit, an error icon is displayed, indicating that the input field is mandatory.

- **Modal Display**:
    - Upon clicking the submit button, a modal is displayed showing the final tax calculation based on the provided inputs.

## Usage

1. Enter your gross annual income, extra income, age group, and deductions in the respective input fields.
2. Ensure all inputs are valid numeric values.
3. Select your age group from the dropdown menu.
4. Click on the submit button to view the tax calculation result in a modal.

## Installation

- Clone the repository to your local machine.
- Open the `fyle.html` file in your web browser.
