const http = require("http");
const url = require("url");
const auth = require("./modules/auth");
const Session = require("./core/session");

const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
  const session = new Session(req, res);
  session.start();

  req.session = {
    get: session.get,
    put: session.put,
    remove: session.remove,
    destroy: session.destroy,
  };

  res.statusCode = 200;
  const pathname = url.parse(req.url).pathname;

  if (pathname === "/login") {
    auth.login(req, res);
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
