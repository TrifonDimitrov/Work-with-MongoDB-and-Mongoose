const { MongoClient } = require('mongodb');

const conectionString = `mongodb://localhost:27017`;
const client = new MongoClient(conectionString);

async function run() {
    const db = client.db('admin');
    const collection = db.collection('students');

    const students = await collection.find().toArray();

    console.log(students);
}

run();