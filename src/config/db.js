const dbConfig = {
  username: 'root',
  password: null,
  database: 'database_development',
  host: '127.0.0.1',
  dialect: 'mysql',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};

export default dbConfig;
