import { DataTypes, Model } from 'sequelize';

class Tech extends Model {
  static init(sequelize) {
    super.init(
      {
        name: DataTypes.STRING,
      },
      {
        sequelize,
      }
    );
  }

  static associate({ Dev }) {
    this.belongsTo(Dev, { as: 'dev', foreignKey: 'dev_id' });
  }
}

export default Tech;
