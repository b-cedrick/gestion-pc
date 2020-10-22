const client = require("Client.model.js");
const poste = require("Poste.model.js")
module.exports = (sequelize, Sequelize) => {
    const Attribuer = sequelize.define("attribuer", {
      date: {
        type: Sequelize.STRING
      },
      horaire: {
        type: Sequelize.STRING
      }
    });
    Attribuer.belongsTo(client, {
        foreignkey: "id_client",
        as: "id_client"
    })
    Attribuer.belongsTo(poste, {
        foreignkey: "id_poste",
        as: "id_poste"
    })
    return Attribuer;
  };
