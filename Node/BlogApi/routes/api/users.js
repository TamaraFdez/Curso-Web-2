const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const User = require("../../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");

/**
 * @route GET api/users
 * @acces Public
 */
// router.get("/", (req, res) => res.send("users router"));

/**
 * @desc Crea un usuario
 * @route POST api/users
 * @acces Public
 */
router.post(
  "/",
  [check("name", "El nombres es requerido").not().isEmpty()],
  [check("email", "Por favor inserte un Email válido").isEmail()],
  [
    check(
      "password",
      "La contraseña debe tener al menos 6 carácteres"
    ).isLength({ min: 6 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    console.log(errors);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { name, email, password } = req.body;
    //mirar si el usuario existe

    try {
      let user = await User.findOne({ email });

      if (user) {
        return res
          .status(400)
          .json({ errors: [{ msg: "El usuario ya existe" }] });
      }

      user = new User({
        name,
        email,
        password,
      });

      //encriptar el password
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, salt);

      console.log(user);

      //insertar el usuario en la db
      await user.save();
      const payload = {
        user: {
          id: user.id,
        },
      };
      jwt.sign(
        payload,
        config.get("jwtToken"),
        { expiresIn: 36000 },
        (err, token) => {
          if (err) throw err;
          //respodemos con el token de sesion
          res.status(201).json({ token });
        }
      );

    } catch (error) {
      res.status(500).send("server error");
    }
  }
);

module.exports = router;
