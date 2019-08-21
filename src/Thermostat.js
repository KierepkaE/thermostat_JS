let Thermostat = function() {
  this._temperature = 20;
};

Thermostat.prototype.temperature = function() {
  return this._temperature;
};
Thermostat.prototype.up = function(number) {
  this._temperature += number;
};
Thermostat.prototype.down = function(number) {
  if (this._temperature - number < 10) {
    throw new Error("minimum temperature is 10 degrees");
  }
  this._temperature -= number;
};
