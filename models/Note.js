const mongoose = require('mongoose');
//   const subSchema = new mongoose.Schema({

//   });

const NoteSchema = new mongoose.Schema({
    // CustomerData: {
    //     type: Object,
    //     default: {}
    // }
    occasion: {
        type: String,
        required: true,
        maxlength: [200, 'Description cannot be more than 200 characters']
    },
    budget: {
        type: Number,
        required: true,
        maxlength: [200, 'Description cannot be more than 200 characters']
    },
    deliverytime: {
        type: String,
        required: true,
        maxlength: [200, 'Description cannot be more than 200 characters']
    },
    deliverylocation: {
        type: String,
        required: true,
        maxlength: [200, 'Description cannot be more than 200 characters']
    },
    customerNameAndNumber: {
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

module.exports = mongoose.models.Note || mongoose.model('Note', NoteSchema);