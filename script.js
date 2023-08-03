"use strict";

let calculation = "";
const screen = document.getElementById("screen");

function appendToScreen(value) {
  calculation += value;
  updateScreen();
}

function clearScreen() {
  calculation = "";
  updateScreen();
}

function calculateResult() {
  try {
    const result = eval(calculation);
    calculation = result.toString();
    updateScreen();
  } catch (error) {
    calculation = "Error";
    updateScreen();
  }
}

function updateScreen() {
  screen.textContent = calculation;
}
