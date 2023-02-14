import { DataTypes } from "sequelize";
import sequelize from "../db";

const Text = sequelize.define('Text', {
    id: {
        type: DataTypes.UUID
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    },
})

export default Text;