const mongoose = require('mongoose');

mongoose.connect(`mongodb://localhost:27017/admin`)
.then(() => console.log('DB connected successfuly'));

const studentSchema = new mongoose.Schema({
    name: String,
    age: Number,

});

const Student = mongoose.model('Student', studentSchema);