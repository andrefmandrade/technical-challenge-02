const express = require("express");
const routes = require("./shared/routes");
const app = express();
app.use(express.json());

app.use(routes);

if (require.main === module) {
  const serverPort = process.env.PORT || 4000;
  app.listen(serverPort, () => {
    console.log("Server running in port " + serverPort);
  });
}

module.exports = app;
