const {mongoClient, MongoClient} = require('mongodb');

const conectionString = `mongodb://localhost:27017`;
const client = new MongoClient(conectionString);