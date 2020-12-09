var books = require('./books.json');
var city = require('./city.json');
var addUser = require('./addUser.json');
var user = require('./user.json');
// and so on

module.exports = () => ({
    books: books,
    city: city,
    addUser: addUser,
    user: user
        // Something more
});

// module.exports = function() {
//     return {
//         books: books,
//         city: city,
//         addUser: addUser,
//         user: user
//             // and so on
//     }
// }


// const books = require("books");
// const user = require("user");
// const city = require("city");
// const addUser = require("addUser");

// module.exports = {
//     books,
//     user,
//     city,
//     addUser,
// };