const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const CandidateSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: false,
    },
    birthdate: {
        type: Date,
        required: true,
    },

});

CandidateSchema.plugin(mongoosePaginate);

mongoose.model('Candidate', CandidateSchema);