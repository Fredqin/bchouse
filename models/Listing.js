const mongoose = require('mongoose');

const listingScheme = new mongoose.Schema({
    mls: {type: String, unique:true},
    area: {type: String},
    thumbnail: {type: String},
    description: {type: String},
    address: {type: String},
    price: {type: Number},
    year: {type: Number},
    type: {type: String},
    bedroom: {type: Number},
    bathroom: {type: Number},
    size: {type: Number},
    age: {type: Number},
    maintenance: {type: Number}
}, { timestamps: true });

const Listing = mongoose.model('Listing', listingScheme);

module.exports = Listing;