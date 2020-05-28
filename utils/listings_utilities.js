const Listing = require("../model/listing");

// Exported functions

// get all posts
// return a query
const getAllListings = function (req) {
   console.log("inside utilities")
    // If we're passed a category in the query, filter on that category
   // if (req.query.age_range) return Post.findByAge_Range(req.query.age_range)
   return Listing.find();

};

// get post by id
// returns a query
const getListingById = function (req) {
    return Listing.findById(req.params.id);
};


module.exports = {
    getAllListings,
    getListingById

}
