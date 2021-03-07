import { Model, DataTypes } from 'sequelize';

export default class Naver extends Model {
  static init(sequelize) {
    super.init({
      name: DataTypes.STRING,
      birthdate: DataTypes.DATE,
      admission_date: DataTypes.DATE,
      job_role: DataTypes.STRING,
    }, {
      sequelize
    })
  }

  static associate(models) {
    this.belongsToMany(models.Project, { foreignKey: 'naver_id', through: 'naver_projects', as: 'projects' });
  }
}