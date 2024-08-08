// main.js
let selectedDose = 10;
let selectedStrength = 20;
let selectedWater = 0.5;

function selectDose(button, dose) {
    document.querySelectorAll('#dose-card .buttons button').forEach(btn => btn.classList.remove('selected'));
    button.classList.add('selected');
    if (dose === 'Other') {
        document.getElementById('dose-other-input').style.display = 'block';
    } else {
        document.getElementById('dose-other-input').style.display = 'none';
        selectedDose = dose;
        calculateResults();
    }
}

function selectStrength(button, strength) {
    document.querySelectorAll('#strength-card .buttons button').forEach(btn => btn.classList.remove('selected'));
    button.classList.add('selected');
    if (strength === 'Other') {
        document.getElementById('strength-other-input').style.display = 'block';
    } else {
        document.getElementById('strength-other-input').style.display = 'none';
        selectedStrength = strength;
        calculateResults();
    }
}

function selectWater(button, water) {
    document.querySelectorAll('#water-card .buttons button').forEach(btn => btn.classList.remove('selected'));
    button.classList.add('selected');
    if (water === 'Other') {
        document.getElementById('water-other-input').style.display = 'block';
    } else {
        document.getElementById('water-other-input').style.display = 'none';
        selectedWater = water;
        calculateResults();
    }
}

function setOtherDose(input) {
    selectedDose = parseFloat(input.value) || 0;
    calculateResults();
}

function setOtherStrength(input) {
    selectedStrength = parseFloat(input.value) || 0;
    calculateResults();
}

function setOtherWater(input) {
    selectedWater = parseFloat(input.value) || 0;
    calculateResults();
}

function calculateResults() {
    const maxDose = 15; // Adjust this value based on your maximum dose
    const concentration = selectedStrength / selectedWater;
    const syringeUnits = (selectedDose / concentration) * 100;
    const vialDoses = selectedStrength / selectedDose;

    document.getElementById('peptide-dose').innerText = `${selectedDose} mg`;
    document.getElementById('syringe-units').innerText = `${syringeUnits.toFixed(2)} units`;
    document.getElementById('vial-doses').innerText = `${vialDoses.toFixed(2)} doses`;
    document.getElementById('concentration').innerText = `${concentration.toFixed(2)} mg/mL`;

    // Update progress bar width based on peptide dose
    const progressBarWidth = (selectedDose / maxDose) * 100;
    const progressBar = document.getElementById('progress-bar');
    const errorMessage = document.getElementById('error-message');

    if (selectedDose > maxDose) {
        progressBar.style.width = '100%';
        errorMessage.innerText = 'Dose exceeds the maximum limit!';
        errorMessage.style.display = 'block'; // Make sure the error message is visible
    } else {
        progressBar.style.width = `${progressBarWidth}%`;
        errorMessage.innerText = '';
        errorMessage.style.display = 'none'; // Hide error message if within limit
    }
}

document.addEventListener('DOMContentLoaded', () => {
    calculateResults();
});
