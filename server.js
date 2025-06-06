

const { createServer } = require("http");
const { parse } = require("url");
const next = require("next");
const nodemailer = require("nodemailer");

const dev = process.env.NODE_ENV !== "production";
const hostname = "localhost";
const port = 3000;
const app = next({ dev, hostname, port });
const handle = app.getRequestHandler();



app.prepare().then(() => {
  createServer(async (req, res) => {
    try {
      const parsedUrl = parse(req.url, true);
      const { pathname } = parsedUrl;
      if (pathname === "/api/send-email" && req.method === "POST") {
        let body = "";
        req.on("data", chunk => {
          body += chunk;
        });
        req.on("end", async () => {
          try {
            const { name, email, message } = JSON.parse(body);

            if (!name || !email || !message) {
              res.statusCode = 400;
              res.end(JSON.stringify({ error: "Заполните все поля" }));
              return;
            }

            // Создаём транспортер nodemailer
            const transporter = nodemailer.createTransport({
              host: "live.smtp.mailtrap.io",
              port: 587,
              secure: false,
              auth: {
                user: "1a2b3c4d5e6f7g",
                pass: "1a2b3c4d5e6f7g",
              },
            });
            const mailOptions = {
              from: email,
              to: "eiiikerenew@gmail.com",
              subject: `Новое сообщение от ${name}`,
              text: message,
            };

            await transporter.sendMail(mailOptions);

            res.statusCode = 200;
            res.setHeader("Content-Type", "application/json");
            res.end(JSON.stringify({ message: "Письмо отправлено" }));
          } catch (error) {
            console.error(error);
            res.statusCode = 500;
            res.end(JSON.stringify({ error: "Ошибка при отправке письма" }));
          }
        });
      } else if (pathname === "/a") {
        await app.render(req, res, "/a", parsedUrl.query);
      } else if (pathname === "/b") {
        await app.render(req, res, "/b", parsedUrl.query);
      } else {
        await handle(req, res, parsedUrl);
      }
    } catch (err) {
      console.error("Error occurred handling", req.url, err);
      res.statusCode = 500;
      res.end("internal server error");
    }
  })
    .once("error", err => {
      console.error(err);
      process.exit(1);
    })
    .listen(port, () => {
      console.log(`> Ready on http://${hostname}:${port}`);
    });
});


