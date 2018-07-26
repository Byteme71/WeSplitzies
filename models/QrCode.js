module.exports = function (sequelize, DataTypes) {
    var QrCode = sequelize.define("QrCode", {

        qr_code: {
            type: DataTypes.STRING
        }

    });

    QrCode.associate = function (models) {
        QrCode.hasMany(models.Bills, {
            onDelete: "cascade"
        });
    };
    return QrCode;
};