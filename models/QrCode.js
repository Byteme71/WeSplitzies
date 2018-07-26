module.exports = function (sequelize, DataTypes) {
    var Qrcode = sequelize.define("Qrcode", {

        qr_code: {
            type: DataTypes.STRING
        }

    });

    Qrcode.associate = function (models) {
        Qrcode.hasMany(models.Bill, {
            onDelete: "cascade"
        });
    };
    return Qrcode;
};