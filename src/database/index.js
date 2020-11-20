import 'dotenv/config';
import Sequelize from 'sequelize';
import dbConfig from '@/config/db';

const { NODE_ENV } = process.env;

const connection = new Sequelize(dbConfig[NODE_ENV]);

export default connection;
