import 'dotenv/config';
import Sequelize from 'sequelize';
import dbConfig from '@/config/db';
import Injections from '@/injections';

const { NODE_ENV } = process.env;

const conn = new Sequelize(dbConfig[NODE_ENV]);

Injections.modelInjections(conn);

export default conn;
