module.exports = function(sequelize, DataTypes) {
    let Burger = sequelize.define("Burger", {
        isEaten: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            default: false,

        },
        name: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                len: [2]
            }
        }
    });

    return Burger;
}