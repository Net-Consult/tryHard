describe("Variables", () => {
  nom = "Pierre";

  it("Variables - 1", () => {
    nom = "Thierry";
    expect(nom).toBe("Thierry");
    expect(window.nom).toBe("Thierry");
  });

  age = 6;

  it("Variables - 2", () => {
    const age = 4;
    window.age = 6
    expect(age).toBe(4);
    expect(window.age).toBe(6);
  });

  it("Variables - 3", () => {
    expect(company).toBe(undefined);
    var company = "sfeir";
  });

  it("Variables - 4", () => {
    var i, j;

    for (var i = 0; i < 1; i++) {}
    expect(i).toBe(1);

    for (let j = 0; j < 1; j++) {}
    expect(j).toBe(undefined);
  });
});
