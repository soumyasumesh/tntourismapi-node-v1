const express = require("express");
const app = express();

const db = require("./src/config/db");
const homeRouter = require('./src/routes/home');

(async () => {
  try {
    await db.sequelize.authenticate();
    app.use(express.json());
    app.use('/api/home', homeRouter);

    app.get("/", (req, res) => {
      res.send("TN Home page");
    });
  } catch (error) {
    console.log(`Database connection error ${error}`);
  }
})();

app.listen(4000, () => {
  console.log("Server listening to port 4000");
});
