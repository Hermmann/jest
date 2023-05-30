function suma(a, b) {
  return a + b;
}

describe("funcion suma", () => {
  describe("numeros enteros", () => {
    test("enteros positivos", () => {
      const resultado = suma(2, 3);
      expect(resultado).toBe(5);
    });
    test("enteros negativos", () => {
      const resultado = suma(-2, -3);
      expect(resultado).toBe(-5);
    });
    test("enteros + y -", () => {
      const resultado = suma(2, -3);
      expect(resultado).toBe(-1);
    });
  });

  describe("numeros decimales", () => {
    test("decimales positivos", () => {
      const resultado = suma(2, 3);
      expect(resultado).toBe(5);
    });
    test("decimales negativos", () => {
      const resultado = suma(-2, -3);
      expect(resultado).toBe(-5);
    });
    test("decimal + y -", () => {
      const resultado = suma(2, -3);
      expect(resultado).toBe(-1);
    });
  });
});
