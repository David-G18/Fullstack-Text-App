import { Sequelize } from 'sequelize';
import { config } from './config';

const sequelize = new Sequelize(config.database, config.dbUser, config.dbPass, {
    host: 'localhost',
    dialect: 'postgres'
});

export default sequelize;