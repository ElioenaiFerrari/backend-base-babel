import { DataTypes, Model } from 'sequelize';
import Bcrypt from 'bcryptjs';
import dev from '@/controllers/dev';

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
        hooks: {
          beforeSave(devInstance) {
            const salts = Bcrypt.genSaltSync(Number(process.env.BCRYPT_SALTS));
            const hash = Bcrypt.hashSync(devInstance.password, salts);

            devInstance.password = hash;

            return devInstance;
          },
        },
      }
    );
  }
}

export default Dev;
