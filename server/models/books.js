// File Name: COMP229-F2020-MidTerm-301145346 Author: Irits Anna Mathew
// Course Code & Name: COMP229 Web Application Development
// Student ID: 301145346

let mongoose = require('mongoose');

// create a model class
let Book = mongoose.Schema({
    Title: String,
    Description: String,
    Price: Number,
    Author: String,
    Genre: String
},
{
  collection: "books"
});

module.exports = mongoose.model('Book', Book);
