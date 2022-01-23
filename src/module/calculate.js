const { divisores, primos } = require("../shared/utils");

function calcularDivisoresPrimos(numero) {
  if (Number.isNaN(numero) || numero <= 0 || !Number.isInteger(numero)) {
    throw "Entrada inválida, favor informar um número válido!";
  }

  const todosDivisores = divisores(numero);
  const todosPrimos = primos(todosDivisores);

  return { divisores: todosDivisores, primos: todosPrimos };
}

module.exports = { calcularDivisoresPrimos };
