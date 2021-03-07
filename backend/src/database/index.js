import Sequelize from 'sequelize';
import dbConfig from '../config/database';

import Naver from '../models/Naver';
import Project from '../models/Project';

const connection = new Sequelize(dbConfig);

Naver.init(connection);
Project.init(connection);

Naver.associate(connection.models);
Project.associate(connection.models);

export default connection;