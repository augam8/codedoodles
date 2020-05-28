#Toy Joy

Basic Toy Swap client
This is a basic client written with plain javascript for the express toy joy server.

It supports:

authentication (login/logout)
listing all toys
adding a toy
editing/changing a toy
removing a toy
Some things to note:

Cors

If you are using authentication, you have to enable credentials in the cors options, and if you do that, you have to specify allowed origins as show in the first example.

In this case, you need to add your live server url with port to the whitelist on your running server. Here's an example:

app.js

// live server is using port 3033 (add to whitelist)
const whitelist = ['http://127.0.0.1:3033/']
app.use(cors({
    credentials: true,
    origin: function (origin,callback) {
        // Check each url in whitelist and see if it includes the origin (instead of matching exact string)
        const whitelistIndex = whitelist.findIndex((url) => url.includes(origin))
		console.log("found whitelistIndex", whitelistIndex)
        callback(null,whitelistIndex > -1)
    }
}));
Note that if you are not configuring authentication (and therefore won't have to send credentials from the client), your cors implementation can be much simpler (and just allow everything), like this:

app.js

app.use(cors())
Using authentication

If you implement authentication in your server, you need to send credentials with your client post requests. You have to do this for login, and for any other post (or delete, put) request that requires an authenticated session. To do this, add the option 'credentials':'include' to the fetch request. Here's an example:

script.js

fetch(SERVER_URL+'/auth/login', {
	credentials: 'include',
	method: 'LISTING',
	headers: {
		'Content-type': 'application/json'
	},
	body: JSON.stringify({
		'username': username,
		'password': password
	})
)
