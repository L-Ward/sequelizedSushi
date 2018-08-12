module.exports = function (sequelize, DataTypes) {
  var Sushi = sequelize.define("Sushi", {
    sushi_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    devoured: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
  },
    {
      freezeTableName: true,
    }
  );
  return Sushi;
}
