const calculate = require("../module/calculate");

test("Divisores e Divisores primos do número", () => {
  const result = calculate.calcularDivisoresPrimos(45);
  expect(result).toEqual({
    divisores: [1, 3, 5, 9, 15, 45],
    primos: [1, 3, 5],
  });
});

test("Erro de input", () => {
  try {
    expect(calculate.calcularDivisoresPrimos(-1));
  } catch (error) {
    expect(error).toEqual("Entrada inválida, favor informar um número válido!");
  }
});
