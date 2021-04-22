class MovieModel {
    
    constructor(movieObject, movieName, length, poster, director, mainStars) {
        if (arguments.length === 1 && typeof movieObject === "object") {
            this.movieName = movieObject.movieName;
            this.length = movieObject.length;
            this.poster = movieObject.poster;
            this.director = movieObject.director;
            this.mainStars = movieObject.mainStars;
           
        } else {
        this.movieName = movieName;
        this.length = length;
        this.poster = poster;
        this.director = director;
        this.mainStars = mainStars;
        }
    }    
}

export default MovieModel;