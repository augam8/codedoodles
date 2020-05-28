const {
	getAllListings,
	getListingById,
	addPost,
	deletePost,
	updatePost
} = require ("../utils/listings_utilities")

//function getPosts(req,res){
    //res.send(getAllPosts(req))
//}

const getListings = function(req, res) {
    
    // execute the query from getAllPosts
	getAllListings(req).exec((err, listings) => {
    console.log("this is inside exec")
            if (err) {
				res.status(500)
				res.json({
					error: err.message
				})
			}
			res.send(listings)
        })
        
}

const getListing = function(req, res) {
	// execute the query from getPostById
	getListingById(req).exec((err,listing) => {
		if (err) {
			res.status(404)
			res.send("Listing not found")
		}
		res.send(listing)
	})
}



module.exports ={
    getListings, getListing

}