const express = require("express");
const { calcularDivisoresPrimos } = require("../module/calculate");

const routes = express.Router();

routes.get("/calcularDivisoresPrimos/:numero", (req, res) => {
  const numero = Number(req.params.numero);

  try {
    return res.status(200).json(calcularDivisoresPrimos(numero));
  } catch (error) {
    return res.status(400).json({ message: error.toString() });
  }
});

routes.get("/", (_, res) => {
  return res.status(200).json({
    message: "OK",
  });
});

module.exports = routes;
