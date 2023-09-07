class person{
    constructor(firstname,lastname,gender,DOB){
        this.firstname = firstname;
        this.lastname = lastname;
        this.gender = gender;
        this.DOB = DOB;
    }
}
var details = new person ( "steve","jobs","Male","25/02/1955");
console.log(details.firstname + " " +details.lastname);
console.log(details.gender);
console.log(details.DOB);