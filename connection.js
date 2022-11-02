const { MongoClient, ServerApiVersion } = require("mongodb");

require("dotenv").config();

const uri = process.env.DB_CONNECTION_STRING;

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const connection = client.connect();
module.exports = connection;
