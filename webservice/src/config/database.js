module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'docker',
  database: 'ddrteste',
  define: {
    timestamps: true,
    underscore: true,
    underscoreAll: true,
  }
};