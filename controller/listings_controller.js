const {
	getAllListings,
	getListingById,
	addListing,
	deleteListing,
	updateListing
} = require ("../utils/listings_utilities")
const Listing = require ("../model/listing")

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

const makeListing = function(req, res) {
	console.log(req.body)
	// execute the query from getPostById
	addListing(req).save((err, listing) => {
		console.log(listing)
		if (err) {
			res.status(500)
			res.json({
				error: err.message
			})
		}
		res.status(201)
		res.send(listing)
	})
}

const removeListing = function(req, res) {
	// Check for error from middleware
	if (req.error) {
		res.status(req.error.status)
		res.send(req.error.message)
	} else {
		// execute the query from deletePost
		Listing.findByIdAndRemove(req.params.id).exec(err => {
			if (err) {
				res.status(500)
				res.json({
					error: err.message
				})
			}
			res.sendStatus(204)
		})
	}
}

const changeListing = function(req, res) {
	// Check for error from middleware
	if (req.error) {
		res.status(req.error.status)
		res.send(req.error.message)
	} else {
		// execute the query from updatePost
		updateListing(req).exec((err, listing) => {
			if (err) {
				res.status(500)
				res.json({
					error: err.message
				})
			}
			res.status(200)
			res.send(listing)
		})
	}
}

module.exports ={
    getListings, getListing, makeListing, removeListing, changeListing

}