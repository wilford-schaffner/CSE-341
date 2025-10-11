const connection = require("dotenv");
connection.config({ quiet: true });
const MongoClient = require('mongodb').MongoClient;
 
let _db;
 
const initDb = (callback) => {
  if (_db) {
    console.log('Db is already initialized!');
    return callback(null, _db);
  }

MongoClient.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    ssl: true,
    sslValidate: true,
    tlsAllowInvalidCertificates: false,
    tlsAllowInvalidHostnames: false,
    serverSelectionTimeoutMS: 5000,
    connectTimeoutMS: 10000,
    socketTimeoutMS: 45000,
})
.then((client) => {
    _db = client;
    callback(null, _db);
})
.catch((err) => {
    callback(err);
});
};
 
const getDb = () => {
  if (!_db) {
    throw Error("Db not initialized");
  }
  return _db;
};
 
module.exports = {
  initDb,
  getDb,
};