const form = document.querySelector('form');
const results = document.querySelector('#results');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);

    if (height === '' || height < 0 || isNaN(height)) {
        results.innerHTML = 'Please give a valid height';
    } else if (weight === '' || weight < 0 || isNaN(weight)) {
        results.innerHTML = 'Please give a valid weight';
    } else {
        const BMI = (weight / ((height * height) / 10000)).toFixed(2);
        let category;

        if (BMI < 18.6) {
            category = 'Under Weight';
        } else if (BMI >= 18.6 && BMI <= 24.9) {
            category = 'Normal Range';
        } else {
            category = 'Over Weight';
        }

        results.innerHTML = `<span>BMI: ${BMI}</span><br><span>Category: ${category}</span>`;
    }
});
