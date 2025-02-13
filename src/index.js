const express = require("express");
const messageRouter = require("./routers/messageRouter");
const whatsappClient = require("./services/WhatsappClient");

whatsappClient.initialize()

const app = express();

app.use(express.json());
app.use(messageRouter);

app.listen(8080, () => {
  console.log(`Server running on port 8080`);
});
