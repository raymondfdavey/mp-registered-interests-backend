// require("dotenv").config();
const app = require("./app");
const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`MP REG istening at http://localhost:${port}`);
});
