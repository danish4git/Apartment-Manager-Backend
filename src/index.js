const express = require("express");
const connect = require("./configs/db");
const cors = require("cors");
const managerController = require("./controllers/manager.controller");
const flatController = require("./controllers/flat.controller");
// const residentController = require("./controllers/resident.controller");
const port = process.env.PORT || 3232;
const app = express();

app.use(cors());
app.use(express.json());

app.use("/manager", managerController);
app.use("/flat", flatController);
// app.use("/resident", residentController);

app.listen(port, async function () {
  await connect();

  console.log("listening to port:", port);
});
