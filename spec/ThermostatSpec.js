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
});
