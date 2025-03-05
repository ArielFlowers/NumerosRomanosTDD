import fizzbuzz from "./fizzbuzz.js";

describe("FizzBuzz", () => {
    it("debería devolver 'fizz' si el número es 3 o múltiplo de 3", () => {
      expect(fizzbuzz(3)).toEqual("fizz");
    });
  
    it("debería devolver 'buzz' si el número es 5 o múltiplo de 5", () => {
      expect(fizzbuzz(5)).toEqual("buzz");
    });
  
    it("debería devolver 'fizz buzz' si el número es múltiplo de 3 y 5", () => {
      expect(fizzbuzz(30)).toEqual("fizz buzz");
    });
  
    it("debería devolver el mismo número si no es múltiplo de 3 ni de 5", () => {
      expect(fizzbuzz(73)).toEqual(73);
    });
});
  