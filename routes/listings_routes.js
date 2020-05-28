const express = require("express")
const router = express.Router()
const {
	getListings,
	getListing,
	makeListing,
	removeListing,
    changeListing
} = require("../controller/listings_controller")

// READ
// GET on '/posts'
// Returns all posts
router.get("/", getListings)

// READ
// GET on '/posts/:id'
// Returns post with given id
router.get("/:id", getListing)

// CREATE
// POST on '/posts'
// Creates a new post
//router.post("/", makeListing)

// DELETE
// DELETE on '/posts/:id'
// Deletes a post with id
//router.delete("/:id", removeListing)

// UPDATE
// PUT on 'posts/:id'
// Updates a post with id
//router.put("/:id", changeListing)



module.exports = router