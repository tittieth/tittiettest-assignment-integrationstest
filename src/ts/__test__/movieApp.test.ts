/**
 * @jest-environment jsdom
 */

import { IMovie } from "../models/Movie";
import * as movieApp from "../movieApp";
import { testData } from "../services/__mocks__/movieservice";
import { getData } from "../services/movieservice";

beforeEach(() => {
  document.body.innerHTML = "";
});

jest.mock("../services/movieservice.ts");

test("should run init correctly", () => {
  //arrange
  document.body.innerHTML = `<form id="searchForm">
  <input type="text" id="searchText" placeholder="Skriv titel här" />
  <button type="submit" id="search">Sök</button>
</form>`;

  let spyOnHandleSubmit = jest.spyOn(movieApp, "handleSubmit").mockReturnValue(
    new Promise<void>((resolve) => {
      resolve();
    })
  );

  //act
  movieApp.init();

  (document.querySelector("#searchForm") as HTMLFormElement).submit();

  //assert
  expect(spyOnHandleSubmit).toHaveBeenCalled();
  expect(spyOnHandleSubmit).toHaveBeenCalledTimes(1);
  spyOnHandleSubmit.mockRestore();
});

test("should run handlesubmit and create html", async () => {
  //arrange
  document.body.innerHTML = `<input type="text" id="searchText" placeholder="Skriv titiel här" />
  <div id="movie-container"></div>`;

  //act
  await movieApp.handleSubmit();

  //assert
  let result = document.querySelector("#movie-container");

  expect(testData[0].Title).toBe("Askungen");
  expect(testData.length).toBe(4);
  expect(result?.innerHTML).toContain(`<div class="movie">`)
});

test("should call displayNoResult when running else-statement inside handlesubmit", async () => {
  //arrange
  document.body.innerHTML = `<form id="searchForm">
    <input type="text" id="searchText" placeholder="Skriv titel här"/>
    <button type="submit" id="search">Sök</button>
    </form>
    <div id="movie-container"></div>`;

  let spyOnDisplayNoResult = jest
    .spyOn(movieApp, "displayNoResult")
    .mockReturnValue();

  (document.getElementById("searchText") as HTMLInputElement).value = "Bamse";

  let movies: IMovie[] = await getData("test");
  console.log(movies);

  //act
  await movieApp.handleSubmit();

  //assert
  expect(spyOnDisplayNoResult).toHaveBeenCalledTimes(1);
  expect(movies.length).toBe(0);
  spyOnDisplayNoResult.mockRestore();
});

test("should call displayNoResult when running catch-statement inside handlesubmit", async () => {
  //arrange
  document.body.innerHTML = `<form id="searchForm">
    <input type="text" id="searchText" placeholder="Skriv titel här"/>
    <button type="submit" id="search">Sök</button>
    </form>
    <div id="movie-container"></div>`;

  let spyOnDisplayNoResult = jest
    .spyOn(movieApp, "displayNoResult")
    .mockReturnValue();

  (document.getElementById("searchText") as HTMLInputElement).value = "error";

  let movies: IMovie[] = await getData("test");
  console.log(movies);

  //act
  await movieApp.handleSubmit();

  //assert
  expect(spyOnDisplayNoResult).toHaveBeenCalledTimes(1);
  expect(movies.length).toBe(0);
  spyOnDisplayNoResult.mockRestore();
});

test("should display text no result correctly", () => {
  //arrange
  document.body.innerHTML = `<div id="movie-container"></div>`;

  let container: HTMLDivElement = document.getElementById(
    "movie-container"
  ) as HTMLDivElement;
  container.innerHTML = "";

  //act
  movieApp.displayNoResult(container);

  //assert
  const msg = container.querySelector("p");
  expect(msg?.innerHTML).toEqual("Inga sökresultat att visa");
});