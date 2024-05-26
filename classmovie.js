class Movie {

    constructor(title, studio, rating = "PG") {
    
    this.title = title;
    
    this.studio = studio;
    
    this.rating = rating;
    
    }
    
    static getPG(movies) {
    
    return movies.filter(movie => movie.rating === "PG");
    
    }
    
    }
    
    const casinoRoyale = new Movie("Casino Royale", "Eon Productions", "PG-13");
    
    console.log("Title:", casinoRoyale.title);
    
    console.log("Studio:", casinoRoyale.studio);
    
    console.log("Rating:", casinoRoyale.rating);
    
    const moviesArray = [
    
    new Movie("Movie1", "Studio1", "PG"),
    
    new Movie("Movie2", "Studio2", "PG-13"),
    
    new Movie("Movie3", "Studio3", "R"),
    
    ];
    
    const pgMovies = Movie.getPG(moviesArray);
    
    console.log("PG Rated Movies");
    
    pgMovies.forEach(movie => {
    
    console.log("title:", movie.title, "| Studio:”, movie.studio, “| Rating:”, movie.rating");
    
    });
    
    class Person {
    
    constructor(name, age, occupation) {
    
    this.name = name;
    
    this.age = age;
    
    this.occupation = occupation;
    
    }
    
    }
    
    const person = new Person("John Doe", 30, "Software Engineer");
    
    console.log("name:", person.name);
    
    console.log("age:", person.age);
    
    console.log("occupation:", person.occupation);