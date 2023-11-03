let request = require('supertest');
const TEST_PORT = 7000;
const HOST = "localhost";
request = request(`http://${HOST}:${TEST_PORT}`);

import {describe, expect, test} from '@jest/globals';

const app = require("../src/app.ts");
// const routes = require(`../src/lib/routes.ts`);

let server: any;
beforeAll(() => {
  server = app.listen(TEST_PORT);
});

describe("http tests", () => {
  test("GET '/' returns status code 302", async() => {
    let response = await request.get("/");
    expect(response.statusCode).toBe(302);
  });

  test("GET '/home' returns status code 200", async() => {
    let response = await request.get("/home");
    expect(response.statusCode).toBe(200);
  });
}); 

afterAll(() => { 
  server.close();
}); 
