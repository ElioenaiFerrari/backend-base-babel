import 'dotenv/config';
import Sequelize from 'sequelize';
import dbConfig from '@/config/db';
import Resources from '@/resources';

const { NODE_ENV } = process.env;

const conn = new Sequelize(dbConfig[NODE_ENV]);

Resources.modelInjections(conn);

export default conn;
