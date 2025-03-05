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

  it("debería convertir 50 a 'L'", () => {
    expect(convertirARomano(50)).toEqual("L");
  });

  it("debería convertir 90 a 'XC'", () => {
    expect(convertirARomano(90)).toEqual("XC");
  });

  it("debería convertir 100 a 'C'", () => {
    expect(convertirARomano(100)).toEqual("C");
  });

  it("debería convertir 400 a 'CD'", () => {
    expect(convertirARomano(400)).toEqual("CD");
  });

  it("debería convertir 500 a 'D'", () => {
    expect(convertirARomano(500)).toEqual("D");
  });

  it("debería convertir 900 a 'CM'", () => {
    expect(convertirARomano(900)).toEqual("CM");
  });

  it("debería convertir 1000 a 'M'", () => {
    expect(convertirARomano(1000)).toEqual("M");
  });
});