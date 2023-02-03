/**
 * @jest-environment jsdom
 */

import { getData } from "../services/movieservice";
import { testData } from "../services/__mocks__/movieservice";

jest.mock("axios", () => ({
  get: async (url: string) => {
    return new Promise((resolve, reject) => {
      if (url.endsWith("error")) {
        reject([]);
      } else {
        resolve({ data: {Search: testData} });
      }
    });
  },
}));

test("should get data correctly", async () => {
  // act
  let movies = await getData("test")

  //assert
  expect(movies.length).toBe(4);
  expect(testData[0].Title).toBe("Askungen");
});

test("should get error getting data", async () => {
  //act
  let movies = await getData("error");

  //assert
  expect(movies.length).toBe(0);
  
});



