"use strict";
const Thermostat = function() {
  this._temperature = 20;
  this._savingMode = true;
};

Thermostat.prototype.temperature = function() {
  return this._temperature;
};
Thermostat.prototype.up = function(number = 1) {
  if (this._savingMode === true && this._temperature + number > 25) {
    throw new Error("maximum temperature on saving mode is 25 degrees");
    return;
  } else if (this._savingMode === false && this._temperature + number > 32) {
    throw new Error("maximum temperature not on saving mode is 32 degrees");
    return;
  }
  this._temperature += number;
};

Thermostat.prototype.savingMode = function() {
  return this._savingMode;
};
Thermostat.prototype.savingModeOn = function() {
  this._savingMode = true;
};
Thermostat.prototype.savingModeOff = function() {
  this._savingMode = false;
};
Thermostat.prototype.down = function(number = 1) {
  if (this._temperature - number < 10) {
    throw new Error("minimum temperature is 10 degrees");
  }
  this._temperature -= number;
};
Thermostat.prototype.reset = function() {
  this._temperature = 20;
};
Thermostat.prototype.usage = function() {
  if (this._temperature < 18) {
    return "low-usage";
  } else if (this._temperature < 25) {
    return "medium-usage";
  } else {
    return "high-usage";
  }
};

let thermostat = new Thermostat();

const addBtn = document.getElementById("up");
const downBtn = document.getElementById("down");
const usageBtn = document.getElementById("usage");
const displayTemperature = document.getElementById("temperature");
const displayUsage = document.getElementById("usage_display");

displayTemperature.textContent = thermostat.temperature();
addBtn.addEventListener("click", () => {
  thermostat.up(1);
  displayTemperature.textContent = thermostat.temperature();
});
downBtn.addEventListener("click", () => {
  thermostat.down(1);
  displayTemperature.textContent = thermostat.temperature();
});
usageBtn.addEventListener("click", () => {
  displayUsage.textContent = thermostat.usage();
});
