const attribuer = require("Attribuer.model.js")
module.exports = (sequelize, Sequelize) => {
    const Poste = sequelize.define("poste", {
      nom: {
        type: Sequelize.STRING
      }
    });
    
    Poste.hasMany(attribuer)
    return Poste;
  };
