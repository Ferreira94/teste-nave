module.exports = {
  dialect: 'postgres',
  host: 'ec2-3-231-194-96.compute-1.amazonaws.com',
  username: 'pscemnecrqgqan',
  password: '4dd8dc61a6a1ca1b7fbba84a0afc5cc8292cea31a1bc1cd5b64bad3c93efc38f',
  database: 'd9fgr59bdtjn7',
  define: {
    timestamps: false,
    underscored: true,
  },
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
};

