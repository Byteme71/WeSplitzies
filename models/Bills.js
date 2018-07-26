module.exports = function (sequelize, DataTypes) {

    var Bills = sequelize.define("Bills", {

        items: {
            type: DataTypes.STRING
        },
        price: {
            type: DataTypes.INTEGER
        },
        qty: {
            type: DataTypes.INTEGER
        }

    });

    Bills.associate = function (models) {
        Bills.belongsTo(models.QrCode, {
            foreingKey: {
                allowNull: false
            }
        });
    };

    return Bills;
};