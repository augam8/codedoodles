SERVER_URL="http://localhost:3033"


let listingsDiv = document.getElementById("show-listings")
function getListings() {
	fetch(SERVER_URL+'/listings').then((response) => response.json())
	.then((listings) => displayListings(listings))
	.catch((error) => console.error(error))
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
    //usernameList.getElementsByTagName("div").setAttribute("class", div._id)
    //document.getElementsByTagName("usernameList").setAttribute("class", "divShow"); //added

   
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

getListings()
