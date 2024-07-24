let selectedDose = 10;
let selectedStrength = 20;
let selectedWater = 0.5;

function selectDose(button, dose) {
    document.querySelectorAll('#dose-card .buttons button').forEach(btn => btn.classList.remove('selected'));
    button.classList.add('selected');
    selectedDose = dose;
    calculateResults();
}

function selectStrength(button, strength) {
    document.querySelectorAll('#strength-card .buttons button').forEach(btn => btn.classList.remove('selected'));
    button.classList.add('selected');
    selectedStrength = strength;
    calculateResults();
}

function selectWater(button, water) {
    document.querySelectorAll('#water-card .buttons button').forEach(btn => btn.classList.remove('selected'));
    button.classList.add('selected');
    selectedWater = water;
    calculateResults();
}

function calculateResults() {
    const concentration = selectedStrength / selectedWater;
    const syringeUnits = (selectedDose / concentration) * 100;
    const vialDoses = selectedStrength / selectedDose;

    document.getElementById('peptide-dose').innerText = `${selectedDose} mg`;
    document.getElementById('syringe-units').innerText = `${syringeUnits.toFixed(2)} units`;
    document.getElementById('vial-doses').innerText = `${vialDoses.toFixed(2)} doses`;
    document.getElementById('concentration').innerText = `${concentration.toFixed(2)} mg/mL`;
    
    // Update progress bar width based on peptide dose
    const maxDose = 15; // Adjust this value based on your maximum dose
    const progressBarWidth = (selectedDose / maxDose) * 100;
    document.getElementById('progress-bar').style.width = `${progressBarWidth}%`;
}

document.addEventListener('DOMContentLoaded', () => {
    calculateResults();
});
