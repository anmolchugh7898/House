const { DataTypes } = require('sequelize');

module.exports = billData;

function billData(sequelize) {
    const attributes = {
        name: { type: DataTypes.STRING, allowNull: false },
        description: { type: DataTypes.STRING, allowNull: false },
        category_id: { type: DataTypes.INTEGER, allowNull: false },
        amount: { type: DataTypes.INTEGER, allowNull: false },
        type: { type: DataTypes.ENUM(0, 1), allowNull: false },
        createdAt: { type: DataTypes.DATE, allowNull: false, defaultValue: DataTypes.NOW },
        updatedAt: { type: DataTypes.DATE, allowNull: false, defaultValue: DataTypes.NOW }
    };

    return sequelize.define('bill', attributes);
}