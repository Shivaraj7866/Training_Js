//Constructor Book
function Book(name, author, year) {
  this.name = name;
  this.author = author;
  this.year = year;
}

Book.prototype.getSummary = function () {
  return `${this.name} was written by ${this.author} in the year of ${this.year}`;
};

// Constructor Magazine
function Magazine(name, author, year, month) {
  Book.call(this, name, author, year);
  this.month = month;
}

// Inherit prototype
Magazine.prototype = Object.create(Book.prototype);

//Magazine constructor
Magazine.prototype.constructor = Magazine

const book1 = new Magazine("book1", "spiderman", 2002, "may");
const book2 = new Magazine("book2", "batman", 2004, "june");
const book3 = new Magazine("book3", "superman", 2006, "august");

console.log(book1);
