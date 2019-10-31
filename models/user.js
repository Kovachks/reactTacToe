module.exports = function(sequelize, DataTypes) {
  
    var User = sequelize.define("User", {
      userName: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      }
    });
    return User;
  };