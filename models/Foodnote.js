const mongoose = require('mongoose');
//   const subSchema = new mongoose.Schema({

//   });

const NoteSchema = new mongoose.Schema({
    // CustomerData: {
    //     type: Object,
    //     default: {}
    // }
    Food: {
        type: String,
        required: true,
        maxlength: [200, 'Description cannot be more than 200 characters']
    },
    calorie: {
        type: Number,
        required: true,
        maxlength: [200, 'Description cannot be more than 200 characters']
    },
    deliverytime: {
        type: String,
        required: true,
        maxlength: [200, 'Description cannot be more than 200 characters']
    },
    location: {
        type: String,
        required: true,
        maxlength: [200, 'Description cannot be more than 200 characters']
    },
    nameNumber: {
        type: String,
        required: true,
        maxlength: [200, 'Description cannot be more than 200 characters']
    },
    message: {
        type: String,
        required: true,
        maxlength: [200, 'Description cannot be more than 200 characters']
    }
    
});

module.exports = mongoose.models.Note || mongoose.model('Foodnote', NoteSchema);