'use strict';
module.exports = (sequelize, DataTypes) => {
  const Fake = sequelize.define('Fake', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING
  }, {
    underscored: true,
  });
  Fake.associate = function(models) {
    // associations can be defined here
  };
  return Fake;
};