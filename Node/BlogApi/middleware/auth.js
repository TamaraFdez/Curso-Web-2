const jwt = require("jsonwebtoken");
const config = require("config");

module.exports = function (req, res, next) {
  //recogemos el token de la cabecera
  const token = req.header("x-auth-token");
  if (!token) {
    return res
      .status(401)
      .json({ msg: "No hay token, no tienees autorización" });
  }

  //verificar el token
  try {
    const decode = jwt.verify(token, config.get("jwtToken"));
    req.user = decode.user;
    next();//ejecutamos el siguiente callback
  } catch (error) {
    return res.status(401).json({ msg: "Token no válido" });
  }
};
