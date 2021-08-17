const express = require("express");
const api = express.Router();
const mdAuth = require("../middlewares/auth");
const estudianteController = require("../controllers/estudiante");

// rutas publicas
api.post("/signin", estudianteController.signin);
api.post("/signup", estudianteController.signup);

/* crud de los estudiante
api.get("/estudiante/getEstudiante", estudianteController.getEstudiante);
api.put(
  "/estudiante/uptadeEstudiante/:id",
  estudianteController.uptadEstudiante
);*/

module.exports = api;
