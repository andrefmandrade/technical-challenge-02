const supertest = require("supertest");
const app = require("..");

describe("Testando rotas do calculo de divisores e primos", () => {
  it("GET /calcularDivisoresPrimos/45 - Deve retornar statusCode 200", async () => {
    const response = await supertest(app).get("/calcularDivisoresPrimos/45");

    expect(response.statusCode).toEqual(200);
    expect(response.body).toEqual({
      divisores: [1, 3, 5, 9, 15, 45],
      primos: [1, 3, 5],
    });
  });

  it("GET /calcularDivisoresPrimos/0.1 - Deve retornar statusCode 400", async () => {
    const response = await supertest(app).get("/calcularDivisoresPrimos/0.1");

    expect(response.statusCode).toEqual(400);
    expect(response.body.message).toEqual(
      "Entrada inválida, favor informar um número válido!"
    );
  });
});

test("GET / - Deve retornar statusCode 200", async () => {
  const response = await supertest(app).get("/");

  expect(response.statusCode).toEqual(200);
  expect(response.body.message).toEqual("OK");
});
