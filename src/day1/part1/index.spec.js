var countDepthIncreases = require(".");

describe("Day 1: Sonar Sweep - Part I", () => {
  it("countDepthIncreases should return number of increases in input", () => {
    const input = `
      199
      200
      208
      210
      200
      207
      240
      269
      260
      263
    `;
    expect(countDepthIncreases(input)).toEqual(7);
  });

  it("countDepthIncreases should return zero for empty input", () => {
    expect(countDepthIncreases()).toEqual(0);
  });

  it("countDepthIncreases should throw error if input contains non-numeric values", () => {
    const input = `
      123
      abc
      435
    `;
    expect(() => countDepthIncreases(input)).toThrow(
      new Error(`Invalid input! Make sure it doesn't contain non-numeric values.`),
    );
  });
});
