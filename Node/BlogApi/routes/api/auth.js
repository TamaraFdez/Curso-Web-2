const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");
const User = require("../../models/User");
const { check, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");
/**
 *
 * @route GET api/auth
 * @acces Public
 */
router.get("/", auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("name email");
    res.json(user);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});

/**
 * @desc Verificar las credenciales
 * @route GET api/auth
 * @acces Public
 */

router.post(
  "/",

  [check("email", "Se requiere un Email").isEmail()],
  [check("password", "Se requiere una contraseña").exists()],
  async (req, res) => {
    const errors = validationResult(req);
    console.log(errors);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    //mirar si el email existe
    const { email, password } = req.body;
    try {
      let user = await User.findOne({ email });
      if (!user) {
        return res
          .status(400)
          .json({ errors: [{ msg: "Credenciales incorrectas" }] });
      }
      //mirar si coincide la contraseña
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res
          .status(400)
          .json({ errors: [{ msg: "Credenciales incorrectas" }] });
      }
      //el usuario esta autorizado
      const payload = {
        user: {
          id: user.id,
        },
      };
      jwt.sign(
        payload,
        config.get("jwtToken"),
        { expiresIn: 3000 },
        (err, token) => {
          if (err) throw err;
          //respodemos con el token de sesion
          res.status(201).json({ token });
        }
      );

    } catch (error) {
      console.log(error);
    }

  }
);

module.exports = router;
