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

const addListing = function (req) {
    
    // Set date for this new post
    
    return new Listing(req.body);
};

// delete post
// returns a query
const deleteListing = function (id) {
    return Listing.findByIdAndRemove(id);
};

// update post
// returns a query
const updateListing = function (req) {
    
    // use new:true to return the updated post rather than the original post
    return Listing.findByIdAndUpdate(req.params.id, req.body, {
        new: true
    });
};


module.exports = {
    getAllListings,
    getListingById,
    addListing,
    deleteListing,
    updateListing

}
