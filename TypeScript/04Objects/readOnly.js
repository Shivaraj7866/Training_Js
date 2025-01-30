var myUser = {
    _id: "12345",
    name: "S",
    email: "s@gmail.com",
    isActive: true,
};
// myUser._id="3214" 
myUser.name = "SHIVA";
myUser.email = "shi@lco.dev";
myUser.isActive = false;
function debitInfo(num) {
    return "the card details contains ".concat(num.cardnumber, " number and ").concat(num.cardDate, " date also cvv ").concat(num.cvv);
}
console.log(debitInfo({ cardnumber: "1233", cardDate: "12-05-2023", cvv: 321 }));
