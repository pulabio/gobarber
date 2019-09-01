module.exports = {
  dialect: 'postgres',
  host: '192.168.99.101',
  port: '32776',
  username: 'postgres',
  password: 'docker',
  database: 'gobarber',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};

// underscored makes table names underscored instead of camel cased
// underscored all makes the same for other names, such as columns names
