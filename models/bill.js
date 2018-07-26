module.exports = function (sequelize, DataTypes) {

    var Bill = sequelize.define("Bill", {

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

    Bill.associate = function (models) {
        Bill.belongsTo(models.Qrcode, {
            foreingKey: {
                allowNull: false
            }
        });
    };

    return Bill;
};