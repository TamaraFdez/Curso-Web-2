const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const Post = require("../../models/Post");
const User = require("../../models/User");
const auth = require("../../middleware/auth");

/**
 * @route GET api/post
 * @acces Public
 */
// router.get("/", (req, res) => res.send("post router"));

/*
get /api/posts-> todos los posts

-El usuario debe estar loggeado para crear, editar o eliminar
 */
router.get("/", async (req, res) => {
  try {
    let message = "Post encontrados";
    let posts = await Post.find({});
    console.log(posts); // puede tener posts o un array vacío
    if (!posts.length) {
      message = "No existen posts";
    }
    return res.status(200).json({
      message,
      posts,
    });
  } catch (err) {
    console.error(err);
    let message = "Error en la consulta";
    return res.status(500).json({
      message,
    });
  }
});

//get /api/{id} -> un post por id
router.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    let post = await Post.findById({ _id: id });
    if (!post) {
      res.status(404).json({ message: "No existe el post" });
    }
    res.status(200).json({post})
  } catch (err) {
    res.status(500).send("server error");
  }
});

//POST /api/posts -> crear un post

router.post(
  "/",
  [check("body", "El post no puede estar vacio").not().isEmpty()],
  auth,
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { title, body } = req.body;
    //mirar si el usuario existe

    try {
      let user = req.user.id;
      if (!user) {
        return res
          .status(400)
          .json({ errors: [{ msg: "El usuario no es válido" }] });
      }
      post = new Post({
        user,
        title,
        body,
      });

      //insertar post en la db
      await post.save();
      res.status(201).json({ post });
    } catch (error) {
      res.status(500).send("server error");
    }
  }
);

//PUT /api/posts/{id} -> actualizar un post
router.put("/:id",[check("body", "El post no puede estar vacio").not().isEmpty()], auth, async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const id = req.params.id
  const { title, body } = req.body;

  try {
    let post = await Post.findById({ _id: id });
    if (!post) {
      return res.json("Post esta vacio");
    }
    if (!req.user.id === post.user.toString()) {
      return res.status(400).json("User id y post user id no son iguales");
    }
    let postUpdate = await Post.findOneAndUpdate(
      { _id: id },
      { title: title, body: body },
      {
        new: true,
      }
    );
    res.status(201).json(postUpdate);
  } catch (err) {
    console.log(err);
    res.json({ msg: "error" });
  }
});
//Delete /api/delete/{id} -> elimina un post
router.delete("/:id", auth, async (req, res) => {

  const id = req.params.id

  try {
    let post = await Post.findById({ _id: id });
    if (!post) {
      return res.json("Post esta vacio");
    }
    if (!req.user.id === post.user.toString()) {
      return res.status(400).json("User id y post user id no son iguales");
    }
    let postDelete = await Post.findOneAndDelete({ _id: id });
    res.status(201).json("Borrado con exito");
  } catch (err) {
    console.log(err);
    res.json({ msg: "error" });
  }
});

module.exports = router;
