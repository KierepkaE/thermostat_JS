describe("Thermostat", function() {
  let thermostat;
  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it("has and default temperature at 20 degrees", () => {
    expect(thermostat.temperature()).toEqual(20);
  });
  it("it can increse temperature", () => {
    thermostat.up(5);
    expect(thermostat.temperature()).toEqual(25);
  });
  it("it can decrese temperature", () => {
    thermostat.down(5);
    expect(thermostat.temperature()).toEqual(15);
  });
  it("doesnt allow to change temperature to lower than 10 degrees", () => {
    expect(() => {
      thermostat.down(15);
    }).toThrowError("minimum temperature is 10 degrees");
  });
});
