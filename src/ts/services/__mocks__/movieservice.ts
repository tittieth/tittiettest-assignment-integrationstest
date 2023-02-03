import { IMovie } from "../../models/Movie";

export let testData: IMovie[] = [
    { 
        Title: "Askungen", 
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
        Title: "Snövit", 
        Type: "movie", 
        Poster: "http://clipart-library.com/clipart/1899279.htm", 
        imdbID: "tt3766391", 
        Year: "2020" }
];

export async function getData(SearchText: string): Promise<IMovie[]> {
    return new Promise((resolve, reject) => {
        if (SearchText === "error") {
            reject([]);
          } else {
            resolve(testData.filter((movie) => movie.Title.includes(SearchText)));
          }
    });
  } 
  