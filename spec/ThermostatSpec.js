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
  it("on saving mode max temp is 25 degrees", () => {
    thermostat.savingMode(true);
    expect(() => {
      thermostat.up(15);
    }).toThrowError("maximum temperature on saving mode is 25 degrees");
  });
  it("when not on saving mode max temp is 32 degrees", () => {
    thermostat.savingMode(false);
    expect(() => {
      thermostat.up(20);
    }).toThrowError("maximum temperature not on saving mode is 32 degrees");
  });
  it("has an power mode on as a default", () => {
    expect(thermostat.savingMode).toBeTruthy();
  });
});
