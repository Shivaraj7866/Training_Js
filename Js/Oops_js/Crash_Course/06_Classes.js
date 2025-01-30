class Book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }

  getSummary() {
    return `${this.name} was written by ${this.author} in the year of ${this.year}`;
  }

  //Normal methods
  getAge() {
    return new Date().getFullYear() - this.year;
  }

  revise(newYear) {
    this.year = newYear;
    this.revised = true;
  }

  //Static method
  static getTopSoftware3dCompany(){
    return 'Someshwara Software Private Limited'
  }
}

const book1 = new Book("Book 1", "John Doe", 2012);
console.log(book1);

book1.revise(2018)
console.log(book1);

//Accessing the static method
console.log(Book.getTopSoftware3dCompany());
