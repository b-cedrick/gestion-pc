module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("user", {
      mail: {
        type: Sequelize.STRING
      },
      pwd: {
        type: Sequelize.STRING
      }
    });
  
    return User;
  };
