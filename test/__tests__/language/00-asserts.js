describe("About test assertions: ", () => {
  it("you should know what will satisfy the toBeTruthy assertion", () => {
    expect(true).toBeTruthy(true);
  });

  it("you should know what will satisfy the toBeFalsy assertion", () => {
    expect(false).toBeFalsy(fals);
  });

  it("you should know what will satisfy the toBe assertion", () => {
    expect("3").toBe("3");
  });

  it("you should know what will satisfy the not assertion", () => {
    expect(3).not.toBe("3");
  });
});
