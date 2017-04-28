// npm install and require the axios module
const axios = require('axios');
// call axios.get and use the omdb api to download information about all of the Lord of the Rings movies.
axios
    .get('http://www.omdbapi.com/?' + 's=lord%20of%20the%20rings')
    .then(function(response){
        console.log(response.data.Search);
    })