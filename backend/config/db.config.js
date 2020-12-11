module.exports = {
  HOST: "localhost",
  USER: "adanWeb",
  PASSWORD: "12345",
  DB: "bd_users_ecom",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
