/**
 * @jest-environment jsdom 
 */

import { IMovie } from "../models/Movie";
import * as functions from "../functions";

test("should sort movies correctly from A-Z", () => {
    //arrange 
    let testData: IMovie[] = [
        { 
            Title: "Snövit", 
            Type: "movie", 
            Poster: "http://clipart-library.com/clipart/8iAbqKnaT.htm", 
            imdbID: "tt3766394", Year: "1998" 
        },
        { 
            Title: "Balto", 
            Type: "movie", 
            Poster: "http://clipart-library.com/clipart/19-7iaRGn66T.htm", 
            imdbID: "tt3766399", 
            Year: "1995" },
        { 
            Title: "Paw Patrol", 
            Type: "series", 
            Poster: "http://clipart-library.com/clipart/138137.htm", 
            imdbID: "tt3766398", 
            Year: "2018" },
        { 
            Title: "Askungen", 
            Type: "movie", 
            Poster: "http://clipart-library.com/clipart/1899279.htm", 
            imdbID: "tt3766391", 
            Year: "2020" }
    ];

    //act 
    let newArray: IMovie[] = functions.movieSort(testData, true);

    //assert
    expect(newArray[0].Title).toBe("Askungen");
});

test("should sort movies correctly from Z-A", () => {
    //arrange 
    let testData: IMovie[] = [
        { 
            Title: "Snövit", 
            Type: "movie", 
            Poster: "http://clipart-library.com/clipart/8iAbqKnaT.htm", 
            imdbID: "tt3766394", Year: "1998" 
        },
        { 
            Title: "Balto", 
            Type: "movie", 
            Poster: "http://clipart-library.com/clipart/19-7iaRGn66T.htm", 
            imdbID: "tt3766399", 
            Year: "1995" },
        { 
            Title: "Paw Patrol", 
            Type: "series", 
            Poster: "http://clipart-library.com/clipart/138137.htm", 
            imdbID: "tt3766398", 
            Year: "2018" },
        { 
            Title: "Askungen", 
            Type: "movie", 
            Poster: "http://clipart-library.com/clipart/1899279.htm", 
            imdbID: "tt3766391", 
            Year: "2020" }
    ];

    //act 
    let newArray: IMovie[] = functions.movieSort(testData, false);

    //assert
    expect(newArray[0].Title).toBe("Snövit");
    expect(newArray[1].Title).toBe("Paw Patrol");
    expect(newArray[2].Title).toBe("Balto");
    expect(newArray[3].Title).toBe("Askungen");
})

test("should keep order when desc is true", () => {
    //arrange 
    let testData: IMovie[] = [
        { 
            Title: "Balto", 
            Type: "movie", 
            Poster: "http://clipart-library.com/clipart/19-7iaRGn66T.htm", 
            imdbID: "tt3766399", 
            Year: "1991" },
        { 
            Title: "Balto", 
            Type: "movie", 
            Poster: "http://clipart-library.com/clipart/19-7iaRGn66T.htm", 
            imdbID: "tt3766399", 
            Year: "1992" },
        { 
            Title: "Balto", 
            Type: "movie", 
            Poster: "http://clipart-library.com/clipart/19-7iaRGn66T.htm", 
            imdbID: "tt3766399", 
            Year: "1993" }
    ];

    //act 
    let newArray: IMovie[] = functions.movieSort(testData, true);

    //assert
    expect(newArray[0].Year).toBe("1991");
    expect(newArray[1].Year).toBe("1992");
    expect(newArray[2].Year).toBe("1993");
})

test("should keep order when desc is false", () => {
    //arrange 
    let testData: IMovie[] = [
        { 
            Title: "Balto", 
            Type: "movie", 
            Poster: "http://clipart-library.com/clipart/19-7iaRGn66T.htm", 
            imdbID: "tt3766399", 
            Year: "1991" },
        { 
            Title: "Balto", 
            Type: "movie", 
            Poster: "http://clipart-library.com/clipart/19-7iaRGn66T.htm", 
            imdbID: "tt3766399", 
            Year: "1992" },
        { 
            Title: "Balto", 
            Type: "movie", 
            Poster: "http://clipart-library.com/clipart/19-7iaRGn66T.htm", 
            imdbID: "tt3766399", 
            Year: "1993" }
    ];

    //act 
    let newArray: IMovie[] = functions.movieSort(testData, false);

    //assert
    expect(newArray[0].Year).toBe("1991");
    expect(newArray[1].Year).toBe("1992");
    expect(newArray[2].Year).toBe("1993");
})

test("should sort movies correctly when no parameter for desc is submitted", () => {
    //arrange 
    let testData: IMovie[] = [
        { 
            Title: "Snövit", 
            Type: "movie", 
            Poster: "http://clipart-library.com/clipart/8iAbqKnaT.htm", 
            imdbID: "tt3766394", Year: "1998" 
        },
        { 
            Title: "Balto", 
            Type: "movie", 
            Poster: "http://clipart-library.com/clipart/19-7iaRGn66T.htm", 
            imdbID: "tt3766399", 
            Year: "1995" },
        { 
            Title: "Paw Patrol", 
            Type: "series", 
            Poster: "http://clipart-library.com/clipart/138137.htm", 
            imdbID: "tt3766398", 
            Year: "2018" },
        { 
            Title: "Askungen", 
            Type: "movie", 
            Poster: "http://clipart-library.com/clipart/1899279.htm", 
            imdbID: "tt3766391", 
            Year: "2020" }
    ];

    //act 
    let newArray: IMovie[] = functions.movieSort(testData);

    //assert
    expect(newArray[0].Title).toBe("Askungen");
});