import { DataTypes } from 'sequelize'
import sequelize from '../db'

const Text = sequelize.define('texts', {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    allowNull: false
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false
  }
})

export default Text
