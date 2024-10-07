const url = require("url");

const myUrl = new URL('http://mywebsite.com/hello.html?id=100&status=active');

// Serialized URL : get the url 
console.log(myUrl.href);
console.log(myUrl.toString());

// Host (root domain)
console.log(myUrl.host);

//Hostname (does not get the port :800)
console.log(myUrl.hostname);

// Path name
console.log(myUrl.pathname);

// Serialised query : get the queries parameters
console.log(myUrl.search);

// Retrieve Parameters as objects
console.log(myUrl.searchParams);

// Add parameters
myUrl.searchParams.append('abc', '123')
console.log(myUrl.searchParams);

// Loops through the parameters
myUrl.searchParams.forEach((value, name) => console.log(`${name}: ${value}`))

