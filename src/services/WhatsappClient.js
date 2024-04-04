const { Client, LocalAuth } = require("whatsapp-web.js");
const qrcode = require("qrcode-terminal");

const whatsappClient = new Client({
    authStrategy: new LocalAuth({
    dataPath: "sessions",
    }),
    webVersionCache: {
    type: 'remote',
    remotePath: 'https://raw.githubusercontent.com/wppconnect-team/wa-version/main/html/2.2412.54.html',
    }
    });

whatsappClient.on("ready", () => console.log("Client is ready!"));

whatsappClient.on("qr", (qr) => {
  qrcode.generate(qr, { small: true });
});

whatsappClient.on("message", async (msg) => {
  try {
    if (msg.from != "status@broadcast") {
      const contact = await msg.getContact();
      console.log(contact.number, msg.body);
    }
  } catch (err) {
    console.log(err);
  }
});


// Listening to all incoming messages
whatsappClient.on('message_create', message => {
	console.log(message.body);
});


module.exports = whatsappClient;
