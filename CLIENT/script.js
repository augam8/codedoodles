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
		
		method: 'POST',
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
	let listDiv = document.createElement("div")
	
	let toyList = document.createElement("div")
	toyList.textContent = toy
	toyList.classList.add("toy")
	toyList.setAttribute("id", listing._id)
	
	let usernameList = document.createElement("div")
	usernameList.textContent = username
	usernameList.classList.add("username")
	
	let descriptionList = document.createElement("div")
	descriptionList.classList.add("description")
    descriptionList.textContent = description
	
	let age_rangeList = document.createElement("div")
	age_rangeList.classList.add("age_range")
	age_rangeList.textContent = age_range
	
	let conditionList = document.createElement("div")
	conditionList.classList.add("condition")
	conditionList.textContent = condition
	
	let suburbList = document.createElement("div")
	suburbList.classList.add("suburb")
    suburbList.textContent = suburb
	
	listDiv.appendChild(toyList)
	listDiv.appendChild(usernameList)
	listDiv.appendChild(descriptionList)
	listDiv.appendChild(age_rangeList)
	listDiv.appendChild(conditionList)
	listDiv.appendChild(suburbList)
	listDiv.classList.add("list")
	return listDiv
}

function displayListings(listings) {
	console.log(listings)
	listings.forEach((listing) => {
		listingsDiv.appendChild(createListing(listing))
	})
}

function handleAddListing() {
	
	let username = document.getElementById("username")
	let toy = document.getElementById("toy")
	let description = document.getElementById("description")
	let age_range = document.getElementById("age_range")
	let condition = document.getElementById("condition")
	let suburb = document.getElementById("suburb")
	let listing = {
		'username': username.value,
		'toy': toy.value,
		'description': description.value,
		'age_range': age_range.value,
		'condition': condition.value,
		'suburb': suburb.value
	}
	addListing(listing)
	username.value = null
	toy.value = null	
	description.value = null
	age_range.value = null
	condition.value = null
	suburb.value = null

}


getListings()
document.getElementById("add-listing").addEventListener("click", handleAddListing)