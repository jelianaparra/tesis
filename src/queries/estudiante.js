const { PreparedStatement: PS } = require("pg-promise");
const queries = {
  /*getEstudiante: new PS({
    name: "getEstudiante",
    text: `SELECT * FROM users;`,
  }),
  getEstudianteById: new PS({
    name: "getEstudianteById",
    text: `SELECT * FROM  WHERE u_id = $1;`,
  }),
  updateUser: new PS({
    name: "updateUser",
    text: `
        UPDATE users SET
            u_email = $1,
            u_name = $2
        WHERE u_id = $3;`,
  }),*/
  getEstudianteByEmail: new PS({
    name: "getEstudianteByEmail",
    text: `SELECT * FROM usuario WHERE em_usuario = $1;`,
  }),
  getEstudianteByEmailDistinctId: new PS({
    name: "getEstudianteByEmailDistinctId",
    text: `SELECT * FROM usuario WHERE em_usuario = $1 AND id_usuario != $2;`,
  }),
  insertUsuario: new PS({
    name: "insertUsuario",
    text: `
        INSERT INTO usuario(
            em_usuario, 
            cl_usuario, 
            id_persona     
        )
        VALUES($1, $2, $3)`,
  }),
  insertPersona: new PS({
    name: "insertPersona",
    text: `
        INSERT INTO usuario(
            em_persona, 
            no_persona,
            ap_persona,
            ci_persona     
        )
        VALUES($1, $2, $3)`,
  }),
  insertTipoUsuario: new PS({
    name: "insertTipoUsuario",
    text: `
        INSERT INTO tipo_usuario(
            de_tipo_usuario, 
            id_usuario, 
            id_perfil,    
        )
        VALUES($1, $2, $3)`,
  }),
};

module.exports = queries;
