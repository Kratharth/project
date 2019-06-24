"use strict";
const MongoClient = require('mongodb').MongoClient;
const MONGODB_URI = "mongodb://dbuser:dbuser@cluster0-shard-00-00-faxde.mongodb.net:27017,cluster0-shard-00-01-faxde.mongodb.net:27017,cluster0-shard-00-02-faxde.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority"; 
let cachedDb = null;

function connectToDatabase (uri) {
  console.log('=> connect to database');

  if (cachedDb) {
    console.log('=> using cached database instance');
    return Promise.resolve(cachedDb);
  }

  return MongoClient.connect(uri).then(db => {
    cachedDb = db.db('mydb');
    return cachedDb;
  });
}

function queryDatabase (db,body) {
  console.log('=> query database');
  console.log(body);
  const collection = db.collection('studentdata');
    // Find some documents'
  collection.updateOne({ USN :body.USN}
      , { $set: {"scores.0.score":body.cie1 ,"scores.1.score":body.cie2} });
      return "success";
}

module.exports.handler = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;

  let body=event;

  connectToDatabase(MONGODB_URI)
    .then(db => queryDatabase(db,body))
    .then(result => {
      console.log('=> returning result: ', result);
      callback(null,result);
    })
    .catch(err => {
      console.log('=> an error occurred: ', err);
      callback(err);
    });
};