// const Session = require("../core/session");

class Auth {
  login = (req, res) => {
    //check thông tin ok => set session
    // const session = new Session(req, res);
    // session.put("email", "hoangan.web@gmail.com");

    // session.put("username", "hoangan.web");

    // console.log(session.get());

    // session.remove();

    // session.destroy();

    // console.log(req.session.get("username"));
    req.session.put("username", "hoangan.web@gmail.com");
    // req.session.destroy();

    res.end("Login");
  };
}

module.exports = new Auth();
