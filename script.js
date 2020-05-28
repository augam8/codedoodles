SERVER_URL="http://localhost:3033"

let listingsDiv = document.getElementById("listings")
let addListingDiv = document.getElementById("add-listing")

function getListings() {
	fetch(SERVER_URL+'/listings').then((response) => response.json())
	.then((listings) => displayListings(listings))
	.catch((error) => console.error(error))
}

function addListing(listing) {
	fetch(SERVER_URL+'/listings',{
		credentials: 'include',
		method: 'LISTING',
		headers: {
			'Content-type': 'application/json',
		},
		body: JSON.stringify(listing)
	}).then((response) => response.json())
	.then((listing) =>  {
		listingsDiv.prepend(createListing(listing))
	})
	.catch((error) => console.log("error adding listing:", error))
}

function createListing(listing) {
	const {toy, username, description, age_range, condition, suburb} = listing
	let listingDiv = document.createElement("div")
	let toyP = document.createElement("div")
	toyP.textContent = toy
	toyP.classList.add("toy")
	toyP.setAttribute("id", listing._id)
	let usernameP = document.createElement("div")
	usernameP.textContent = username
	usernameP.classList.add("username")
	let descriptionP = document.createElement("div")
	descriptionP.classList.add("description")
    descriptionP.textContent = description
    //add age_range, condition, suburb
	listDiv.appendChild(toyP)
	listDiv.appendChild(usernameP)
	listDiv.appendChild(descriptionP)
	listDiv.classList.add("list")
	return listingDiv
}

function displayListings(listings) {
	console.log(listings)
	listings.forEach((listing) => {
		postsDiv.appendChild(createListing(listing))
	})
}

function handleAddListing() {
	let toy = document.getElementById("toy")
	let description = document.getElementById("description")
	let listing = {
		'toy': toy.value,
		'description': description.value
	}
	addListing(listing)
	toy.value = null	
	description.value = null	
}

getListings()
document.getElementById("listing-button").addEventListener("click", handleAddPost)