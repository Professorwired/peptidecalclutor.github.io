let selectedDose = 10;
let selectedStrength = 20;
let selectedWater = 0.5;

function selectDose(button, dose) {
    setActiveButton(button);
    if (dose === 'Other') {
        document.getElementById('dose-other-input').style.display = 'block';
        selectedDose = 0;
    } else {
        document.getElementById('dose-other-input').style.display = 'none';
        selectedDose = dose;
    }
    calculateResults();
}

function setOtherDose(input) {
    selectedDose = parseFloat(input.value);
    calculateResults();
}

function selectStrength(button, strength) {
    setActiveButton(button);
    if (strength === 'Other') {
        document.getElementById('strength-other-input').style.display = 'block';
        selectedStrength = 0;
    } else {
        document.getElementById('strength-other-input').style.display = 'none';
        selectedStrength = strength;
    }
    calculateResults();
}

function setOtherStrength(input) {
    selectedStrength = parseFloat(input.value);
    calculateResults();
}

function selectWater(button, water) {
    setActiveButton(button);
    if (water === 'Other') {
        document.getElementById('water-other-input').style.display = 'block';
        selectedWater = 0;
    } else {
        document.getElementById('water-other-input').style.display = 'none';
        selectedWater = water;
    }
    calculateResults();
}

function setOtherWater(input) {
    selectedWater = parseFloat(input.value);
    calculateResults();
}

function setActiveButton(button) {
    const buttons = button.parentElement.querySelectorAll('button');
    buttons.forEach(btn => btn.classList.remove('selected'));
    button.classList.add('selected');
}

function calculateResults() {
    if (selectedDose > 0 && selectedStrength > 0 && selectedWater > 0) {
        const concentration = selectedStrength / selectedWater;
        const syringeUnits = (selectedDose / concentration) * 100;
        const vialDoses = selectedStrength / selectedDose;

        document.getElementById('peptide-dose').textContent = `${selectedDose} mg`;
        document.getElementById('syringe-units').textContent = `${Math.round(syringeUnits)} units`;
        document.getElementById('progress-bar').style.width = `${Math.min(syringeUnits, 100)}%`;
        document.getElementById('vial-doses').textContent = `${vialDoses.toFixed(2)} doses`;
        document.getElementById('concentration').textContent = `${concentration.toFixed(2)} mg/mL`;

        document.getElementById('error-message').style.display = 'none';
    } else {
        document.getElementById('error-message').style.display = 'block';
        document.getElementById('error-message').textContent = 'Please enter valid values for dose, strength, and water.';
    }
}

document.addEventListener("DOMContentLoaded", calculateResults);
