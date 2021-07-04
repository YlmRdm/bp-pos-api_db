module.exports = {
    HOST: "localhost",
    USER: "postgres",
    PASSWORD: "mithra23",
    DB: "bp_api_db",
    dialect: "postgres",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};