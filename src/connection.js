require("dotenv").config();

const { MongoClient, ServerApiVersion } = require("mongodb");

const uri = process.env.DB_CONNECTION_STRING;

// console.log("PRINTING THE GOD DAMN FUCKING URI", uri);

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

const connection = client.connect();

module.exports = client;
