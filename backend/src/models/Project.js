import { Model, DataTypes } from 'sequelize';

export default class Project extends Model {
  static init(sequelize) {
    super.init({
      name: DataTypes.STRING,
    }, {
      sequelize
    })
  }

  static associate(models) {
    this.belongsToMany(models.Naver, { foreignKey: 'project_id', through: 'naver_projects', as: 'navers' });
  }
}