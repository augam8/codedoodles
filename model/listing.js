const mongoose = require("mongoose")
const Schema = mongoose.Schema;

// Define Post schema
const Listing = new Schema({
    toy: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    age_range: {
        type: String,
        required: true
    },
    condition: {
        type: String,
        required: true
    },
    suburb: {
        type: String,
        required: true
}
});

Listing.statics.findByAge_Range = function (age_range) {
    return this.find({
        age_range: age_range
    });
};

module.exports = mongoose.model("Listing", Listing);