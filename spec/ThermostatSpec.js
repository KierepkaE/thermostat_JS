describe("Thermostat", function() {
  let thermostat;
  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it("has and default temperature at 20 degrees", () => {
    expect(thermostat.temperature()).toEqual(20);
  });
});
