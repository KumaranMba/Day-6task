// Answer for the 1st question A & B.
class Movie {

     constructor ( title, studio, rating) {
    this.title = title;
    this.studio = studio;
    this.rating = rating || "PG";
}
}
var result = new Movie("Casino Royale","Eon Productions");
console.log(result.title);
console.log(result.studio);
console.log(result.rating);

// Answer for the c & D section.

class movie{
    constructor(title,studio,rating){
        this.title = title;
        this.studio = studio;
        this.rating = rating || "PG";
    }
     getPG (movie) {
        return movie.filter((movie)=> movie === "PG" );
}

}
var result = new movie("Casino Royale","Eon Productions","PG 13");

console.log("Movie title:", tresult.title);
console.log("Movie studio:",result.studio);
console.log("Movie rating:",result.rating);
