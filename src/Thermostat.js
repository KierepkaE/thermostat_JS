"use strict";
const Thermostat = function() {
  this._temperature = 20;
  this._savingMode = true;
};

Thermostat.prototype.temperature = function() {
  return this._temperature;
};
Thermostat.prototype.up = function(number) {
  if (this._savingMode === true && this._temperature + number > 25) {
    throw new Error("maximum temperature on saving mode is 25 degrees");
    return;
  } else if (this._savingMode === false && this._temperature + number > 32) {
    throw new Error("maximum temperature not on saving mode is 32 degrees");
    return;
  }
  this._temperature += number;
};

Thermostat.prototype.savingMode = function(value) {
  this._savingMode = value;
};
Thermostat.prototype.down = function(number) {
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
