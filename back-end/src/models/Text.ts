import { DataTypes } from 'sequelize'
import sequelize from '../db'

const Text = sequelize.define('texts', {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  date: {
    type: DataTypes.DATEONLY
  }
}, {
  timestamps: false
})

export default Text
