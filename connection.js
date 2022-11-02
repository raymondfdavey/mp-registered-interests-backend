// require("dotenv").config();
const { MongoClient, ServerApiVersion } = require("mongodb");

const uri = process.env.DB_CONNECTION_STRING;

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const connection = client.connect();
module.exports = client;
