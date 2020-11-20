import { DataTypes, Model } from 'sequelize';

class Dev extends Model {
  static init(sequelize) {
    super.init(
      {
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        phone: DataTypes.STRING,
      },
      {
        sequelize,
      }
    );
  }

  static associate(models) {}
}

export default Dev;
