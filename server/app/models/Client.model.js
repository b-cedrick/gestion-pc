
const attribuer = require("Attribuer.model.js")

module.exports = (sequelize, Sequelize) => {
    const Client = sequelize.define("client", {
        nom: {
        type: Sequelize.STRING
      },
        prenom: {
        type: Sequelize.STRING
      }
    });
    
    Client.hasMany(attribuer)
    return Client;
  };
