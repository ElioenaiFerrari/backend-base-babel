import 'dotenv/config';
import Sequelize from 'sequelize';
import dbConfig from '@/config/db';
import Model from '@/common/model';

const { NODE_ENV } = process.env;

const conn = new Sequelize(dbConfig[NODE_ENV]);

Model(conn);

export default conn;
