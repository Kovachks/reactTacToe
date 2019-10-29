module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
      userName: {
        type: DataTypes.STRING,
        allowNull: false
      },
      password: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
      },
      email: {
        type: DataTypes.STRING,
        defaultValue: false
      }
    });
    return User;
  };
  