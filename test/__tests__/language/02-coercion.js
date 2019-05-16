describe("Coercion", () => {
  it("Coercion - 1", () => {
    expect(3 + 7 === 10).toBe(true);
  });

  it("Coercion - 2", () => {
    expect(3 + 7 == "10").toBe(true);
  });

  it("Coercion - 3", () => {
    expect(1 == true).toBe(true);
  });

  it("Coercion - 5", () => {
    expect("3" + 7 == "37").toBe(true);
  });


  it("Coercion - 9", () => {
    expect(+"3" + +"7" == "37").toBe(false);
  });

  it("Coercion - 10", () => {
    expect("3" + "7" == 37).toBe(true);
  });
});
