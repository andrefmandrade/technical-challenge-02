## Descrição

A api foi estruturada utilizando o framework [Express](https://expressjs.com/) que é utilizado para a construção de aplicações web do [Node.js](http://nodejs.org).

## Instalando & rodando a aplicação

## Utilize a [Collection](Insomnia_2022-01-23.json) fornecida e siga os passos abaixo.

```bash
$ docker-compose up -d # para subir o container

# O arquivo .env foi exposto no repositório somente a nível de facilitar o teste da aplicação, em uma aplicação no mundo real criaríamos um .env-example
```

## Como rodar a aplicação

```bash
- Primeiro passo # verificar se a aplicação está rodando
GET - http://localhost:4000/

# Curl exemplo

curl --request GET \
  --url http://localhost:4000/

- Segundo passo # realizar a utilização do serviço (sendo que 45 é um parâmetro mutável, podendo assim realizar a operação com qualquer valor numérico inteiro positivo)
GET - http://localhost:4000/calcularDivisoresPrimos/45

# Curl exemplo

curl --request GET \
  --url http://localhost:4000/calcularDivisoresPrimos/45

```

## Como rodar os testes da aplicação

```bash
yarn test | npm run test
```
