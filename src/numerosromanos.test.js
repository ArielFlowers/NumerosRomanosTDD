import convertirARomano from "./numerosromanos.js";

describe("Conversión a números romanos", () => {
  it("debería convertir 1 a 'I'", () => {
    expect(convertirARomano(1)).toEqual("I");
  });

  it("debería convertir 4 a 'IV'", () => {
    expect(convertirARomano(4)).toEqual("IV");
  });

  it("debería convertir 9 a 'IX'", () => {
    expect(convertirARomano(9)).toEqual("IX");
  });

  it("debería convertir 10 a 'X'", () => {
    expect(convertirARomano(10)).toEqual("X");
  });

  it("debería convertir 40 a 'XL'", () => {
    expect(convertirARomano(40)).toEqual("XL");
  });

});