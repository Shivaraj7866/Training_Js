//object_protos

let object_protos = {
  getSummary: function () {
    return `${this.title} was written by ${this.author} in year of ${this.year}`;
  },
  getAge: function () {
    return new Date().getFullYear() - this.year;
  },
};

// let book1 = Object.create(object_protos)
// book1.title = 'Book1'
// book1.author = 'John Doe'
// book1.year = 2012

let book1 = Object.create(object_protos, {
  title: { value: "book 1" },
  author: { value: "John Doe" },
  year: { value: "2012" },
//   getSummary2:{value:function(){
//     return 'how are you oops ? ' + `${this.author}` ;
//   } }
});

// book1.prototype.getSummary2 = function(){
//     return 'how are you oops ? ' + `${this.author}` ;
//   }

console.log(book1);
// console.log(book1.getSummary2());
