export class MovieInfo {
    Title: string;
    Rating: number;
    ShortDescription: string;
    Runtime: number;
    ReleaseDate: Date;
    MovieThumbnail: string;

    constructor (title: string, rating: number, shortDesc: string, runtime: number, relDate: Date, movieThumb: string) {
        this.Title = title;
        this.Rating = rating;
        this.ShortDescription = shortDesc;
        this.Runtime = runtime;
        this.ReleaseDate = relDate;
        this.MovieThumbnail = movieThumb;
    }
}